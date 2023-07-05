import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import "./chunckNorris.css";
import { useSelector, useDispatch } from 'react-redux';
import { getDataByCategory } from '../Redux/chuckNorrisData/action';

const ChuckNorris = () => {
  const {data , isLoading , isError} = useSelector((store) => store.chuckData)
  const [chData , setChData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getDataByCategory())
  }, [dispatch])
  return (
     <Box w={"100%"} h={"100vh"} bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'>
      <Box className='bounceBox'>
      <Heading color={"#22C55E"} className='bounce'>Chuck Norries</Heading>
      </Box>
      <Box mt={"30px"} className='displayBox'>
        {
          data && data.map((el) => {
            return <Box className='card'>
              <Heading className='headingCard'>{el}</Heading>
              <Text>{`Unlimited jokes on ${el}`}</Text>
            </Box>
          })
        }
      </Box>
     </Box>
  )
}

export default ChuckNorris