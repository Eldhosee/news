import * as React from 'react';
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
  const countries=[
    {
      id:'1',
      name:"India",
      value:'in'
    },
    {
      id:'2',
      name:"USA",
      value:'us'
    },
    {
      id:'3',
      name:"United Arab Emirates",
      value:'ae'
    },
    {
      id:'4',
      name:"Argentina",
      value:'ar'
    },
    {
      id:'5',
      name:"Austria",
      value:'at'
    },
    {
      id:'6',
      name:"Australia",
      value:'au'
    },
    {
      id:'7',
      name:"Australia",
      value:'au'
    },{
      id:'8',
      name:"Belgium",
      value:'be'
    },
    {
      id:'9',
      name:"Bulgaria",
      value:'bg'
    },
    {
      id:'10',
      name:"Switzerland",
      value:'ch'
    }
  ]
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
                {countries.map((item)=>
                <MenuItem value={item.value}>{item.name}</MenuItem>
                )}
                </TextField>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
