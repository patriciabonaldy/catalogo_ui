import React, {useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from 'material-table';
import { Form, Message } from 'semantic-ui-react'
//import { makeStyles } from "@material-ui/core/styles";
import * as actions from '../../store/actions';
import axios from '../../axios-catalogo';
import Aux from '../global/aux/Aux';
import Modal from '../global/modal/Modal';

/*const useStyles = makeStyles(theme => ({
  "MuiTypography-body1": {
    marginLeft: "15px;"
  },
  "ui.form": {
    position: "unset;",
    "max-width": "95%;",
    "margin-left": "-24px;"
  }
}));*/

export default function FormAtributosControl() {
  const storeCatalogo = useSelector(store => store);
  const columns = storeCatalogo.column.columns;
  const dispatch = useDispatch()
  //const classes = useStyles();
  const errorLabel = "Campo requerido";
  const [state, setState] = React.useState({
    columns: [
      { title: "Cubo", field: "database_name", editable: "never" },
      //{ title: "Cruce", field: "table_name" },
      { title: "Columna", field: "column_name", editable: "never"  },
      { title: "Alias", field: "alias", validate: rowData => rowData.alias === '' ? errorLabel : '' },
      { title: "Descripcion", field: "description", validate: rowData => rowData.description === '' ? errorLabel : '' },
      { title: "Fecha de Creacion", field: "creation_date", editable: "never" }
    ],
    columnsSelected: [],
    data: []  
  });
  const tabStyle = {};
  tabStyle.paddingLeft = `-24px;`;

  useEffect(() => {  
    setState(prevState => {
      return { ...prevState, data: columns };
    });
     
  }, [columns]); 

  const guardarHandle = () => {
    axios.put( '/columns/1.json', state.columnsSelected )
    .then( response => {
      console.log(response);
    } )
    .catch( error => {
        //this.setState( { loading: false } );
        console.log(error);
    } );
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
      <MaterialTable
        title="Editar atributos del Cubo"
        columns={state.columns}
        data={state.data}
        actions={[
          {
            icon: 'save',
            tooltip: 'Aplicar Cambios',
            isFreeAction: true,
            onClick: (event) => guardarHandle()
          }
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    const columnsSelected = [...prevState.columnsSelected];
                    data[data.indexOf(oldData)] = newData;
                    if(columnsSelected.length===0||columnsSelected.indexOf(oldData)<0){
                      columnsSelected.push(newData);
                    } else {
                      columnsSelected[columnsSelected.indexOf(oldData)] = newData;
                    }
                    dispatch(actions.addTable(columnsSelected));
                    return { ...prevState, data, columnsSelected };
                  });
                }
              }, 600);
            }),
        }}
      />
    </Form>
    </Aux>
    
  );
}
