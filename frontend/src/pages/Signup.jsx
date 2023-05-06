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
  Toast,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Login } from "./Login";
const inital = {
  name: "",
  number: "",
  email: "",
  password: "",
};
export const Signup = ({ text, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(inital);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    if (
      formData.name !== "" &&
      formData.number !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      try {
        setLoading(true);
        let res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/register`,
          formData
        );
        // console.log(res);
        setLoading(false);
        toast({
          position: "top",
          title: `Account Created Successfully`,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
        onClose();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      toast({
        position: "top",
        title: `Please fill all the fields`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    }
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
      <Text _hover={{textDecoration:"underline",cursor:"pointer"}} onClick={onOpen} color={color}>
        {text}
      </Text>
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
            Create An Account
          </ModalHeader>

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Text textAlign="center" fontSize={"0.8rem"} mb={2}>
                Welcome to Anthropologie! It's quick and easy to set up an
                account.
              </Text>
              <Stack spacing={4} width={"95%"} margin={"auto"} mt={"15px"}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    border={"1px dotted gray"}
                    focusBorderColor={"rgb(75,86,102)"}
                  />
                </FormControl>
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
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    name="number"
                    type="number"
                    onChange={handleChange}
                    border={"1px dotted gray"}
                    focusBorderColor={"rgb(75,86,102)"}
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
                      focusBorderColor={"rgb(75,86,102)"}
                      width={"90%"}
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
                    loadingText="Registering..."
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
            </ModalBody>
          </form>
          <ModalFooter>
            <VStack width={"100%"} margin={"auto"} gap={"10px"}>
              <Text fontSize={"0.8rem"}>
                By creating an account, you agree to Anthropologie's terms of
                use and privacy policy. Landlines, VoIP, and prepaid phones are
                not supported. Standard message & data rates may apply. Message
                frequency may vary. Reply HELP for help, and STOP to cancel.
                Contact us for more information.
              </Text>
              <Text textAlign="center" fontSize={"1.4rem"}>
                Already have an account?
              </Text>
              <Button
                bg={"white"}
                color={"rgb(75,86,102)"}
                border="1px solid rgb(75,86,102)"
                mr={3}
                onClick={handleSubmit}
                width={"100%"}
                borderRadius={"0px"}
              >
                <Login text={"Login"} color={"rgb(75,86,102)"} />
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
