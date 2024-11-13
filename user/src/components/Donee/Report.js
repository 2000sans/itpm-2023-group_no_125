import React, { Component } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";


const Donee = props => ( <tr >
    </tr> 
)

export default class DoneeList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Donee: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Donee/')
            .then(response => {
                this.setState({ Donee: response.data })

              
            })
            .catch((error) => {
                console.log(error);
            })
     
    }

    getPosts() {
        axios.get('http://localhost:5000/Donee/')
            .then(response => {
                this.setState({ Donee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DoneeList() {
        return this.state.Donee.map(currentDonee => {
            return <Donee Donee = { currentDonee }
            deleteDonee = { this.deleteDonee }
            key = { currentDonee._id }
            />;
        })
    }
    myfunction(){
   
        window.print();
       }
  

    render() {return (
        <div>

           <div className = "top-tittle-bar">
           <text>{" "} </text>  <h2 className= 'tittle'>   Your All Activity</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                               
                                
                            </from>
                        </div>
                        <div className = "container" > 
            <div className = "row" >
            <div className = "col-lg-9 mt-4 mb-2" >
            </div >
            <div className = "col-lg-3 mt-2 mb-2" >
           
            </div > 
            </div> 
            <table className = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th >State </th>
            <th >Item 1 </th> 
            <th > Qty </th> 
            <th > Item 2 </th> 
            <th > Qty </th>
            <th > Item 3</th>
            < th > Qty </th>  
            < th > Item 4 </th> 
            < th > Qty </th>  
            < th > Status </th> 
            < th > Admin Note </th> 
            </tr >
            </thead><tbody >  {
                this.state.Donee.map((props) => ( 
                    <tr key = { props.id }>
                        <td > { props.State } </td> 
                    <td > { props.Item1 } </td> 
                    <td > { props.Qty1 } </td> 
                    <td > { props.Item2 } </td> 
                    < td > { props.Qty2 } </td>  
                    < td > { props.Item3 } </td> 
                    <td > { props.Qty3 } </td> 
                    <td > { props.Item4 } </td> 
                    < td > { props.Qty4 } </td>  
                    < td > { props.Status } </td>
                    < td > { props.SpecialNote } </td>
                    </ tr >))}  </tbody> </table >
                    <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
                      
                      </div></div>
                      
        )
    }
}