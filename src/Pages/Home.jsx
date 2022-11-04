import { Box } from '@chakra-ui/react';
import React from 'react';
import About from '../component/About/About';
import PortfollioLaptop from '../component/Home/PortfollioLaptop';
import PortfollioMobile from '../component/Home/PortfollioMobile';
import PortfollioTablet from '../component/Home/PortfollioTablet';
import Projects from '../component/Projects/Projects';
import Skills from '../component/Skills/Skills';
import Contact from '../component/Contact/Contact';
import Statistics from '../component/statistics/Statistics';

const Home = () => {
  return (
    <>
      <Box className='container'>
      <Box className='PortfollioLaptop' id='#home' pt={40}><PortfollioLaptop /></Box>
      <Box className='PortfollioMobile' id='#home' p={10}><PortfollioMobile /></Box>
      <Box className='PortfollioTablet' id='#home' p={10}><PortfollioTablet /></Box>
      </Box>
      <Box>
      <Box id='#about'><About/></Box>
      <Box id='#skills'><Skills /></Box>
      <Box width={"80%"} margin="auto" mt={40} id="projects"><Projects /></Box>
      <Box id='statistics'>
        <Statistics />
      </Box>
      <Box id='contact'><Contact /></Box>
      </Box>
    </>  )
}

export default Home