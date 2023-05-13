import * as React from 'react';
import Box from '@mui/material/Box';
import {  useNavigate } from 'react-router-dom';

import Carousels from "./homeComponent/carousel"

import Navbar from "./homeComponent/navbar"

import Products from "./homeComponent/product"

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = ['Home', 'Gallery','Services', 'About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


let nav = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pagenavigate = (data)=>{
    console.log(data)
  nav(`/${data}`)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Navbar/>
      <Carousels />

      <Products />

    </Box >
  );
}
export default ResponsiveAppBar;
