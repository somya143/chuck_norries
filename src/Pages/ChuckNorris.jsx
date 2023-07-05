import { Box, Heading } from '@chakra-ui/react'
import React from 'react';
import "./chunckNorris.css";

const ChuckNorris = () => {
  return (
     <Box w={"100%"} h={"100vh"} bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'>
      <Box className='bounceBox'>
      <Heading color={"#22C55E"} className='bounce'>Chuck Norries</Heading>
      </Box>
     </Box>
  )
}

export default ChuckNorris