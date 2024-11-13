import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { IoMdMail, IoIosCall, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { FaPowerOff, FaShoppingCart, FaUser } from 'react-icons/fa';



const TopBar = () => {
    return(
        <div className="container-fluid">
      
          
          <div className="col-18">
            
              <div className="col-18">
                <div className="card text-white card-navbar mb-1">
                  <div className="card-body">
                    
                     
                       
                         
                      

                      <Navbar bg="light" variant="dark " className="Topbar">
            <Container>

            <Link to="/">
        
        </Link>
                <Navbar.Brand>
                    <h4>
                    <a href = "http://127.0.0.1:8887/test.html" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Map</a > {'|'}
                        <Link to="/Userdonate/" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Donor</Link>{'|'}
                        <Link to="/Donee/" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Donee</Link>{'|'}
                        
                       
                        <Link  style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                   
                        <i className="fas fa-shopping-cart"></i>
                    </h4>
                   
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
                     
                   
                    
                  </div>
              </div>
              <div className="col-12">
                <span className="icon-navbar">
                  {<FaPowerOff />}
                  <span className="ms-1">Log Out</span>
                </span>
                <span className="icon-navbar">
                  {<FaUser />}
                  <span className="ms-1">Account</span>
                </span>
              </div>
            </div>
          
        </div>
        <div className="row">
          <div className="container-fluid">
            <hr className="new1 mt-2" />
          </div>
        </div>
      </div>
    );
}

export default TopBar;