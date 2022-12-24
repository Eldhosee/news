import Voice from './components/voice';
import React,{useState} from 'react'
import ResponsiveAppBar from './components/nav';
import Button from './components/buttons';
const App =()=> 
{
  const [country,setCountry]=useState('in')
  console.log(country)
  return(
    <>
      <ResponsiveAppBar changeQuery={country=>setCountry(country)} />
      <br/>
      <Button/>
      <br/>
      <br/>
      <Voice country={country}/>
    </>
  )
}

export default App;
