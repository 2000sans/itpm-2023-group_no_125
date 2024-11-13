import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"
import Footer from "../../components/Footer.component"


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

                const resultt = response.data
            const result = resultt.filter((props) =>
                props.Status.includes("Pending")|| props.Status.includes("Reject")
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

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Userdonate/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.State.includes(searchKey) &&  props.Status.includes("Pending")|| props.Status.includes("Reject")
            )

            this.setState({ Userdonate: result })

        });

    }

    render() {return (
        <div><Navbar/>

          <div class="content">

           <div className = "top-tittle-bar">
            <h2 className= 'tittle'>   Donor Active Activity</h2>
            <from style ={{color: "#F7AB07",float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                               
                                
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
                    < Link to = { "/Userdonate-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteUserdonate(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table >
                      
           
            <div style = {{ float: 'left' }} >
            <Link to = "/Userdonate-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > All Activity </button></Link ></div>
                      
                      </div></div><br/> <br/> <br></br>
          <br></br>
          <br></br><Footer/>  </div>
                      
        )
    }
}