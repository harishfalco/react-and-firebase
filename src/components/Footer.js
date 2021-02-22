import React from 'react'
import {SiGmail} from "react-icons/si";
import {FiPhoneCall} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBIcon } from "mdbreact";
const Footer = () => {
    return (
        <div>

            <MDBFooter style={{background:"#AAAAAA" ,color:"F7F6e7"}} className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title text-md-center">Links</h5>
                        <div>
                        <ul className="text-center">
                        <li className="list-unstyled">
                            <a href="#!">Home</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Products</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">About us</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Contact us</a>
                        </li>
                        </ul>
                        </div>
                    </MDBCol>
                    <MDBCol md="4" sm="5">
                        
                        <h5 className="title">Our address</h5>
                        <div>
		              35/a,kamaraj Nagar<br />
		              Sidco Post<br />
		              Coimbatore<br />
		              <i><FiPhoneCall /></i>: +852 1234 5678<br />
                      <span className="icon"> <SiGmail /></span>  <a href="mailto:harishfalcon400@gmail.com" >harishfalcon400@gmail.com</a>
                   </div>
                    </MDBCol>
                    <MDBCol md="4" className="text-center">
                        <h5 className="title">Connect with us</h5>
                        <p>
                        <FaInstagram  size={35}/> <FaFacebook size={35} />  <FaTwitterSquare size={35} />
                        </p>
                    </MDBCol>
                    
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        <p style={{padding:'10px',fontWeight:'bold'}}>© Copyright 2020 PPM OILS</p>
                    </MDBContainer>
                </div>
                </MDBFooter>
            
        </div>
    )
}

export default Footer
