import { Heading, Box, Flex } from '@chakra-ui/react'
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { SiRedux, SiChakraui,SiNodedotjs, SiMongodb } from "react-icons/si"; 
import { BiGitMerge } from 'react-icons/bi';
import React from 'react'

const Skills = () => {

  return (
    <>
    <Box mb={20}>
    <Heading color={'blue.500'} mb={14} pt={10} textAlign='center'><u>Skills</u></Heading>
    <Flex className='SkillList'>
      <Flex className='SkillListAll'>
        <Heading fontSize={'22px'} mb={3}>Front-end Skills</Heading> 

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <TbBrandHtml5 fontSize="30px" color='rgb(228,97,39)'/>
          <Heading size={'sm'}>HTML5</Heading>
        </Flex>  

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} aalignItems='center' gap={6} borderRadius={10}>
          <TbBrandCss3 fontSize="30px" color='rgb(46,75,210)'/>
          <Heading size={'sm'}>CSS3</Heading>
        </Flex>  

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <TbBrandJavascript fontSize="30px" color='rgb(234,212,28)'/>
          <Heading size={'sm'}>JAVASCRIPT</Heading>
        </Flex>  

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <TbBrandReactNative fontSize="30px" color='rgb(95,210,243)'/>
          <Heading size={'sm'}>REACT</Heading>
        </Flex>  

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <SiRedux fontSize="30px"color='rgb(115,72,183)'/>
          <Heading size={'sm'}>REDUX</Heading>
        </Flex>  

        <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <SiChakraui fontSize="30px" color='rgb(71,201,193)'/>
          <Heading size={'sm'}>CHAKRA-UI</Heading>
        </Flex>  

        {/* <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
          <SiTypescript fontSize="30px" color='rgb(47,116,192)'/>
          <Heading size={'sm'}>TYPESCRIPT</Heading>
        </Flex>   */}

      </Flex>
      <Flex className='SkillListAll'>
          <Heading fontSize={'22px'} mb={3}>DSA & Other</Heading> 

          <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
            <BiGitMerge fontSize="30px" color='rgb(232,76,48)'/>
            <Heading size={'sm'}>Git</Heading>
          </Flex>  
          
          <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
            <img src="https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ" width={'50px'} alt=""/>
            <Heading size={'sm'}>Data Strucure & algorithums</Heading>
          </Flex>  
      </Flex>
      <Flex className='SkillListAll'>
          <Heading fontSize={'22px'} mb={3}>Back-end Skills</Heading> 

          {/* <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
            <SiExpress fontSize="30px" color='rgb(88,89,88)'/>
            <Heading size={'sm'}>Express.js</Heading>
          </Flex>  */}

          <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
            <SiNodedotjs fontSize="30px" color='rgb(126,199,41)'/>
            <Heading size={'sm'}>Node.js</Heading>
          </Flex>  

          <Flex shadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} p={3} alignItems='center' gap={6} borderRadius={10}>
            <SiMongodb fontSize="30px" color='rgb(66,148,66)'/>
            <Heading size={'sm'}>MongoDB</Heading>
          </Flex> 

      </Flex>
    </Flex>
    </Box>
    </>
  )
}

export default Skills