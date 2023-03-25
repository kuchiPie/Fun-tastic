import React from 'react'
import { Container,Box,Text, Tabs, TabList, Tab, TabPanels, TabPanel, Center } from '@chakra-ui/react'
import AuthBox from './Components/AuthBox'

const AuthPage = () => {
  return (
    <Container maxW={'xl'} centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Center>
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
            Study Network
          </Text>
        </Center>
      </Box>

      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="1g"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Register</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AuthBox isLogin={true}/>
            </TabPanel>
            <TabPanel>
            <AuthBox isLogin={false}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default AuthPage