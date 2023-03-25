import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthBox = (props) => {
    if(props.isLogin){
        return (
            <Box
            bg="white"
                w="100%"
                borderRadius="1g"
                color="black"
                p={2}
            >
                <Center fontSize={'lg'}>
                    You are?
                </Center>
            <Tabs>
                <TabList mb={"1em"}>
                    <Tab width={"50%"}>Student</Tab>
                    <Tab width={"50%"}>Teacher</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <LoginForm isStudent={true}/>
                    </TabPanel>
                    <TabPanel>
                        <LoginForm isStudent={false}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
        );
    }
  return (
    <Box
        bg="white"
            w="100%"
            borderRadius="1g"
            color="black"
            p={2}
    >
        <Center fontSize={'lg'}>
            You are?
        </Center>
        <Tabs>
            <TabList mb={"1em"}>
                <Tab width={"50%"}>Student</Tab>
                <Tab width={"50%"}>Teacher</Tab>
            </TabList>

            <TabPanels>
                    <TabPanel>
                        <RegisterForm isStudent={true}/>
                    </TabPanel>
                    <TabPanel>
                        <RegisterForm isStudent={false}/>
                    </TabPanel>
                </TabPanels>
        </Tabs>
    </Box>
  )
}

export default AuthBox