import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

export const SearchBar = ({ setRecipes }) => {
    const [query, setQuery] = useState("chicken")
    // console.log(query);

    async function fetchRecipes() {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=74bc342a&app_key=9fb0bc256018b0ee21255ad3ec50da4c`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { mt: 2, ml: 2, width: '50ch' },
            '& Button': { mt: 2, ml: 4, mr: 2, width: '14ch' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-search" label="Search field" type="search" onChange={handleChange} />
        <Button onClick = { fetchRecipes } variant="contained">Search</Button>
        
        </Box>
    );
  }