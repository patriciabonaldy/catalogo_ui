import React, {useEffect}  from "react";
import { useSelector } from "react-redux";
import MaterialTable from 'material-table';
import { Form } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "MuiTypography-body1": {
    marginLeft: "15px;"
  },
  "ui.form": {
    position: "unset;",
    "max-width": "95%;",
    "margin-left": "-24px;"
  }
}));

export default function FormAtributosControl() {
  const storeCatalogo = useSelector(store => store);
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "Cubo", field: "database_name" },
      { title: "Cruce", field: "table_name" },
      { title: "Columna", field: "column_name" },
      { title: "Alias", field: "alias" },
      { title: "Descripcion", field: "description" },
      { title: "Fecha de Creacion", field: "creation_date" }
      /*{
        title: "Birth Year",
        field: "birthYear",
        type: "numeric"
      }*/
    ],
    data: [{
        name: "",
        surname: "",
        birthYear: 0,
        birthCity: 0
      }],
    columnsSelected: []  
  });

  useEffect(() => {  
    setState(prevState => {
      return { ...prevState, data: storeCatalogo.column.columns  };
    });
     
  }, [storeCatalogo.column]); 

  const tabStyle = {};
  tabStyle.paddingLeft = `-24px;`;

  return (
    <Form className={classes["ui.form"]}>
      <MaterialTable
        title="Editar atributos del Cubo"
        columns={state.columns}
        data={state.data}
        actions={[
          {
            icon: 'save',
            tooltip: 'Aplicar Cambios',
            isFreeAction: true,
            onClick: (event) => alert("Cambios Aplicados")
          }
        ]}
        editable={{
          /*onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),*/
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    const columnsSelected = [...prevState.columnsSelected];
                    data[data.indexOf(oldData)] = newData;
                    columnsSelected.push(newData);

                    return { ...prevState, data, columnsSelected };
                  });
                }
              }, 600);
            }),
          /*onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })*/
        }}
      />
    </Form>
  );
}
