import React, {useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Form, Grid } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from '../../store/actions';
import axios from '../../axios-catalogo';

const useStyles = makeStyles(theme => ({
  "MuiTypography-body1": {
    marginLeft: "15px;"
  }
}));

export default function FormCuboControl() {
  const storeCatalogo = useSelector(store => store);
  const dispatch = useDispatch()
  const cuboSelected = storeCatalogo.table.cuboSelected
  const classes = useStyles();
  const [cubo, setCubo] = React.useState({cubo : {alias: "",
                                          OWNER: "",
                                          creation_date: "",
                                          database_name: "",
                                          description: "",
                                          last_update: "",
                                          log: "",
                                          param: "",
                                          setCubo: "",
                                          table_name: ""}}
                                          );  
  
  useEffect(() => {   
    setCubo({ cubo : cuboSelected });    
  }, [cuboSelected]); 
  

  const paramHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},cubo.cubo);
    cuboLocal.param = newValue.value;
    setCubo({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const loghandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},cubo.cubo);
    cuboLocal.log = newValue.value;
    setCubo({cubo: cuboLocal});
  };

  const aliasHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},cubo.cubo);
    cuboLocal.alias = newValue.value;
    setCubo({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const ownerHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},cubo.cubo);
    cuboLocal.OWNER = newValue.value;
    setCubo({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const descriptioHandleChange = (event, newValue) => {
    let cuboLocal = Object.assign({},cubo.cubo);
    cuboLocal.description = newValue.value;
    setCubo({cubo: cuboLocal});
    dispatch(actions.setCubo(cuboLocal));
  };

  const guardarHandle = (event) => {
    axios.put( '/cubos.json', cubo )
    .then( response => {
      console.log(response);
    } )
    .catch( error => {
        //this.setState( { loading: false } );
        console.log(error);
    } );
  };

  return (
    <Form className={classes["MuiTypography-body1"]}>
      <Grid columns={2} relaxed="very" stackable>
        <Form.Input fluid label="Alias" placeholder="Alias" width={7} value={cubo.cubo.alias|| ''} onChange={aliasHandleChange}/>
        <Form.Input fluid label="Owner" placeholder="Owner" width={7} value={cubo.cubo.OWNER|| ''} onChange={ownerHandleChange}/>
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
                checked={cubo.cubo.param === "Y"}
                onChange={paramHandleChange}
              />
              <Form.Radio
                label="No"
                value="N"
                checked={cubo.cubo.param === "N"}
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
                checked={cubo.cubo.log === "Y"}
                onChange={loghandleChange}
              />
              <Form.Radio
                label="No"
                value="N"
                checked={cubo.cubo.log === "N"}
                onChange={loghandleChange}
              />
            </Form.Group>
          </Grid.Column>
        </Grid>
      </Form.Group>
      <Form.Input label="Descripcion" placeholder="Descripcion" width={14} value= {cubo.cubo.description|| ''} onChange={descriptioHandleChange} />
      <Form.Button onClick={guardarHandle}>Aceptar</Form.Button>
    </Form>
  );
}
