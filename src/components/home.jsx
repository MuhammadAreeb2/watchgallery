import * as React from 'react';
import Box from '@mui/material/Box';
// import {  useNavigate } from 'react-router-dom';

import Carousels from "./homeComponent/carousel"

import Navbar from "./homeComponent/navbar"

import Products from "./homeComponent/product"

import Footer from "./homeComponent/footer"

function ResponsiveAppBar(props) {

  return (
    <Box>
      <Navbar/>
      <Carousels />

      <Products />
      <Footer/>

    </Box >
  );
}
export default ResponsiveAppBar;
