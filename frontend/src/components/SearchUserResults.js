import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function SearchUserResults() {
    const [users, setUsers] = useState([]);
    const [searchby, keyword] = useParams();
    console.log('Hi')
    useEffect(() => {
        function GetUser() {
            axios.get(`http://localhost:8070/users/search/${searchby}/${keyword}`).then((res) => {
                console.log(res.data);
                console.log('Hi')
                setUsers(res.data);
                console.log(users)
            }).catch((err) => {
                alert(err.message);
            })
        }
        GetUser();

    }, [])
    return (
        <div>
            <br></br>
            <div className="container">
                <div style={{ marginRight: "0px", marginLeft: "auto", width: "30%" }}>
                </div>
                <br></br>
                <center><h3>Results</h3></center>
                <table className="table table-borderless">
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>NIC</th>
                        <th>School</th>
                    </tr>
                    <tbody>
                        {/* {
                            users.map((user) => (
                                <>
                                    <tr>
                                        <td>{user.user_id}</td>
                                        <td>{user.user_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contact}</td>
                                        <td>{user.nic_number}</td>
                                        <td>{user.school}</td>
                                        <td><button onClick={() => {
                                            window.location.replace(`http://localhost:3000/users/get/${user._id}`);
                                        }}>View</button></td>
                                        <td><button onClick={() => {
                                            window.location.replace(`http://localhost:3000/users/update/${user._id}`);
                                        }}>Update</button></td>
                                        <td><button onClick={() => {
                                            window.location.replace(`http://localhost:3000/users/delete/${user._id}`);
                                        }}>Delete</button></td>
                                    </tr>
                                </>
                            ))
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )



}