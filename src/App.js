import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom'

import backgroundImage from './bg.jpg'
import Navbar from './Navbar'
import Cta from './Cta'
import Header from './header'

const Container = styled.div`
  
  padding: 3.4rem 20% 3.4rem 10%;
  display:flex;
  flex-direction: column; 

  @media(max-width: 500px){

    padding: 0;
    display:block;
    width:initial;

  }
`

const Body = styled.div`
  display:flex;
  
  @media(max-width: 500px){
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
    background: url(${backgroundImage}) no-repeat, black;
    background-size: 200%;
    background-position: 20% 0;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    

    @media(max-width: 500px){
      background-position: 10% 100%;
      background-size:cover;

    }
  }

`

function App() {

  const [navbarVisible, setNavbarVisible] = useState(false)

  function toggleNavbar(){

    if (window.innerWidth > 500){
      setNavbarVisible(false)
    } else (
      setNavbarVisible(!navbarVisible)
    )
  }

  return (
    <>
    <GlobalStyle/>
      <Body>

        <Navbar 
              toggler={toggleNavbar}
              isVisible={navbarVisible} 
              links={["HOME", "MY STATS", "MEMBERS", "SETTINGS", "HELP"]}/>
          <Switch>
          
            <Route exact path="/">

              <Container> 
                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                  Heading="DATA ANALYTICS" 
                  Subheading="MAKING SENSE OF YOUR TRAFFIC" 
                  button/>
              </Container> 
             </Route>

          <Route path="/1">

              <Container> 
                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                Heading="My Stats" 
                Subheading="Here are some stats you might want to look at"
                Justify/>
              </Container> 
          </Route>

          <Route path="/2">

            <Container> 
              <Header 
                toggler={toggleNavbar}/>
              <Cta 
              Heading="My Stats" 
              Subheading="Here are some stats you might want to look at"
              Justify/>
            </Container> 
          </Route>

          <Route path="/3">

            <Container> 
              <Header 
                toggler={toggleNavbar}/>
              <Cta 
              Heading="My Stats" 
              Subheading="Here are some stats you might want to look at"
              Justify/>
            </Container> 
          </Route>

          <Route path="/4">

            <Container> 
              <Header 
                toggler={toggleNavbar}/>
              <Cta 
              Heading="My Stats" 
              Subheading="Here are some stats you might want to look at"
              Justify/>
            </Container> 
          </Route>



          <Route exact path="/0">
            <Redirect push to="/"/>
          </Route>


        </Switch>
      </Body>
    </>
  );
}

export default App;
