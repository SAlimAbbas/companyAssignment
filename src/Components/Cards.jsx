import React from 'react';
import {Center,Box,Image,Stack,Text,useColorModeValue} from '@chakra-ui/react';
import axios from 'axios';

const Cards=({userId,title,body})=> {

  //API call to display user details in alert box
  const fetchAlertInfo=() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response)=>{alert(JSON.stringify(response.data))
      })
      .catch((error)=>{
        console.log(error);
      });
  }

    return (
      
      <Center py={12}>
        
        <Box role={'group'}  maxW={'280px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'lg'}
          border={'1px solid teal'}
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
          position={'relative'}
          zIndex={1}>
         
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              marginTop={5}
              objectFit={'contain'}
             
              src={'https://imgs.search.brave.com/ztkV_hJGylpbuon9g30j2h-xWB5Wppli1wUbHZf3acE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzQ5/MS8zMjAvb3JpZ2lu/YWwvY3JlZGl0LWNh/cmQtaWNvbi1kZXNp/Z24tdmVjdG9yLmpw/Zw'}
            />
         
          <Stack pt={10} align={'center'}>
           
            <Text fontSize={'16px'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
             {title}
            </Text>
             <Text padding='0.5rem' ml='-15px'>{body}</Text>
              <Box width='100%' p='0.5rem' cursor='pointer' >
                <Box
                   loadingText="Submitting"
                     size="lg"
                     width= '100%'
                     height='40px'
                    color="white"
                    p='5px'
                    textAlign={'center'}
                    backgroundColor="#242830" border="1px solid"
                   _hover={{bg: 'grey',color: 'white'}}
                   onClick={fetchAlertInfo}
                  >
                QUICK VIEW 
                </Box>
            </Box>
          </Stack>
        </Box>
      </Center>
     
    );
  }

  export default Cards