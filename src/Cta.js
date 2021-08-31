
import React from 'react';  
import Styled from 'styled-components'

const StyledCta = Styled.div`
    h1 {
    margin: 0;
    padding: 0;
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
            <button onClick={handleClick}>GO TO MY STATS</button>
        </StyledCta>)
}
export default Cta