import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import { Github } from './GithubCalender';

const Statistics = () => {
  return (
    <>
    <Box>
    <Heading color={'blue.500'} mb={14} pt={10} textAlign='center'><u>Statistics</u></Heading>
    <Box width={"80%"} margin="auto" mb={20}>
      <Github />
    </Box>
    </Box>
    </>
  )
}

export default Statistics;