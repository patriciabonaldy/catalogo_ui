import React, { useState, useEffect, useReducer } from "react";
import List from "@material-ui/core/List";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {classes}  from './styles';
import axios from '../../../axios-catalogo';
import AppMenuItem from "./AppMenuItem";
import cuboReducer from '../../../store/reducers/tables';
import * as actions from '../../../store/actions';


const AppMenu = () => {
  const [menu, setMenu] = useState([]);
  const [cuboFiltered, setCuboFiltered] = useState([]);
  const [cubos, dispatch] = useReducer(cuboReducer, []);
 
  useEffect(() => {
    axios.get( 'https://catalogo-7342a.firebaseio.com/cubo.json')
    .then(response => response)
    .then(response => { 
        let listCubos = response.data.filter(function(cubo) {
          return cubo.ALIAS !== undefined; 
        });   
        setMenu(listCubos);
        setCuboFiltered(listCubos);
        dispatch({
          type: actions.STORE_CUBOS,
          cubos: listCubos
        });
    } )
    .catch( error => {
      console.log(error);
    } );
    
  }, []); 
  
  //TODO: revisar
  function onChangeInput(event) {
    let value = event.target.value;
    let item = menu.filter(function(item) {
      return item.ALIAS.toUpperCase().match(value.toUpperCase()); // === value.toUpperCase();
    });
    setCuboFiltered(item);
  }

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={onChangeInput}
        />
      </div>
      
      <List component="nav" className={classes.appMenu}>
        { 
          cuboFiltered.map((cubo, index) => (
            <AppMenuItem {...cubo} key={index} />
          ))
        }
      </List>
    </>
  );
};


export default AppMenu;
