import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(){
  return <div className='firstcss'>  <h2>Tiny Wins Propel You Forward!</h2><br/> <h2>Hello from </h2> <strong> <a href="https://twitter.com/MohsinRaz_"> <h2>Mohsin Raz! </h2></a> </strong>
  <h3>Things I have learned about React so far:</h3>

  <center>
  <ul className="boom">
    <tr>Component</tr>
    <tr>Render</tr>
    <tr>Function</tr>
    <tr>JSX</tr>
    <tr>Props</tr>
    <tr>ReactDOM</tr>
  </ul> 
  </center>
  

<br/>
<h4> Our Goal is to become a fullstack Webdeveloper to provide end to end solutions. </h4>
<h3>Clock is ticking! {2+1} {1+1} {1}!</h3>
<p>UPDATE: 08-06-2020</p>
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));