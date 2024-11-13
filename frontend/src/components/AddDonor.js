import React, { useState } from 'react';
import axios from "axios";
//  import './css/form.css';
import background from './backgroundImage.jpg'

export default function AddUser() {
    const [user_id, setUserId] = useState("");
    const [user_name, setUser_name] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [nic_number, setNic_number] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newUser = {
            user_id,
            user_name,
            email,
            contact,
            nic_number,
            address,
            password
        }
        axios.post("http://localhost:8070/donor/add", newUser).then(() => {
            alert("Donor Added");
            window.location.replace("http://localhost:3000/donor/");
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <>
            <div style={{
                backgroundImage: `url(${background})`, height: "900px", backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <br />
                <br />
                <br />
                <center>

                    <div class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <center>
                            <form className="form" onSubmit={sendData}>

                                <div className="relative z-0 w-full mb-6 group">
                                    <label for=" user_id" className="" >User ID</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder='Enter ID' type="text" id=" user_id" value={user_id} onChange={(e) => {
                                            setUserId(e.target.value);
                                        }} required />

                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="user_name" className="">User Name</label>



                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder='Enter UserName' type="text" id="user_name" value={user_name} onChange={(e) => {
                                        setUser_name(e.target.value);
                                    }} required /></div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="email" className="">Email</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   placeholder='Enter Email' type="email" id="email" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} required /></div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="contact" className="">Contact</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   placeholder='Enter Contact' type="text" id="contact" value={contact} onChange={(e) => {
                                        setContact(e.target.value);
                                    }} required /></div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="nic_number" className="">NIC number</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder='Enter NIC' type="text" id="nic_number" value={nic_number} onChange={(e) => {
                                        setNic_number(e.target.value);
                                    }} required /></div>


                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="password" className="">Address</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder='Enter Address' type="address" id="address" value={address} onChange={(e) => {
                                        setAddress(e.target.value);
                                    }} required /></div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <label for="password" className="">Password</label>


                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder='Enter Password' type="password" id="password" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} required /></div>


                                <br />
                                <div >
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit </button>
                                </div>


                            </form>

                        </center>
                    </div>

                </center>
            </div>
        </>
    )
}