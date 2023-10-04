import React from 'react';
import ProjectDetails from './ProjectDetails';  import { Box, Heading } from '@chakra-ui/react';
// import lovoda1 from "../../resources/lovoda/lovoda-1.jpg";
// import lovoda2 from "../../resources/lovoda/lovoda.jpg";
// import lovoda3 from "../../resources/lovoda/lovoda-2.jpg";
// import lovoda4 from "../../resources/lovoda/lovoda-3.jpg";
// import lovoda5 from "../../resources/lovoda/lovoda-4.jpg";
// import lovoda6 from "../../resources/lovoda/lovoda-5.jpg";

// import myglam1 from "../../resources/myglam/myglam-1.jpg";
// import myglam2 from "../../resources/myglam/myglam-2.jpg";
// import myglam3 from "../../resources/myglam/myglam-3.jpg";
// import myglam4 from "../../resources/myglam/myglam-4.jpg";
// import myglam5 from "../../resources/myglam/myglam-5.jpg";
// import myglam6 from "../../resources/myglam/myglam-6.jpg";
// import cricinfo7 from "../../resources/cricinfo/myglam-3.jpg";

import pluralsite1 from "../../resources/Priorities/first.jpg";
import pluralsite2 from "../../resources/Priorities/second.jpg";
import pluralsite3 from "../../resources/Priorities/third.jpg";
import pluralsite4 from "../../resources/Priorities/fourth.jpg";



const projectArr=[
  // {
  //   title: "Lovoda Clone", 
  //   description: "Lovoda.com is one of the most popular online marts. Necklaces, Rings, Bracelets, etc all these types of fashionable products you can buy here. ",
  //   team: "A collaborative project built by a team of 5, executed in 5 days.",
  //   techStack: "CSS | HTML | JavaScript",
  //   codeLink: "https://github.com/Shivajij/far-powder-2496",
  //   liveLink: "https://deft-crepe-8bb32d.netlify.app/index.html",
  //   img: [lovoda1]
  // },
  // {
  //   title: "Myglamm Clone", 
  //   description: "Myglamm is one of Europe's largest natural beauty companies, It's all about bringing innovation in makeup to accomplish our single, this is my individual project, and it took me 6 days to make it.",
  //   team: "this is my individual project, and it took me 6 days to make it.",
  //   techStack: "CSS | HTML | JavaScript | react",
  //   codeLink: "https://github.com/Shivajij/my_Glamm_RCT_101",
  //   liveLink: "https://buildm.netlify.app/",
  //   img: [myglam1, myglam2, myglam3, myglam4, myglam5, myglam6]
  // },
  {
    title: "Action Plan app", 
    description: "Priorities is a task management app designed to streamline your daily life",
    team: "A collaborative project built by me, executed in 5 days.",
    techStack: "CSS3 | HTML5 | BootStrap| React |Node.js| Express.js| MongoDB",
    codeLink: "https://github.com/Shivajij/tech-prime-lab",
    liveLink: "https://frontend-mdharis107.vercel.app/",
    img: [pluralsite1, pluralsite2, pluralsite3, pluralsite4]
  },

]

const Projects = () => {
  return (
    <>
      <Heading color={'blue.500'} mb={14} pt={10} textAlign='center'><u>Projects</u></Heading>
      <Box className='Projects'>
        {projectArr.map((p)=> (
          <ProjectDetails data={p}/>
        ))}
    </Box>
    </>
  )
}
export default Projects;