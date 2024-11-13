import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar.component"
import Footer from "../../components/Footer.component"
export default class CreateUserdonate extends Component {
    constructor(props) {
        super(props);


        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeItem1 = this.onChangeItem1.bind(this);
        this.onChangeItem2 = this.onChangeItem2.bind(this);
        this.onChangeItem3 = this.onChangeItem3.bind(this);
        this.onChangeItem4 = this.onChangeItem4.bind(this);
        this.onChangeQty1 = this.onChangeQty1.bind(this);
        this.onChangeQty2 = this.onChangeQty2.bind(this);
        this.onChangeQty3 = this.onChangeQty3.bind(this);
        this.onChangeQty4 = this.onChangeQty4.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onChangeSendbeforedate = this.onChangeSendbeforedate.bind(this);
       
       

        this.onSubmit = this.onSubmit.bind(this);
       

        this.state = {
            State: this.props.match.params.cat,
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
            Status: 'Pending',
            SpecialNote: '',
            Userdonate: []
        }
        console.log(`/Province/${this.state.State}`)
    
    }

    onChangeState(e) {
        this.setState({
            State: e.target.value
        })
    }

   

    onChangeItem1(e) {
            this.setState({
                Item1: e.target.value
            })
        }
        
    onChangeItem2(e) {
        this.setState({
            Item2: e.target.value
        })
    }

   

    onChangeItem3(e) {
        this.setState({
            Item3: e.target.value
        })
    }

    

    


    onChangeItem4(e) {
        this.setState({
            Item4: e.target.value
        })
    }

   

    onChangeQty1(e) {
        this.setState({
            Qty1: e.target.value
        })
    }

    onChangeQty2(e) {
        this.setState({
            Qty2: e.target.value
        })
        
    }

    onChangeQty3(e) {
        this.setState({
            Qty3: e.target.value
        })
    }

    onChangeQty4(e) {
        this.setState({
            Qty4: e.target.value
        })
        
    }

    onChangeNote(e) {
        this.setState({
            Note: e.target.value
        })
        
    }

    onChangeSendbeforedate(e) {
        this.setState({
            Sendbeforedate: e.target.value
        })
    }

    

   


    onSubmit(e) {
        e.preventDefault();

        const Userdonate = {
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
            Status: this.state.Status,
        }

        console.log(Userdonate);

        axios.post('http://localhost:5000/Userdonate/add', Userdonate)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Userdonate/');
            });

       

    }

    render() {
        return ( <div > <Navbar/>
            


                   


            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src={`/Province/${this.state.State}.png`}  width="80%" height="70%" alt="description of image" />
            
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Donate To {`${this.state.State}`} </font>
            </h3 > <br></br>
            
            <br></br><form onSubmit = { this.onSubmit } >
   
 
              <div className="row m-0 p-0">
              <div className="col-md-8 m-0 p-2">
                         <label >Item</label>
                             <div className="form-floating">
                                 <input
                                     type="text"
                                     required className="form-control"
                                     value = { this.state.Item1 }
             onChange = { this.onChangeItem1 }/>
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label >Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="number"
                                     required className="form-control"
                         
                                     value = { this.state.Qty1 }
                                     onChange = { this.onChangeQty1 }
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
                                     required className="form-control"
                                     value = { this.state.Item2 }
             onChange = { this.onChangeItem2 }/>
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="number"
                                     required className="form-control"
                         
                                     value = { this.state.Qty2 }
                                     onChange = { this.onChangeQty2 }
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
                                     required className="form-control"
                                     value = { this.state.Item3 }
             onChange = { this.onChangeItem3 }/>
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="number"
                                     required    className="form-control"
                         
                                     value = { this.state.Qty3 }
                                     onChange = { this.onChangeQty3 }
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
                                     required   className="form-control"
                                     value = { this.state.Item4 }
             onChange = { this.onChangeItem4 }/>
             
                             </div>
                         </div>
                         <div className="col-md-4 m-0 p-2">
                       
                         <label>Qty</label>
                             <div className="form-floating">
                                 <input
                                     type="number"
                                     required className="form-control"
                                     
                                     value = { this.state.Qty4 }
                                     onChange = { this.onChangeQty4 }
                                 />
                                
                             </div>
                         </div>
                     </div>
 
             
                     <div className = "form-group" >
 
 <label > Note: </label> 
 <input type = "note"
 required className = "form-control"
 name = "Note"
 placeholder = "Note"
 value = { this.state.Note }
 onChange = { this.onChangeNote}/> </div > 
 
 
  <div className = "form-group" >
 <label > Date: </label>
 <input type = "date"
 required className = "form-control"
 placeholder = "Enter Date"
 value = { this.state.Sendbeforedate }
 onChange = { this.onChangeSendbeforedate }/>
  </div >
 
 
             <div className = "form-group" >
             <input type = "submit"
             value = "Donate Request"
             className = "btn btn-primary"/>
             </div>
             
              </form > </div>
              </div > </div>
             </div ><br/> <br/> <br></br>
          <br></br>
          <br></br><Footer/><br/> <br/>  </div>
        )
    }
}