import React from 'react';
import Styled from 'styled-components'
import arrow from './arrow.svg'



const StyledNavbar = Styled.nav`
    position:relative;
    z-index: 10;
    display:none;
   

    li:hover{
        background-color:#00A3FF;
    }
    li:nth-child(1):hover{

        background-color: Transparent;
    }

    @media(max-width: 400px){
    
        position: absolute;
        height: 100vh;
        width: 50%;
        background-color: #2C2931;

        ul{
            list-style-type:none;
            padding: 0;

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

        li:nth-child(1){
            padding: 1rem 2.75rem;
        }
        li:nth-child(1) img{

            transform: rotate(180deg) scale(0.8,0.8) translateX(0.2rem);
            text-align: left;
        }
    }

`


const Navbar = (props) => {
    
    let links = props.links.map((item, i ) => (

        <li key={i}><button>{item}</button></li>)
    )


    return(
        <StyledNavbar>
            <ul>
                <li className="backButton"><img src={arrow} alt="arrow"></img></li>
                {links}
            </ul>
        </StyledNavbar>
        )
    }
export default Navbar