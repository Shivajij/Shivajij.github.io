import React from 'react';
import {Box, Text, Heading, Flex, Link} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {IoMdCall} from "react-icons/io";
import {GrMail, GrLinkedinOption, GrGithub, GrTwitter} from "react-icons/gr";
// import {SiHackerrank} from "react-icons/si";

const Contact = () => {
  return (
    <>
    <Box bg={'rgb(15,37,49)'} color='white' p={10}>
    <Heading color={'blue.500'} mb={14} textAlign='center'><u>Get in touch</u></Heading>
    <Flex direction={'column'} textAlign="center" width={'80%'} margin="auto" gap={3}>
	<Heading fontSize="25px">Shivaji Jadhav</Heading>
	<Flex justifyContent="center" alignItems={'center'} gap={2}>
		<GoLocation />
		<Link href='https://goo.gl/maps/vHjikVpH2iZNRJjV6' target={"_blank"}>Degloor, Maharashtra</Link>
	</Flex>
	<Flex justifyContent="center" alignItems={'center'} gap={2}>
		<IoMdCall />
		<Text>+91 7756855242</Text>
	</Flex>
	<Flex justifyContent="center" alignItems={'center'} gap={2}>
		<GrMail />
		<Link href="#" target={"_blank"}>sj461898@gmail.com</Link>
	</Flex>
	<Flex gap={4} justifyContent="center" p={10}>
		<Link href='https://www.linkedin.com/in/shivaji-jadhav-04161b22b/
'_hover={{"color": "#00ffff"}} target={"_blank"}><GrLinkedinOption fontSize={26} /></Link>
		<Link href='https://github.com/Shivajij' _hover={{"color": "#00ffff"}}target={"_blank"}><GrGithub fontSize={26}/></Link>
		<Link href='https://twitter.com/Shivaji5242' _hover={{"color": "#00ffff"}}target={"_blank"}><GrTwitter fontSize={26}/></Link>
		
	</Flex>
	<Text>© 2020 copyright all right reserved</Text>
    </Flex>
    </Box>
    </>
  )
}

export default Contact