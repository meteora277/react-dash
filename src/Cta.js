
import React from 'react';  
import Styled from 'styled-components'

import Arrow from './arrow.svg'

const StyledCta = Styled.div`
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
    button:hover{
        background-color: #00A3FF;

    }


    @media(max-width:400px){

        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 80vh;
        padding: 0 2.6rem;
        align-items:flex-start;

        h1 {
            margin: 0;
            padding: 0;
            font-family: Poppins;
            font-style: normal;
            font-weight: 800;
            font-size: 48px;
            line-height: 89%;    
        }
        p{
            font-family: Poppins;
            font-style: normal;
            font-weight: 200;
            font-size: 34px;
            line-height: 111.4%;
            color:#847D93;
        }

    }
`

const Cta = () =>{ 

    function handleClick(event){

        event.preventDefault()

    }

    return( 
        <StyledCta>
            <h1>DATA ANALYTICS</h1>
            <p>MAKING SENSE OF YOUR TRAFFIC</p>
            <button onClick={handleClick}><img src={Arrow} alt="arrow"></img><div>GO TO MY STATS</div></button>
        </StyledCta>)
}
export default Cta