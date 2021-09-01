import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import backgroundImage from './bg.jpg'
import Navbar from './Navbar'
import Cta from './Cta'
import Header from './header'

const Container = styled.div`
  
  padding: 3.4rem 20% 3.4rem 10%;
  display:flex;
  flex-direction: column; 

  @media(max-width: 450px){

    padding: 0;
    display:block;
    width:initial;

  }
`

const Body = styled.div`
  display:flex;
  
  @media(max-width: 450px){
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
    

    @media(max-width: 450px){
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
        <Switch>
          
          <Route exact path="/">
            <Navbar 
              toggler={toggleNavbar}
              isVisible={navbarVisible} 
              links={["HOME", "MY STATS", "MEMBERS", "SETTINGS", "HELP"]}/>

            <Container> 
              <Header 
                toggler={toggleNavbar}/>
              <Cta Heading="DATA ANALYTICS" Subheading="MAKING SENSE OF YOUR TRAFFIC"/>
            </Container> 
          </Route>

          <Route path="/0">
            <Navbar 
                toggler={toggleNavbar}
                isVisible={navbarVisible} 
                links={["HOME", "MY STATS", "MEMBERS", "SETTINGS", "HELP"]}/>

              <Container> 
                <Header 
                  toggler={toggleNavbar}/>
                <Cta Heading="My Stats" Subheading="Here are some stats you might want to look at"/>
              </Container> 
              
          </Route>


        </Switch>
      </Body>
    </>
  );
}

export default App;
