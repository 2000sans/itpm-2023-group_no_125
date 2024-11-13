import React, { Component } from 'react'
import { useHistory } from "react-router-dom";


import pic1 from "./img/1.png";
import pic2 from "./img/Donee.jpg";

class Home extends Component {
  constructor(props) {
    super(props);


  this.aa = this.aa.bind(this);
 
  }
  bb (e)  {
    window.location = ('/Donee-add/' + e)
  };

  aa(e){
 
    window.location = ('/Userdonate-add/' + e)
   }


  render(){
  return (
  
      <div className="container-fluid">
      <div className="row">
          <div className="col-12">
            <div
              className="jumbotron jumbotron-fluid mt-4 p-4"
              style={{ backgroundColor: "#1d063b" }}
            >
              <div className="container">
                <h1 className="display-4" style={{color: "#F7AB07", fontFamily: "consolas", fontWeight:"bold",display: 'flex',  justifyContent:'center', alignItems:'center'}}>Home</h1>
              </div>
            </div>
          </div>
        </div>
        <br/>

      <br/>


        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <fieldset className="form-group">
              <div className="row mt-4 mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div
                    className="card text-center card-finance"
                    style={{ width: "20rem" }}
                    onClick={(e) => this.aa(this.props.match.params.cat)}
                  >
                    <img
                      src={pic1}
                      alt="Return and Refund Request"
                      className="card-img-top rounded mx-auto d-block"
                      style={{ width: "35vh", height: "32vh" }}
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn_financial w-100 fw-bold"
                      >
                       Donor
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div
                    className="card text-center card-finance"
                    style={{ width: "20rem" }}
                 onClick={(e) => this.bb(this.props.match.params.cat)}
                  >
                    <img
                      src={pic2}
                      alt="Return and Refund Management"
                      className="card-img-top rounded mx-auto d-block"
                      style={{ width: "36vh", height: "32vh" }}
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn_financial w-100 fw-bold"
                      >
                       Donee
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
   
  );
}
}

export default Home;