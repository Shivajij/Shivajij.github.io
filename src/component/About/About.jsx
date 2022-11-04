import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {MdLocationOn, MdEmail,MdPhone} from 'react-icons/md'

const About = () => {
  return (
    <>
    <Box textAlign={'center'} p={"200px 10px"}>
    <Heading color={'blue.500'} mb={14}><u>About me</u></Heading>
    <Flex className='AboutText'>
      <Heading fontSize="25px">I'am Shivaji Jadhav</Heading>
      <Text fontSize="20px">Quick learner, web developer with the ability to write clean, reusable, optimised code and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</Text>
    </Flex>
    <Flex className='AboutContact'>
      <Link href='https://goo.gl/maps/4cW1kRzkyf4XAsGu9' target={"_blank"}>
        <Flex alignItems='center' gap={2}><MdLocationOn /> Nanded, Maharashtra</Flex>
      </Link>
      <Link href='mailto:sj461898@gmail.com' target={"_blank"}>
            <Flex alignItems='center' gap={2}><MdEmail />sj461898@gmail.com</Flex>
      </Link>
        <Flex alignItems='center' gap={2}><MdPhone />7756855242</Flex>
    </Flex>
    </Box>
    </>
  )
}

export default About;