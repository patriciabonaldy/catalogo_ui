import React, {useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Form, Grid, Message } from "semantic-ui-react";
//import { makeStyles } from "@material-ui/core/styles";
import * as actions from '../../store/actions';
import axios from '../../axios-catalogo';
import Aux from '../global/aux/Aux';
import Modal from '../global/modal/Modal';

/*const useStyles = makeStyles(theme => ({
  "MuiTypography-body1": {
    marginLeft: "15px;"
  }
}));*/

export default function FormCuboControl() {
  const storeCatalogo = useSelector(store => store);
  const dispatch = useDispatch()
  const cuboSelected = storeCatalogo.table.cuboSelected
  //const classes = useStyles();
  const [state, setState] = React.useState({cubo : {alias: "",
                                          owner: "",
                                          creation_date: "",
                                          database_name: "",
                                          description: "",
                                          last_update: "",
                                          log: "",
                                          param: "",
                                          setCubo: "",
                                          table_name: "",
                                          status: true}}
                                          );  
  
  useEffect(() => {   
    setState({ cubo : cuboSelected });    
  }, [cuboSelected]); 
  

  const paramHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},state.cubo);
    cuboLocal.param = newValue.value;
    setState({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const loghandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},state.cubo);
    cuboLocal.log = newValue.value;
    setState({cubo: cuboLocal});
  };

  const aliasHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},state.cubo);
    cuboLocal.alias = newValue.value;
    setState({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const ownerHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},state.cubo);
    cuboLocal.owner = newValue.value;
    setState({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const descriptioHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},state.cubo);
    cuboLocal.description = newValue.value;
    setState({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const checkValidity = () => {
    let isValid = true;
    console.log(state);
    if (state.cubo.alias ==='') {
        isValid = state.cubo.alias.trim() !== '' && isValid;
    }
    if (state.cubo.owner ==='') {
      isValid = state.cubo.owner.trim() !== '' && isValid;
    }
    if (state.cubo.description ==='') {
      isValid = state.cubo.description.trim() !== '' && isValid;
    }
    return isValid;
  }
  
  const messageField = (value, campoName) =>   value=== '' ?"Campo requerido":campoName;

  const guardarHandle = (event) => {    
    event.preventDefault();
    if(checkValidity()){
      axios.put( '/cubos.json', state.cubo )
      .then( response => {
        console.log(response);
      } )
      .catch( error => {
          //this.setState( { loading: false } );
          console.log(error);
      } );
    }
    
  };

  const message = <Message compact
  header='Changes in Service'
  content='We updated our privacy policy here to better service our customers. We recommend reviewing the changes.'
/>
  return (
    <Aux>
      <Modal show={true} >
          {message}
      </Modal>
      <Form className='attached fluid segment'>
      <Grid columns={2} relaxed="very" stackable>
        <Form.Input fluid label="Alias" placeholder={messageField(state.cubo.alias, "Alias")} width={7} value={state.cubo.alias|| ''} onChange={aliasHandleChange} error={state.cubo.alias=== '' ? true:false}/>
        <Form.Input fluid label="Owner" placeholder={messageField(state.cubo.owner, "Owner")} width={7} value={state.cubo.owner|| ''} onChange={ownerHandleChange} error={state.cubo.owner=== '' ? true:false}/>
      </Grid>
      <Form.Group>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form.Group inline>
              <label>Parametrizable</label>
              <Form.Radio
                //inline
                label="Si"
                value="Y"
                checked={state.cubo.param === "Y"}
                onChange={paramHandleChange}
              />
              <Form.Radio
                label="No"
                value="N"
                checked={state.cubo.param === "N"}
                onChange={paramHandleChange}
              />
            </Form.Group>
          </Grid.Column>
          <Divider vertical />
          <Grid.Column>
            <Form.Group inline>
              <label>Log</label>
              <Form.Radio
                //inline
                label="Si"
                value="Y"
                checked={state.cubo.log === "Y"}
                onChange={loghandleChange}
              />
              <Form.Radio
                label="No"
                value="N"
                checked={state.cubo.log === "N"}
                onChange={loghandleChange}
              />
            </Form.Group>
          </Grid.Column>
        </Grid>
      </Form.Group>
      
      <Form.Input label="Descripcion" placeholder={messageField(state.cubo.description, "Descripcion")} width={14} value= {state.cubo.description|| ''} onChange={descriptioHandleChange} error={state.cubo.description=== '' ? true:false}/>
      <Form.Button onClick={guardarHandle} disabled={state.cubo.alias ==='' ||state.cubo.owner ==='' || state.cubo.description=== ''}>Aceptar</Form.Button>
    </Form>
    </Aux>
    
  );
}
