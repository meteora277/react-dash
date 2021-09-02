import React from 'react';
import Styled from 'styled-components'

import hamburger from './media/menu.svg'
import Logo from './Logo'


const StyledHeader = Styled.header`

    button{
        background-color: Transparent;
        border: none;
        display:none;
    }

    @media(max-width: 500px){
        position:relative;
        padding: 1.5rem 2rem;
        display: flex;

        div {
            position:absolute;
            left: 50%;
            transform: translateX(-50%) translateY(-0.2rem)
        }
        button{
            display:block;
        }

    }


`


const Header = (props) => (

    <StyledHeader>
        <button onClick={props.toggler}><img src={hamburger} alt="menu"></img></button>
        <Logo/>
    </StyledHeader>

)


export default Header