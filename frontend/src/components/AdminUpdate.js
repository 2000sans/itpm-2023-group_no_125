import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function AdminUpdate() {
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

        const newUser = {
            security_pin,
            user_name,
            email,
            contact,
            nic_number,
            password
        }
        axios.put(`http://localhost:8070/admin/update/${id}`, newUser).then(() => {
            alert("Admin Updated");
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
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white"><center>Edit Donor Details</center> </h5>

                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            SECURITY PIN
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="security_pin" value={security_pin} onChange={(e) => {
                                                setSecurity_pin(e.target.value);
                                            }} required />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            USER NAME
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="user_name" value={user_name} onChange={(e) => {
                                                setUser_name(e.target.value);
                                            }} required />    </p>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            EMAIL
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="email" value={email} onChange={(e) => {
                                                setEmail(e.target.value);
                                            }} required />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            CONTACT
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="contact" value={contact} onChange={(e) => {
                                                setContact(e.target.value);
                                            }} required />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="pt-3 pb-0 sm:pt-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            NIC                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="nic_number" value={nic_number} onChange={(e) => {
                                                setNic_number(e.target.value);
                                            }} required />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="pt-3 pb-0 sm:pt-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"> */}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            PASSWORD
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <input type="text" id="password" value={password} onChange={(e) => {
                                                setPassword(e.target.value);
                                            }} required />
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update </button>
            </form>
        </center>


    )

}
