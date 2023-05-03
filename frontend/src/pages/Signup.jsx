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
} from "@chakra-ui/react";
import { CloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const inital = {
  name: "",
  number: "",
  email: "",
  password: "",
};
export const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(inital);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
      <Button onClick={onOpen}>Sign Up</Button>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"0px"}>
        <HStack>
            <Spacer/>
            <Button variant="ghost" onClick={onClose}>
            <CloseIcon/>
          </Button></HStack>
          <ModalHeader textAlign={"center"} fontSize={"1.6rem"}>
            Create An Account
          </ModalHeader>
        
          <ModalBody>
            <Text textAlign="center" fontSize={"0.8rem"} mb={2}>
            Welcome to Anthropologie! It's quick and easy to set up an account.
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
          </ModalBody>
          <ModalFooter>
            <VStack width={"100%"} margin={"auto"} gap={"10px"}>
              <Button
                type="submit"
                bg={"rgb(75,86,102)"}
                color={"white"}
                mr={3}
                onClick={handleSubmit}
                width={"100%"}
                borderRadius={"0px"}
                _hover={{
                    bg:"white",
                    color:"rgb(75,86,102)",
                    border:"1px solid rgb(75,86,102)"
                }}
              >
                NEXT
              </Button>
              <Text fontSize={"0.8rem"} >
              By creating an account, you agree to Anthropologie's terms of use and privacy policy. Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel. Contact us for more information.
              </Text>
              <Text textAlign="center"  fontSize={"1.4rem"}>
               Already have an account? 
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
                    bg:"rgb(75,86,102)",
                    color:"white",
                    
                }}
              >
                LOGIN
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
