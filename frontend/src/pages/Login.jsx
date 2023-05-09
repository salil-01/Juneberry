import { useState } from "react";
import {
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  IconButton,
  useDisclosure,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
import { Signup } from "./Signup";
import { useLocation } from "react-router-dom";
const inital = {
  email: "",
  password: "",
};
export const Login = () => {
  const [formData, setFormData] = useState(inital);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const location = useLocation();
  const toast = useToast();
  const dispatch = useDispatch();
  let authData = useSelector((store) => {
    return store.authReducer;
  });
  //   console.log(authData.token);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setisLoading(true);
    await dispatch(login(formData))
      .then(() => {
        setisLoading(false);
        toast({
          position: "top",
          title: `Login Successfull`,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
        if (location.state) {
          navigate(location.state, {
            replace: true,
          });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast({
          position: "top",
          title: `Wrong Credentials`,
          status: "error",
          isClosable: true,
          duration: 2000,
        });
        setisLoading(false);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Box backgroundColor={"rgb(239, 238, 241)"}>
      <Box
        width={{ sm: "90%", md: "80%", lg: "30%" }}
        margin={"20px auto"}
        padding={"20px"}
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }
      >
        <Heading
          textAlign={"center"}
          fontSize={"1.5rem"}
          fontWeight={"500"}
          mb={"10px"}
        >
          Sign In
        </Heading>
        <Text textAlign="center" fontSize={"0.8rem"} mb={2}>
          Sign in so you can save items to your wishlists, track your orders,
          and check out faster!
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} width={"95%"} margin={"auto"} mt={"15px"}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                focusBorderColor={"rgb(75,86,102)"}
                border={"1px dotted gray"}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  border={"1px dotted gray"}
                  width={"90%"}
                  focusBorderColor={"rgb(75,86,102)"}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <Stack spacing={10} pt={2} margin={"30px auto 0px"}>
            {isLoading ? (
              <Button
                isLoading
                type="submit"
                loadingText="Logging In..."
                size="lg"
                borderRadius="0px"
                border={"1px solid rgb(75,86,102)"}
                color={"white"}
                bg="rgb(75,86,102)"
                _hover={{
                  bg: "white",
                  color: "rgb(75,86,102)",
                }}
                margin={"auto"}
                width={"100%"}
              >
                NEXT
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                borderRadius="0px"
                border={"1px solid rgb(75,86,102)"}
                color={"white"}
                bg="rgb(75,86,102)"
                _hover={{
                  bg: "white",
                  color: "rgb(75,86,102)",
                }}
                width={"100%"}
                margin={"auto"}
              >
                NEXT
              </Button>
            )}
          </Stack>
        </form>

        <VStack width={"100%"} margin={"20px auto"} gap={"10px"}>
          <Text textAlign="center" fontSize={"1.4rem"}>
            Sign Up
          </Text>
          <Text fontSize={"0.8rem"}>
            Welcome! It's quick and easy to set up an account
          </Text>
          <Button
            bg={"white"}
            border="1px solid rgb(75,86,102)"
            mr={3}
            onClick={handleSubmit}
            width={"100%"}
            borderRadius={"0px"}
          >
            <Signup text={"CREATE AN ACCOUNT"} color={"rgb(75,86,102)"} />
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
