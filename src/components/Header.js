import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ 
      flexGrow: 1,
      textAlign: "center",
     }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ 
            flexGrow: 1,
            fontSize: '1.6rem',
            }}>
            Recipe finder
            <p class="SubTitle">search your own recipe</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}