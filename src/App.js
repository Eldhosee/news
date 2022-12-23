import logo from './logo.svg';
import Voice from './components/voice';
import React,{useEffect,useState} from 'react'
import ResponsiveAppBar from './components/nav';
const App =()=> 
{
  return(
    <>
    <ResponsiveAppBar/>
    <br/>
    <Voice/>
    </>
  )
}

export default App;
