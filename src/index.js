import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(){
  return <div className='firstcss'><h3> Hello from </h3> <strong> <h2>Mohsin Raz! </h2> </strong>

  <h3>Things I have learned about React so far:</h3>
  <center>
  <ul className="boom">
    <tr>Component</tr>
    <tr>Render</tr>
    <tr>Function</tr>
    <tr>JSX</tr>
    <tr>Props</tr>
    <tr>ReactDOM</tr>
  </ul> </center>
  

<br/>
<h4> Our Goal is to become a fullstack Webdeveloper to provide end to end solutions. </h4>
<h3>Clock is ticking! {2+1} {1+1} {1}!</h3>
<p>UPDATED: 08-06-2020</p>
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));