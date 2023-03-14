import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (type,messege)=>
  {
    setalert(
      {
        messege:messege,
        type:type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Success","Dark mode is enabled");
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Success","Light mode is enabled");
    }
  }


  return (

    <>
    {/* <BrowserRouter>
    <Navbar ultra = "Ultra" Home = "Home-page" About = "About-page" mode = {mode} toggleMode = {toggleMode}/>
    
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element = {<About></About>}/>
    <Route exact path="/home" element = {<TextForm heading = "Enter the text to analyse below" mode={mode} showalert = {showalert}/>}/>
    </Routes>
    </div>
  </BrowserRouter> */}
  <Navbar ultra = "Ultra" Home = "Home-page" About = "About-page" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <TextForm heading = "Enter the text to analyse below" mode={mode} showalert = {showalert}/>
    </>
  );
}
export default App;
