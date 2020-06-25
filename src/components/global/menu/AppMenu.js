import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {classes}  from './styles';
import axios from '../../../axios-catalogo';
import AppMenuItem from "./AppMenuItem";
import * as actions from '../../../store/actions';


const AppMenu = () => {
  const [menu, setMenu] = useState([]);
  const [cuboFiltered, setCuboFiltered] = useState([]);
  const dispatch = useDispatch();
 
  useEffect(() => {
    axios.get( 'https://catalogo-7342a.firebaseio.com/tables.json')
    .then(response => response)
    .then(response => { 
        let listCubos = response.data.filter(function(cubo) {
          return cubo.alias !== undefined; 
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
  
  
  function onChangeInput(event) {
    let value = event.target.value;
    let item = menu.filter(function(item) {
      return item.alias.toUpperCase().match(value.toUpperCase()); // === value.toUpperCase();
    });
    setCuboFiltered(item);
  }

  function setCubo(cubo){
    dispatch({
      type: actions.SET_CUBO,
      cuboSelected: cubo
    });
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
            <AppMenuItem {...cubo} key={index} setCubo={setCubo}/>
          ))
        }
      </List>
    </>
  );
};


export default AppMenu;
