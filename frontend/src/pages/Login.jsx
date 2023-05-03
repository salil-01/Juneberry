import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  HStack,
  VStack,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer/action";
const inital = {
  email: "",
  password: "",
};
export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(inital);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  let authData = useSelector((store) => {
    return store.authReducer;
  });
//   console.log(authData.token);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(login(formData))
      .then(() => {
        toast({
          position: "top",
          title: `Login Successfull`,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
      })
      .catch((error) => {
        toast({
          position: "top",
          title: `Wrong Credentials`,
          status: "error",
          isClosable: true,
          duration: 2000,
        });
      });
    onClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"0px"}>
          <HStack>
            <Spacer />
            <Button variant="ghost" onClick={onClose}>
              <CloseIcon />
            </Button>
          </HStack>
          <ModalHeader textAlign={"center"} fontSize={"1.6rem"}>
            Sign In
          </ModalHeader>

          <ModalBody>
            <Text textAlign="center" fontSize={"0.8rem"} mb={2}>
              Sign in so you can save items to your wishlists, track your
              orders, and check out faster!
            </Text>
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
          </ModalBody>
          <ModalFooter>
            <VStack width={"100%"} margin={"20px auto"} gap={"10px"}>
              <Button
                type="submit"
                bg={"rgb(75,86,102)"}
                color={"white"}
                mr={3}
                onClick={handleSubmit}
                width={"100%"}
                borderRadius={"0px"}
                _hover={{
                  bg: "white",
                  color: "rgb(75,86,102)",
                  border: "1px solid rgb(75,86,102)",
                }}
              >
                NEXT
              </Button>
              <Text textAlign="center" fontSize={"1.4rem"}>
                Sign Up
              </Text>
              <Text fontSize={"0.8rem"}>
                Welcome! It's quick and easy to set up an account
              </Text>
              <Button
                type="submit"
                bg={"white"}
                color={"rgb(75,86,102)"}
                border="1px solid rgb(75,86,102)"
                mr={3}
                onClick={handleSubmit}
                width={"100%"}
                borderRadius={"0px"}
                _hover={{
                  bg: "rgb(75,86,102)",
                  color: "white",
                }}
              >
                CREATE AN ACCOUNT
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
