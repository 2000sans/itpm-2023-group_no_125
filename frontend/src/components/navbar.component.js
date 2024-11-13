import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "./Logo.jpeg";


const TopBar = () => {
    return(
        <Navbar bg="primary" variant="dark " className="Topbar">
            <Container>

            <Link to="/">
          <img src={logo} alt="Logo" width={110} height={110} />
        </Link>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "Black", fontFamily: "consolas", fontWeight:"bold"}}> </Link>{' |'}
                        
                       
                        
                        <Link to="/Donee/" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Donee</Link>{'|'}
                        <Link to="/" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Donor</Link>{'|'}
                        
                       
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                   
                        <i className="fas fa-shopping-cart"></i>
                    </h4>
                   
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;