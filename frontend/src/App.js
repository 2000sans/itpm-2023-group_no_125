import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar.component";


import EditUserdonate from "./components/Userdonate/Edit-Userdonate.component";
import UserdonateList from "./components/Userdonate/Userdonate-list.component";

import EditDonee from "./components/Donee/Edit-Donee.component";
import DoneeList from "./components/Donee/Donee-list.component";

function App() {

    return (<Router >
        <div className = "container"  ><Nav/>
      
        <br/>
        
        <Route path = "/" exact component = { UserdonateList}/>
       <Route path = "/Userdonate-Edit/:id" component = { EditUserdonate }/>

       <Route path = "/Donee-Edit/:id" component = { EditDonee }/>
       <Route path = "/Donee/" component = { DoneeList }/>


          </div > </Router>
    );
}

export default App;