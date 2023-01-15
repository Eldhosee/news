import React from 'react'
import './components.css'
import { Button } from '@mui/material';
const Buttons=(props)=>{
    const handleChange=(event)=>{
        props.changeQuery(event.target.value.toString())
      }
    return(
        <div class="buttons">
        <Button sx={{p:1,mx:2}} variant="contained" color="primary" 
            value="entertainment"
            onClick={handleChange}
            >Entertainment</Button>
        <Button sx={{p:1,px:3,mx:2}} variant="contained" color="primary" 
            value="health"
            onClick={handleChange}
            >Health</Button>
        <Button sx={{p:1,px:3,mx:2}} variant="contained" color="primary" 
            value="science"
            onClick={handleChange}
            >Science</Button>
        <Button sx={{p:1,px:3,mx:2}} variant="contained" color="primary" 
            value="sports"
            onClick={handleChange}
            >Sports</Button>
        <Button  sx={{p:1,mx:2}} variant="contained" color="primary" 
            value="technology"
            onClick={handleChange}
            >Technology</Button>
        </div>
    )
}
export default Buttons