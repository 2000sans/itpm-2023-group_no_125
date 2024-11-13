import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
    
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { FiHome, FiBook, FiFileText, FiTrello,FiBriefcase } from "react-icons/fi";

const Header = () => {
    return (
      
            <div id="header">
                <ProSidebar collapsed={false}>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem  >
                                DASHBOARD
                              
                            </MenuItem>
                      
                            <MenuItem   >
                                ORDER MANAGMENT
                                <Link to="/stock" />
                            </MenuItem>
                        
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
       
    );
}


export default Header;