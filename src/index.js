import React from 'react';
import ReactDOM from 'react-dom';

function MyHeader(){
  return (
    <header>
      <nav>
      <img src='./logo.svg' width='40px' />

      </nav>
    </header>
  )
}

function MyFooter(){
  return (
    <footer>
      <small>@ 2022 Diev development, All rights reserved.</small>
    </footer>
  )
}

function MainContent(){
  return (
    <div>
      <h1 className="main--title">Fun facts about React</h1>
      <ol className="main--facts">
          <li>I beleave recat is the most popular</li>
          <li>I'm sure i'll know it</li>
          <li>I'm more likely to get a job</li>
          <li>I'm sure i'll know it</li>
          
      </ol>
    </div>
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


