import React from "react";
import MaterialTable from "material-table";
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
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "(% o Cant.) Muestra", field: "name" },
      { title: "Surname", field: "surname" },
      {
        title: "Birth Year",
        field: "birthYear",
        type: "numeric"
      },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      {
        name: "Mehmet",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  const tabStyle = {};
  tabStyle.paddingLeft = `-24px;`;

  return (
    <Form className={classes["ui.form"]}>
      <MaterialTable
        title="Editar atributos del Cubo"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    </Form>
  );
}
