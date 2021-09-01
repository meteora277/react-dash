import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'

import backgroundImage from './bg.jpg'
import Navbar from './Navbar'
import Cta from './Cta'
import Header from './header'

const Container = styled.div`
  
  padding: 3.4rem 50% 3.4rem 6.4rem;
  display:flex;
  flex-direction: column; 

  @media(max-width: 400px){

    padding: 0;
    display:block;
    width:initial;

  }
`

const Body = styled.div`
  display:flex;
  
  @media(max-width: 400px){
    display:block;
  }
`

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body {
    margin:0;
    padding:0;
    color:white;
    background: url(${backgroundImage}) no-repeat right, black;
    background-size: cover;
    background-position: 20% 0;
    width: 100%;
    height: 100vh;
    

    @media(max-width: 400px){
      background-position: 10% 100%;

    }
  }

`

function App() {

  const [navbarVisible, setNavbarVisible] = useState(false)

  function toggleNavbar(){

    setNavbarVisible(!navbarVisible)
  }

  return (
    <>
    <GlobalStyle/>
      <Body>
        <Navbar 
          toggler={toggleNavbar}
          isVisible={navbarVisible} 
          links={["HOME", "MY STATS", "MEMBERS", "SETTINGS", "HELP"]}/>

        <Container> 
          <Header 
            toggler={toggleNavbar}/>
          <Cta/>
        </Container> 
      </Body>
    </>
  );
}

export default App;
