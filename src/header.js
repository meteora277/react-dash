import React from 'react';
import Styled from 'styled-components'

import hamburger from './menu.svg'
import Logo from './logo.svg'


const Header = () => (

    <header>
        <img src={hamburger} alt="menu"></img>
        <img src={Logo} alt="logo"></img>
    </header>

)


export default Header