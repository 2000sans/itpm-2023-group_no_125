import React, { Component } from 'react';
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
            Userdonate: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Userdonate/')
            .then(response => {
                this.setState({ Userdonate: response.data })

              
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
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Userdonate/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Userdonate: this.state.Userdonate.filter((el) => el._id !== id),
            });
        }
    }


    UserdonateList() {
        return this.state.Userdonate.map(currentUserdonate => {
            return <Userdonate Userdonate = { currentUserdonate }
            deleteUserdonate = { this.deleteUserdonate }
            key = { currentUserdonate._id }
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