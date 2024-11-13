import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from "react-bootstrap";




const Userdonate = props => ( <tr >
    
    </tr> 
)

export default class UserdonateList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Cat : "Testaaa",
           
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
                Userdonate: []
            
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Userdonate/')
            .then(response => {
                const searchKey = "Pending";
                const resultt = response.data
                const result = resultt.filter((props) =>
                    props.Status.includes(searchKey)
                )
    
                this.setState({ Userdonate: result })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Userdonate/')
            .then(response => {
                this.setState({ Userdonate: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteUserdonate(id) {
        id.preventDefault()
        axios.get("http://localhost:5000/Userdonate/"+ id)
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
                Status:"Accept",
                Sendbeforedate: response.data.Sendbeforedate,
                SpecialNote: response.data.SpecialNote,
            })
          
        })
        .catch(function(error) {
            
        })


        axios.post('http://localhost:5000/Userdonate/update/' + id, Userdonate)
            .then(res => console.log(res.data));
           
    }


    UserdonateList() {
        return this.state.Userdonate.map(currentUserdonate => {
            return <Userdonate Userdonate = { currentUserdonate }
            deleteUserdonate = { this.deleteUserdonate }
            key = { currentUserdonate._id }
            />;
        })
    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Userdonate/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.State.includes(searchKey)&&  props.Status.includes("Pending")
            )

            this.setState({ Userdonate: result })

        });

    }

    render() {return (
        <div>
          
           


           <div className = "top-tittle-bar">
           <text>{" "} </text>  <h2 className= 'tittle'>   Donors Activity</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                               
                                
                            </from>
                        </div>
                        <div className = "container" > 
            <div className = "row" >
            <div className = "col-lg-9 mt-4 mb-2" >
            </div >
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search" name = "searchQuery"
            onChange = { this.handleSearchArea } ></input> 
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
            < th > Action </th> 
            </tr >
            </thead><tbody >  {
                this.state.Userdonate.map((props) => ( 
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
                    <td >
                    < Link to = { "/Userdonate-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Action </Button> </Link > 
                    
                      </td>  </ tr >))}  </tbody> </table >
                     
           
                      
                      
                      </div></div>
                      
        )
    }
}