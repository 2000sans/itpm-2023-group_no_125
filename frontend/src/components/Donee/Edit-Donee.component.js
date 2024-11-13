import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import { Button } from "react-bootstrap";

export default class EditDonee extends Component {
    constructor(props) {
        super(props);

       
     
        this.onChangeSpecialNote = this.onChangeSpecialNote.bind(this);
     
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            State: '',
            Item1: '',
            Item2: '',
            Item3: '',
            Item4: '',
            Qty1: '',
            Qty2: '',
            Qty3: '',
            Qty4: '',
            Note: '',
            Sendbeforedate: '',
            Status: '',
            SpecialNote: '',
            Donee: []
        }
       
        
   
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Donee/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                   State:response.data.State,
                    Item1: response.data.Item1,
                    Item2: response.data.Item2,
                    Item3:response.data.Item3,
                    Item4:response.data.Item4,
                    Qty1: response.data.Qty1,
                    Qty2: response.data.Qty2,
                    Qty3: response.data.Qty3,
                    Qty4: response.data.Qty4,
                    Note: response.data.Note,
                    Sendbeforedate: response.data.Sendbeforedate,
                    SpecialNote: response.data.SpecialNote,
                    Status: response.data.Status,
                })
              
            })
            .catch(function(error) {
                
            })

        axios.get('http://localhost:5000/Donee/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Donee: response.data.map(Donee => Donee.State),
                      
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    Userdonate() {
      
        const Donee = {
            State: this.state.State,
            Item1: this.state.Item1,
            Item2: this.state.Item2,
            Item3: this.state.Item3,
            Item4: this.state.Item4,
            Qty1: this.state.Qty1,
            Qty2: this.state.Qty2,
            Qty3: this.state.Qty3,
            Qty4: this.state.Qty4,
            Note: this.state.Note,
            Sendbeforedate: this.state.Sendbeforedate,
            Status: "Accept",
            SpecialNote: this.state.SpecialNote,
        }

        console.log(Donee);

        axios.post('http://localhost:5000/Donee/update/' + this.props.match.params.id, Donee)
            .then(res => console.log(res.data));

            
            swal({
                title: "Done!",
                text: "Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Donee/');
               swal();
            });
           
           
    }

    

   


    onChangeSpecialNote(e) {
        this.setState({
            SpecialNote: e.target.value
        })
        
    }


  

    

   


   

    onSubmit(e) {
        e.preventDefault();

        const Donee = {
            State: this.state.State,
            Item1: this.state.Item1,
            Item2: this.state.Item2,
            Item3: this.state.Item3,
            Item4: this.state.Item4,
            Qty1: this.state.Qty1,
            Qty2: this.state.Qty2,
            Qty3: this.state.Qty3,
            Qty4: this.state.Qty4,
            Note: this.state.Note,
            Sendbeforedate: this.state.Sendbeforedate,
            Status: "Reject",
            SpecialNote: this.state.SpecialNote,
        }

        console.log(Donee);

        axios.post('http://localhost:5000/Donee/update/' + this.props.match.params.id, Donee)
            .then(res => console.log(res.data));

            

        swal({
                title: "Done!",
                text: "Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Donee/');
               swal();
            });

    }

    render() {
        return ( <div >

            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://cdn.dribbble.com/users/291221/screenshots/1425333/helper.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Donee Request </font>
            </h3 > <br></br>
            
            <br></br><form onSubmit = { this.onSubmit } >

           
 
              <div className="row m-0 p-0">
              <div className="col-md-8 m-0 p-2">
                         <label >Item</label>
                             <div className="form-floating">
                                 <input
                               
                                     type="text"
                                     className="form-control"
                                     readOnly={true}
                                     value = { this.state.Item1 }
                                    />
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label >Qty</label>
                             <div className="form-floating">
                                 <input 
                                     type="text"
                                     className="form-control"
                                     readOnly={true}
                                     value = { this.state.Qty1 }
                                     
                                    />
                                
                             </div>
                         </div>
                     </div>
 
 
                     <div className="row m-0 p-0">
              <div className="col-md-8 m-0 p-2">
                         <label >Item</label>
                             <div className="form-floating">
                                 <input
                                 readOnly={true}
                                     type="text"
                                     className="form-control"
                                     value = { this.state.Item2 }
                                    />
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="text"
                                     className="form-control"
                                readOnly={true}
                                     value = { this.state.Qty2 }
                                     
                                 />
                                
                             </div>
                         </div>
                     </div>
 
 
                     <div className="row m-0 p-0">
              <div className="col-md-8 m-0 p-2">
                         <label >Item</label>
                             <div className="form-floating">
                                 <input
                                     type="text"
                                     readOnly={true}
                                     className="form-control"
                                     value = { this.state.Item3 }
                                    />
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="text"
                                     readOnly={true}
                                     className="form-control"
                                     value = { this.state.Qty3 }
                                     
                                     />
                                
                             </div>
                         </div>
                     </div>
 
 
                     <div className="row m-0 p-0">
              <div className="col-md-8 m-0 p-2">
                         <label >Item</label>
                             <div className="form-floating">
                                 <input
                                readOnly={true}
                                     type="text"
                                     className="form-control"
                                     value = { this.state.Item4 }
                                     />
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="text"
                                     className="form-control"
                                     readOnly={true}
                                     value = { this.state.Qty4 }
                                    
                                    />
                                
                             </div>
                         </div>
                     </div>
 
             
                     <div className = "form-group" >
 
 <label > Note: </label> 
 <input type = "note"
 required className = "form-control"
 name = "Note"
 readOnly={true}
 placeholder = "Note"
 value = { this.state.Note }
/> </div > 
 
 
  <div className = "form-group" >
 <label > Date: </label>
 <input type = "date"
readOnly={true}
 required className = "form-control"
 placeholder = "Enter Date"
 value = { this.state.Sendbeforedate }
 />
  </div >


  <div className = "form-group" >
 <label > Admin Note: </label>
 <input type = "Note"
 //readOnly={true}
 required className = "form-control"
 value = { this.state.SpecialNote }
 onChange = { this.onChangeSpecialNote}/>
  </div >

 
 
  <div style = {{ float: "right" }}>
  <a href = ""onClick = {() => {this.Userdonate()}} >  
                     <Button data-inline ="true" variant = "btn btn-success" > Accept </Button> </a > </div>

             <div className = "form-group" >
             <input type = "submit"
             value = "Reject"
             className = "btn btn-danger"/>
             </div>
             
              </form > </div>
              </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}