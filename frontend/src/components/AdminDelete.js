import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function AdminDelete() {
    const [security_pin, setSecurity_pin] = useState("");
    const [user_name, setUser_name] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [nic_number, setNic_number] = useState("");
    const [password, setPassword] = useState("");

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8070/admin/get/${id}`).then((res) => {
            console.log(res.data.users);
            setSecurity_pin(res.data.users.security_pin);
            setUser_name(res.data.users.user_name);
            setEmail(res.data.users.email);
            setContact(res.data.users.contact);
            setNic_number(res.data.users.nic_number);
            setPassword(res.data.users.password);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    function sendData(e) {
        e.preventDefault();

        axios.delete(`http://localhost:8070/admin/delete/${id}`).then(() => {
            alert("User Deleted");
            window.location.replace("http://localhost:3000/admin/");
        }).catch((err) => {
            alert(err)
        })
    }
    return (

        <center>  
            <form onSubmit={sendData}>
            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white"><center>Delete Donee Details</center> </h5>

                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    SECURITY PIN	
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <input type="text" id="security_pin" value={security_pin} disabled />  
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        USER NAME
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <input type="text" id="user_name" value={user_name} disabled /></p>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        EMAIL
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <input type="text" id="email" value={email} disabled />
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        CONTACT
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <input type="text" id="contact" value={contact} disabled />
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">

                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        NIC                        </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <input type="text" id="nic_number" value={nic_number} disabled />
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
            </form>
        </center>


    )

}
