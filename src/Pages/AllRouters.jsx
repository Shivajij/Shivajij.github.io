import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Box } from '@chakra-ui/react';
import NavbarLaptop from '../component/Navbar/NavbarLaptop';
import NavbarMobile from '../component/Navbar/NavbarMobile';

const AllRouters = () => {
  return (
    <>
    <Box className='NavbarLaptop'><NavbarLaptop /></Box>
    <Box className='NavbarMobile'><NavbarMobile /></Box>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default AllRouters