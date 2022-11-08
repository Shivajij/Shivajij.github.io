import React from 'react';
import {GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
import Pic from "../../resources/img.jpeg";
import { Flex, Heading, Button, Img, Link } from '@chakra-ui/react';

const PortfollioTablet = () => {

  const resumeButton = () =>{
    fetch('resume.pdf').then(res =>{
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <>
    <Flex direction={'column'} gap={4}>
      <Heading>Hi 👋,</Heading>
      <Heading>I'am <span style={{color: "blue"}}>Shivaji</span></Heading>
      <Heading>MERN Stack Developer</Heading>
      <Button colorScheme={'blue'} width="140px" mt={6} 
      onClick={resumeButton}
      >Download CV</Button>
      
    </Flex>
    <Flex direction={'column'} alignItems='flex-end' justifyContent={'center'}>
      <Img src={Pic} alt='' width={60} height={60} borderRadius="50%" mt={24}/>
    </Flex>
    <Flex gap={4} mt={20}>
            <Link href='https://www.linkedin.com/in/shivaji-jadhav-04161b22b/'_hover={{"color": "#00ffff"}} target={"_blank"}><GrLinkedinOption fontSize={26} /></Link>
            <Link href='https://github.com/Shivajij' _hover={{"color": "#00ffff"}}target={"_blank"}><GrGithub fontSize={26}/></Link>
            <Link href='https://twitter.com/Shivaji5242' _hover={{"color": "#00ffff"}}target={"_blank"}><GrTwitter fontSize={26}/></Link>
      </Flex>
    </>
  )
}

export default PortfollioTablet;