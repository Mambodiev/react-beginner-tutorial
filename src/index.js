import React from 'react';
import ReactDOM from 'react-dom';

function MyfirstFunction(){
  return (
    <div>
      <img src='./logo.svg' width='40px' />
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
ReactDOM.render(
  <MyfirstFunction />,
  document.getElementById('root')
);


