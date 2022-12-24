import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './components.css';
import {MenuItem, TextField } from '@mui/material';
export default function ButtonAppBar(props) {
  const handleChange=(event)=>{
    props.changeQuery(event.target.value.toString())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            News.com
          </Typography>
          <Box width='250px'>
              <TextField 
        
                label='Select Country'
                select
                value={props.country}
                onChange={handleChange}
                fullWidth
                >
                <MenuItem value='in'>India</MenuItem>
                <MenuItem value='us'>USA</MenuItem>
                </TextField>
          </Box>
          <Button className='about' color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
