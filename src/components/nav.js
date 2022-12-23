import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './components.css';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField  from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            News.com
          </Typography>
          <form>
            <TextField 
                defaultValue={"Some Value"} 
                className='search'
                label="Search country.."
                InputLabelProps={{ style: { fontSize: 10 ,color:'white' } }}
                value="hello"
                InputProps=
                {{
                    
                endAdornment: 
                (
                <InputAdornment>
                    <IconButton>
                        <SearchIcon onClick={(e)=>console.log(e.input.defaultValue)}/>
                    </IconButton>
                </InputAdornment>
                )
                }}
                />
            </form>
          <Button className='about' color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
