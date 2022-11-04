import React from 'react';
import Logo from "../../resources/sj-logo.jpg";
import { Flex, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavbarLaptop = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  
  return (
    <>
    <Flex justifyContent={'space-between'} p={[3, 2, 1, 2]} width={'95%'} margin="auto" alignItems={'center'} className='Navbar'>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={"50%"}/></NavLink>
      <Flex gap={10} fontWeight="bold">
        <a href='#home' onClick={() =>  toggleNavList("#home")}>Home</a>
        <a href='#about' onClick={() =>  toggleNavList("#about")}>About me</a>
        <a href='#skills' onClick={() =>  toggleNavList("#skills")}>Skills</a>
        <a href='#projects' onClick={() =>  toggleNavList("#projects")}>Projects</a>
        <a href='#statistics' onClick={() =>  toggleNavList("#statistics")}>Statistics</a>
        <a href='#contact' onClick={() =>  toggleNavList("#contact")}>Contact</a>
      </Flex>
    </Flex>
    </>
  )
}

export default NavbarLaptop