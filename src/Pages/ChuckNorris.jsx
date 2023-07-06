import { Box,
   Heading,
    Text,
    Button,
    useDisclosure,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import "./chunckNorris.css";
import { useSelector, useDispatch } from 'react-redux';
import { getDataByCategory, getDataByCategoryName } from '../Redux/chuckNorrisData/action';
import Loader from '../components/Loader';
import Error from '../components/Error';

const ChuckNorris = () => {
  const {data , isLoading , isError , catData} = useSelector((store) => store.chuckData)
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("")

  useEffect(() => {
   dispatch(getDataByCategory())
   
  }, [dispatch])
   

   const handleClick = (categories) => {
    onOpen();
    setName(categories)
    dispatch(getDataByCategoryName(categories))
    
   }
   const handleNext = (categories) => {
    dispatch(getDataByCategoryName(categories))
   }

   if(isError){
    return <Error />
   }
  return (
     <Box w={"100%"} h={"auto"} bgGradient='linear(to-l,#222222, rgba(100,180,349,28.5))'>
      <Box className='bounceBox'>
      <Heading color={"#22C55E"} className='bounce'>Chuck Norries</Heading>
      </Box>
      <Box className='displayBox'>
      {data && data.map((el,id) => {
       const capitalizedEl = el.charAt(0).toUpperCase() + el.slice(1);
      return (
      <Box className='card' key={el} mt={"35px"} onClick={() => handleClick(capitalizedEl)}  >
        <Heading className='headingCard'>{capitalizedEl}</Heading>
        <Text color={"#1E3A8A"}>{`Unlimited jokes on ${capitalizedEl}`}</Text> 
       
      </Box>
      );
    })}

<Modal isCentered size={"3xl"} className="modal" onClose={onClose}  isOpen={isOpen}>
        <ModalOverlay  />
        <ModalContent bgGradient="linear(90deg,#2c5364,#203a43,#0f2027)" border={"1px solid black"}  >
          <ModalHeader textAlign={"center"} color={"#fff"} fontWeight={"700"} fontSize={"30px"}>{name}</ModalHeader>
          <ModalCloseButton color={"#fff"} fontSize={"22px"} />
          <ModalBody>
          {
          isLoading?( <Loader /> ):(
            <Text className='modalContent'>"{catData.value}"</Text>)
          }
          </ModalBody>
          <ModalFooter>
            <Button w={"50%"} margin={"auto"} bg={"#1D4ED8"} fontSize={"22px"} variant={"solid"} color={"#000000"} onClick={() => handleNext()}>Next</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     </Box>
     
     </Box>
  )
}

export default ChuckNorris