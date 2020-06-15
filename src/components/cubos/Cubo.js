import React, {useEffect}  from "react";
import { Divider, Form, Grid } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "MuiTypography-body1": {
    marginLeft: "15px;"
  }
}));

export default function FormCuboControl(props) {
  const classes = useStyles();
  const [value, setState] = React.useState(0);
  const [cubo, setCubo] = React.useState(0);  
  var cuboId = props.idCubo;

  useEffect(() => {
    
    setCubo({ cubo : cuboId });  
  }, [cuboId]); 
  //const { children, value, index, ...other } = props;
  const handleChange = (event, newValue) => {
    setState(newValue);
  };



  return (
    <Form className={classes["MuiTypography-body1"]}>
      <Grid columns={2} relaxed="very" stackable>
        <Form.Input fluid label="Alias" placeholder="Alias" width={7} />
        <Form.Input fluid label="Owner" placeholder="Owner" width={7} />
      </Grid>
      <Form.Group>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form.Group inline>
              <label>Parametrizable</label>
              <Form.Radio
                //inline
                label="Si"
                value="y"
                checked={value === "y"}
                onChange={handleChange}
              />
              <Form.Radio
                label="No"
                value="n"
                checked={value === "n"}
                onChange={handleChange}
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
                value="y"
                checked={value === "y"}
                onChange={handleChange}
              />
              <Form.Radio
                label="No"
                value="n"
                checked={value === "n"}
                onChange={handleChange}
              />
            </Form.Group>
          </Grid.Column>
        </Grid>
      </Form.Group>
      <Form.Input label="Descripcion" placeholder="Descripcion" width={14} />
      <Form.Button>Aceptar</Form.Button>
    </Form>
  );
}
