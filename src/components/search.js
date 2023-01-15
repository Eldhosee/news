import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '@mui/material';
import './components.css'
const Search = (props) => {
    const [inputvalue, setInputvalue] = useState('')
    const input = (event) => {
        setInputvalue(event.target.value.toString())
    }
    const handleChange = (event) => {
        props.changeQuery(inputvalue)
    }
    return (
        <>
            <form >
                <TextField
                    label="Search for news....."
                    onChange={input}
                >
                </TextField>
                <Button sx={{ p: 2 }} variant="contained" color="error"
                    onClick={handleChange}
                >Search</Button>
            </form>
        </>
    )
}
export default Search