import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer.component";
 //Donor
import EditUserdonate from "./components/Userdonate/Edit-Userdonate.component";
import CreateUserdonate from "./components/Userdonate/Create-Userdonate.component";
import UserdonateList from "./components/Userdonate/Userdonate-list.component";
import Userdonatereport from "./components/Userdonate/Report";

//Donee
import EditDonee from "./components/Donee/Edit-Donee.component";
import CreateDonee from "./components/Donee/Create-Donee.component";
import DoneeList from "./components/Donee/Donee-list.component";
import Doneereport from "./components/Donee/Report";

import Home from "./components/HomePage/HomePage";
import User from "./components/HomePage/UserHome";

function App() {

    return (<Router >
        <div className = "container"  >
       
        <br/>
        <Route path = "/" exact component = { User}/>
        <Route path = "/Userdonate/"  component = { UserdonateList}/>
        <Route path = "/Userdonate-add/:cat" component = { CreateUserdonate }/>
        <Route path = "/Userdonate-Edit/:id" component = { EditUserdonate }/>
        <Route path = "/Userdonate-report/" component = { Userdonatereport }/>

         <Route path = "/Donee/"  component = { DoneeList}/>
        <Route path = "/Donee-add/:cat" component = { CreateDonee }/>
        <Route path = "/Donee-Edit/:id" component = { EditDonee }/>
        <Route path = "/Donee-report/" component = { Doneereport }/>

        <Route path = "/Home/:cat" component = { Home }/>


       

          </div >  </Router>
    );
}

export default App;