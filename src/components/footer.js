import * as React from 'react';
import Box from '@mui/material/Box';
import './components.css';

export default function BoxSx() {
  return (
    <>
    <Box
    id="footer"
      sx={{
        width: '100%',
        height: 300,
        mb:0,
        backgroundColor: 'primary.dark',
      }}
    >
        <h1>About</h1>
        <h5>Welcome to our news website, where you will find the latest updates on current events both locally and globally. Our team of dedicated journalists strive to bring you unbiased, accurate, and timely information on a wide range of topics. Whether you're looking for breaking news, in-depth analysis, or exclusive interviews, we've got you covered. Stay informed and stay ahead of the curve with our website. Thank you for visiting.</h5>
        </Box>
    </>
  );
}