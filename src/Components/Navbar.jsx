import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  Input
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [search,setSearch]=useState("");

  // useEffect(() => {
  //   console.log(search);
  //   <Posts SR={search}/>
  // },[search]);
  

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={600}>All POSTS</Box>
          <Stack>
          <Input variant='filled'placeholder='Search here...' backgroundColor="brown"  onChange={(e)=>setSearch(e.target.value)}/>
        </Stack>
        
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Posts search={search}/>
    </>
  );
}

