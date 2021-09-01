import React from 'react';
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

import arrow from './arrow.svg'

const StyledNavbar = Styled.nav`

    position:relative;
    z-index: 10; 
    background-color: #2C2931;
    transition-duration:1s;
    transition-property: display;
    height: 100vh;
    width:25%;
    max-width: 13rem;

    li:nth-child(1){
        display:none;
    }

    li:hover{
        background-color:#00A3FF;
    }
    li:nth-child(1):hover{

        background-color: Transparent;
    }
    ul{
        list-style-type:none;
        padding: 3.4rem 0 0 0;
        margin:0; 
    }
    li:nth-child(1) img{
        transform: rotate(180deg) scale(0.8,0.8) translateX(0.2rem);
        text-align: left;
    }
    button{

        background-color: Transparent;
        border: none;
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        text-align: left;
        padding: 1rem 2.75rem;
        
    }

    @media(max-width: 450px){

        position: absolute;
        width: 50%;
        display: ${props => props.uwu ? "block" : "none"};

        ul{
            padding: 0;
        }
        
        li:nth-child(1){
            display:block;
        }

    }

`


function Navbar(props){
    
    let links = props.links.map((item, i ) => (

        <li key={i}><button>{item}</button></li>)
    )

    return(
        
        <StyledNavbar uwu={props.isVisible}>
            <ul>
                <li className="backButton"><button onClick={props.toggler}><img src={arrow} alt="arrow"></img></button></li>
                
                {links}
            </ul>

        </StyledNavbar>
        )
    }
export default Navbar