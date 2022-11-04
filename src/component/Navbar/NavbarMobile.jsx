import React from 'react';
import Logo from "../../resources/sj-logo.jpg";
import { Flex, IconButton, Img, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const NavbarMobile = () => {
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
    <Flex justifyContent={'space-between'} p={3} width={'85%'} margin="auto" alignItems={'center'} className='Navbar'>
      <NavLink to="/"><Img src={Logo} alt='' width={20} borderRadius={10}/></NavLink>
      <Menu>
            <MenuButton 
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='outline'
            />
            <MenuList>
            <Flex gap={2} p={2} pl={4} direction="column">
              <a href='#home' onClick={() =>  toggleNavList("#home")}>Home</a>
              <a href='#about' onClick={() =>  toggleNavList("#about")}>About me</a>
              <a href='#skills' onClick={() =>  toggleNavList("#skills")}>Skills</a>
              <a href='#projects' onClick={() =>  toggleNavList("#projects")}>Projects</a>
              <a href='#statistics' onClick={() =>  toggleNavList("#statistics")}>Statistics</a>
              <a href='#contact' onClick={() =>  toggleNavList("#contact")}>Contact</a>
            </Flex>
            </MenuList>
        
      </Menu>
    </Flex>
    </>
  )
}

export default NavbarMobile;