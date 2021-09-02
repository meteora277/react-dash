import React, {useEffect, useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom'

import backgroundImage from './media/bg.jpg'
import Navbar from './Navbar'
import Cta from './Cta'
import Header from './header'

const Container = styled.div`
  
  padding: 3.4rem 20% 3.4rem 10%;
  display:flex;
  flex-direction: column; 
  max-width: 80%;

  @media(max-width: 500px){

    padding: 0;
    display:block;
    width:initial;
    max-width: 100%;
    
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
  body::-webkit-scrollbar {
    display:none;
  }
  body {
    margin:0;
    padding:0;
    color:white;
    background: url(${backgroundImage}) no-repeat, black;
    background-size: cover;;
    background-position: -20% 0;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    

    @media(max-width: 500px){
      background-position: 10% 100%;
      background-size:cover;

    }
  }

`

function App() {

  const [navbarVisible, setNavbarVisible] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {

        let filteredData = json.filter(item => item.id < 20)
        .map(item => {
          return ({thumbnailUrl: item.thumbnailUrl})
        })

        setData(filteredData)
      })  
  },[])
  

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

        <Container>

          <Switch>
          
            <Route exact path="/">

                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                  Heading="DATA ANALYTICS" 
                  Subheading="MAKING SENSE OF YOUR TRAFFIC" 
                  button/>
                
            </Route>

            <Route path="/1">

                  <Header 
                    toggler={toggleNavbar}/>
                  <Cta 
                  Heading="My Stats" 
                  Subheading="Here are some stats you might want to look at"
                  Justify/>
                  
            </Route>

            <Route path="/2">

                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                Heading="Members" 
                Subheading="Some of the amazing people that use our service"
                data={data}
                Justify/>
                
            </Route>

            <Route path="/3">

                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                Heading="Settings" 
                Subheading="Some settings you can change"
                Justify/>
                
            </Route>

            <Route path="/4">

                <Header 
                  toggler={toggleNavbar}/>
                <Cta 
                Heading="Help" 
                Subheading="Contact us below"
                Justify/>
                <input type="email" placeholder="email"/>
                <textarea rows="4"/>
            </Route>

            <Route exact path="/0">
              <Redirect push to="/"/>
            </Route>

          </Switch>
        </Container>
      </Body>
    </>
  );
}

export default App;
