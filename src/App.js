import React from 'react';
import './App.css';
import './index.css';

function MyProgress(props){
  return <div className='firstcss'>  
  
  <h2>Tiny Wins Propel You Forward!</h2><br/> <h2>Hello from  {props.name} </h2> <strong> <a href="https://twitter.com/MohsinRaz_"> <h2>  </h2></a> </strong>
  <h3>Things I have learned about React so far:</h3>

  <center>
  <ul className="boom">
    <tr></tr>
    <tr>HTML/CSS/JavaScript</tr>
    <tr>Node.js/npm/yarn</tr>
    <tr>Deploying site on Surge using Github Actions</tr>
    <tr>Functions/Component</tr>
    <tr>ReactDOM/Render</tr>
    <tr>JSX /Properties</tr>

  </ul> 
  </center>
  

<br/>
<h4> Our Goal is to become a fullstack Webdeveloper to provide end to end solutions. </h4>
<h3>Clock is ticking! {2+1} {1+1} {1}!</h3>
<p>UPDATE: 09-06-2020</p>
  </div>;
}
export default MyProgress;
