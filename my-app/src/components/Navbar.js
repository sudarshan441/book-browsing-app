  import React, { useContext, useEffect, useState } from "react";
  import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";

   const Links = [
      {
        name: 'Home',
        path: '/',
      },
      {
       name: 'Books',
       path: '/books',
      },
      {
        name: 'MyBooks',
        path: '/mybooks',
      },
    
   ];
  
  const Navbar = () => {

    return (
      <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
      {Links.map(link=><NavLink to={link.path}>{link.name}</NavLink>)} 
      </div>
    )
  };
 
  export default Navbar;