import React from "react";
import Styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import arrow from "./media/arrow.svg";

const StyledNavbar = Styled.nav`

    position:relative;
    z-index: 10; 
    background-color: #2C2931;
    min-height: 100vh;
    width: 13rem;
    min-width:140px;
    

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
    a{
        display:block;
        white-space: nowrap;
    }

    a, button{

        background-color: Transparent;
        border: none;
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        text-align: left;
        padding: 1rem 2.75rem;
        
    }

    @media(max-width: 500px){

        position: absolute;
        transition: 0.2s ease-in-out;
        width: 50%;
       ${(props) =>
         props.extended
           ? "transform: translateX(0%)"
           : css`
               transform: translateX(-150%);
               opacity: 0%;
             `};

        ul{
            padding: 0;
        }
        
        li:nth-child(1){
            display:block;
        }

    }

`;

function Navbar(props) {
  let links = props.links.map((item, i) => (
    <li key={i}>
      <Link to={`${i}`} onClick={props.toggler}>
        {item}
      </Link>
    </li>
  ));

  return (
    <StyledNavbar extended={props.isVisible}>
      <ul>
        <li>
          <button onClick={props.toggler}>
            <img src={arrow} alt="arrow"></img>
          </button>
        </li>

        {links}
      </ul>
    </StyledNavbar>
  );
}

StyledNavbar.propTypes = {
  extended: PropTypes.bool,
};
export default Navbar;
