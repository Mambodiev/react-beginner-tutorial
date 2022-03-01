import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from './logo.svg';


function MyHeader(){
  return (
    <header>
      <nav className='nav'>
        <img src={logo}  alt="logo" className='nav-logo' />
        <ul className='nav-items' >
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}



function MainContent(){
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ol>
          <li>I beleave recat is the most popular</li>
          <li>I'm sure i'll know it</li>
          <li>I'm more likely to get a job</li>
          
      </ol>
    </div>
  )
}

function MyFooter(){
  return (
    <footer >
      <small>@ 2022 Diev development, All rights reserved.</small>
    </footer>
  )
}

function Page(){
  return(
    <div>
      <MyHeader />
      <MainContent />
      <MyFooter />
    </div>
    
  )
}

ReactDOM.render(
  <Page />,

  document.getElementById('root')
);


