import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <>
      <Box>
        <Heading size={"md"} textAlign="center" p={10}>
          Days I <span style={{"color": "rgb(41,121,180)"}}> Code</span>
        </Heading>
        <Githubcalendar
          username="Shivajij"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Box>
    </>
  );
};