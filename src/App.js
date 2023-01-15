import Voice from './components/voice';
import React,{useState} from 'react'
import ResponsiveAppBar from './components/nav';
import Buttons from './components/buttons';
import Search from './components/search';
import Footer from './components/footer';
const App =()=> 
{
  const [country,setCountry]=useState('in')
  const [category,setCategory]=useState('')
  const[search,setSearch]=useState('')
  console.log(search)
  return(
    <>
      <ResponsiveAppBar changeQuery={country=>setCountry(country)} />
      <br/>
      <Search changeQuery={search=>setSearch(search)}/>
      <br/>
      <Buttons changeQuery={country=>setCategory(country)}/>
      <br/>
      <Voice country={country} category={category} search={search} changeQuery={search=>setSearch(search)}/>
      <Footer/>
    </>
  )
}

export default App;
