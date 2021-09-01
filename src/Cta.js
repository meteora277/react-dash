
import React from 'react';  
import { Link } from 'react-router-dom';
import Styled from 'styled-components'

import Arrow from './arrow.svg'

const StyledCta = Styled.div`
    a{
        text-decoration:none;
        color: white;
    }

    h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 89%;
    }

    button:hover{
        background-color: #00A3FF;
    }
    
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: 200;
        font-size: 48px;
        line-height: 111.4%;
        color:#847D93;
    }

    button {
        display: flex;
        justify-content: space-between;
        background-color: Transparent;
        color: white;
        padding: 1.25rem 1rem;
        width: 14rem;
        border: 1px solid #4D4D4D;
        text-align: left;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
    }
    
    @media(max-width:500px){
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: ${props => props.Justify ? "flex-start": "center"};
        min-height: 80vh;
        padding: 0 2.6rem;
        align-items:flex-start;
        
        h1 {
            margin: 0;
            padding: 0;
            font-size: 48px;
              
        }
        p{
            font-size: 34px;      
        }

    }
`

const Cta = (props) =>{ 

    function handleClick(event){

        event.preventDefault()

    }

    return( 
        <StyledCta Justify={props.Justify}>
            <h1>{props.Heading}</h1>
            <p>{props.Subheading}</p>
            {props.button && <button onClick={handleClick}><img src={Arrow} alt="arrow"></img><Link to="/1">GO TO MY STATS</Link></button>}
            
        </StyledCta>)
}
export default Cta