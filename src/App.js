import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HeaderComponent from "./components/Header"
import ListComponent from "./components/ListGuitar"
import AddGuitar from "./components/AddGuitar"
import GetId from "./components/GetGuitarById"

import {AppStyle} from "./style/styled"


function App() {
  return (
    <Router> 
    <AppStyle className="App">
      <HeaderComponent/>
      <Switch>
        <Route path="/" exact component = {ListComponent}/>
        <Route path = "/addguitar" component = {AddGuitar}/> 
        <Route path = "/getguitarbyid" component = {GetId}/>  
      </Switch>     
    </AppStyle>
    </Router>
  );
}

export default App;
