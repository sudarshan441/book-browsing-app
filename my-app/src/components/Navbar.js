import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionLogout } from "../redux/auth/auth.actions";

const Links = [
    {
        name: 'MyBooks',
        path: '/mybooks',
    },
];


const Navbar = () => {
  const dispatch = useDispatch()

  const buttonStyle = {
    backgroundColor: 'red', // Background color
    color: 'white', // Text color
    padding: '10px 20px', // Padding
    border: 'none', // Remove border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Change cursor on hover
  };
  
  const handleLogout=()=>{
    alert(`You have been logged out`);
    return dispatch(ActionLogout());
  }
  
    return (
        <div style={{ backgroundColor: "#3498db",boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
          <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>
              <NavLink style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/">BOOK FEED</NavLink>
            </h1>
            <div >            
              <div>
                {Links.map((link, index) => (
                  <NavLink
                    key={index}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    to={link.path}
                    activeStyle={{ color: "#f39c12" }}
                   >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <button onClick={handleLogout} style={buttonStyle}>Log Out</button>
          </div>
        </div>
      );
};

export default Navbar;
