import React, { Component } from "react";
//import './css/grip.css';
import axios from 'axios';

export default class Rhome extends Component{
  render(){
    return(
      
     <div>
        <br/><br/>
        <center>
        <h1>Register Now As</h1></center>
<br/><br/><br/><br/>

        <center>
        <a href="/rcertificate" className="btn btn-success btnview">  Donee </a></center>
        <br/><br/><br/>
        <center>
        <a href="/rdetails" className="btn btn-success btnview">Donor</a></center>
        <br/><br/><br/>
        <center>
        <a href="/rperformance" className="btn btn-success btnview">Admin</a></center>
     </div>
    )
  }
}