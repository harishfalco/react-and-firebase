import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbatron from 'react-bootstrap/Jumbotron';
import './css/Header.css';
// import {image} from './css/image.jfif';
const Header = () => {
    return (
        <div>
            <Jumbatron style={{background:'#ccf2f4'}} >
                <Container>
                    <h1 className="title">PPM OILS</h1>
                    <p className="quote">We take inspiration from the traditional recipes, and create a unique  experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </Container>
            </Jumbatron>
            
        </div>
    )
}

export default Header
