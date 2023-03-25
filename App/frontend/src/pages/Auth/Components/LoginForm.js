import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, useToast, } from "@chakra-ui/react";
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginForm = (props) => {
    const isStudent = props.isStudent;
    const role =isStudent?"Student":"Teacher";
    const [show,setShow] = useState(false);
    const [email,setEmail] = useState();
    const [password,setpassword] = useState();
    const [loading,setLoading] = useState(false);
    const toast = useToast();
    const handlePassClick = () => setShow(!show);
    const navigate = useNavigate();

    const submitHandler = async()=>{
        setLoading(true);
        if(!email || !password){
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password ,role},
                config
            );

            if(data.message){
                toast({
                    title: "Please Verify Your Details",
                    description: data.message,
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
                setLoading(false);
            }
            else{
                localStorage.setItem("userInfo", JSON.stringify(data));
                toast({
                    title: "Login Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
                setLoading(false);
                navigate('/dashboard');
            }
        }
        catch(e){
            toast({
                title: "Error Occured!",
                description: e.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    }

  return (
    <VStack spacing="5px">
            <FormControl id="login-email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></Input>
            </FormControl>

            <FormControl id="login-password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        value={password}
                        placeholder="Enter your password"
                        onChange={(event) => setpassword(event.target.value)}
                    ></Input>
                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size="sm" onClick={handlePassClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme={"blue"}
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                // isLoading={loading}
            >
                LogIn
            </Button>
        </VStack>
  )
}

export default LoginForm