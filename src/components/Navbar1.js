import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Alert  from 'react-bootstrap/Alert';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {BiMenu} from 'react-icons/bi';
import {FiHome} from 'react-icons/fi';
import { MdLocalGroceryStore } from "react-icons/md";
import {RiMailAddFill} from 'react-icons/ri';
import {BsInfoCircle} from  "react-icons/bs";

import './css/Navbar.css';

const Navbar1 = () => (
  <div>
    <Navbar collapseOnSelect expand="lg"  variant="primary" onSelect = {(key)=>console.log(`key-pressed`)} className="nav-Class">
       <Navbar.Brand href="#home" className="brand">PPM OILS</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" >
              <BiMenu />
       </Navbar.Toggle>
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  className="nav-Link" href="#Home" eventKey="/home">
          <span className="icon"> 
            <FiHome />
          </span> Home
          </Nav.Link>
        <Nav.Link className="nav-Link" href="#products" eventKey="/products" >
          <span className="icon">
         <MdLocalGroceryStore /> 
          </span>   Products
        </Nav.Link>
        <Nav.Link className="nav-Link" href="#aboutus" eventKey="/aboutus">
          <span className="icon"> 
            <RiMailAddFill />
          </span>   Contact us
        </Nav.Link>
        <Nav.Link className="nav-Link"  href="#contactus" eventKey="/contactus">
          <span className="icon">
              <BsInfoCircle />
          </span>   About us
         </Nav.Link>
       </Nav>
   </Navbar.Collapse>
  </Navbar>
   
  </div>
)

export default Navbar1
