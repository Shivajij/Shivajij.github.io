import React from 'react';
import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { SiGithub } from 'react-icons/si';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

const ProjectDetails = ({data}) => {
  const {title, description, codeLink, liveLink, techStack,img} = data;
  const [slide, setSlide] = useState(0);

  const prevSlide =()=>{
    if(slide===0){
      setSlide(img.length-1)
    }else{
      setSlide(slide-1);
    }
  };

  const nextSlide =()=>{
    if(slide===img.length-1){
      setSlide(0);
    }else{
      setSlide(slide+1);
    }
  }

  // console.log(slide, img.length);
  return (
    <>
    <Flex shadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} p={4} borderRadius={10} direction='column' gap={4}>
      <Heading size={'sm'} textAlign='center'>{title}</Heading>
      <Flex justifyContent={"space-between"} alignItems="center">
        <AiFillCaretLeft onClick={prevSlide} className='LeftRightLogo'/>
        <Box width={"90%"}>
        <Img src={img[slide]} alt="IMG" borderRadius={10} />
        </Box>
        <AiFillCaretRight onClick={nextSlide} className='LeftRightLogo'/>
      </Flex>
      <Text>{description}</Text>
      <Flex gap={2}>
        <b>Tech Stack:</b>
        {techStack}
      </Flex>
      <Flex justifyContent={'space-around'}>
        <Button>
		<Flex gap={2} alignItems="center" onClick={()=> window.open(codeLink)}><SiGithub />Code</Flex>
	  </Button>
        <Button>
		<Flex gap={2} alignItems="center" onClick={()=> window.open(liveLink)}><RiShareBoxLine />Live</Flex>
	  </Button>
      </Flex>
    </Flex>
    </>
  )
}

export default ProjectDetails