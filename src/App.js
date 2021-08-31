import React from 'react'
import {createGlobalStyle} from 'styled-components'

import backgroundImage from './bg.jpg'
import Navbar from './Navbar'
import Cta from './Cta'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body {
    margin:0;
    padding:0;
    color:white;
    background-color:black;
    background: url(${backgroundImage}) no-repeat right top;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    
    @media(max-width: 400px){
      background-position: 10% 100%;

      
    }
  }

`

function App() {
  return (
    <>
    <GlobalStyle/>
      <div>
        <Navbar links={["HOME", "MY STATS", "MEMBERS", "SETTINGS", "HELP"]}/>
        <Header/>
        <Cta/>
      </div>
    </>
  );
}

export default App;
