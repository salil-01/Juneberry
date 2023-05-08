import React from "react";
// import Otp from './Otp';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  useDisclosure,
  Button,
  Text,
  Input,
  Image,
  useToast,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Radio,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../redux/bagReducer/action";

const CardDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cardNumber, setCardnumber] = useState("");
  const [cardname, setCardname] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux store
  const bagData = useSelector((store) => {
    return store.bagReducer.bag;
  });
  // console.log(bagData);
  const addressData = useSelector((store) => {
    return store.bagReducer.address;
  });
  const token = useSelector((store) => {
    return store.authReducer.token;
  });
  const toast = useToast();
  let getDate = () => {
    let d = new Date();
    let val = d.toLocaleString();
    return val;
  };
  const handleSubmit = () => {
    toast({
      position: "top",
      title: "Processing Your Order...",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    let orderData = bagData?.map((element) => {
      return {
        ...element,
        created: getDate(),
        status: "pending",
        city: addressData.city,
      };
    });
    // console.log(orderData);
    setTimeout(() => {
      dispatch(postOrder(orderData, token)).then(() => {
        toast({
          position: "top",
          title: "Order Placed Successfully ✔️",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        // dispatch(updateBag([]));
        // navigate("/");
      });
    }, 2000);
  };
  return (
    <div>
      <div>
        <Button
          ref={btnRef}
          fontSize={"1rem"}
          fontWeight={"500"}
          borderRadius={"0%"}
          border={"1px solid #3b475b"}
          _hover={{ bg: "#3b475b", color: "white" }}
          onClick={onOpen}
        >
          PROCEED TO CHECKOUT
        </Button>
        <Modal
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Select Payment Method</ModalHeader>

            <ModalBody>
              <Box
                textAlign="left"
                mt={5}
                pt={3}
                pl={2}
                width="100%"
                height="100%"
              >
                <Text fontSize={15} as="b">
                  Choose Any One Option
                </Text>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" textAlign="left" display="flex">
                          <Box pr={2} mt={5}>
                            {" "}
                            <Image
                              w="20px"
                              h="20px"
                              src="https://tse2.mm.bing.net/th?id=OIP.F2WzA_N_bDQn2WSA8AolfAHaF7&pid=Api&P=0"
                            />{" "}
                          </Box>
                          <Box pr={1} mt={5}>
                            CREDIT/DEBIT CARD{" "}
                          </Box>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Stack>
                          <Box display="flex">
                            <Input
                              type="number"
                              name="alternumber"
                              placeholder="Card Number*"
                              variant="flushed"
                              maxLength="12"
                              value={cardNumber}
                              onChange={(e) => {
                                setCardnumber(e.target.value);
                              }}
                              isRequired
                            />{" "}
                            <Image
                              w="20px"
                              h="20px"
                              className="user"
                              src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                              alt="user"
                            />{" "}
                          </Box>
                          <Box display="flex">
                            <Input
                              type="text"
                              name="alternumber"
                              placeholder="Card UserName*"
                              variant="flushed"
                              value={cardname}
                              onChange={(e) => {
                                setCardname(e.target.value);
                              }}
                            />{" "}
                            <Image
                              w="20px"
                              h="20px"
                              className="user"
                              src="https://cdn-icons-png.flaticon.com/512/875/875610.png"
                              alt="user"
                            />
                          </Box>
                          <Box display="flex" mt={8}>
                            <Box>
                              <Input
                                type="tel"
                                name="mobile"
                                maxLength="2"
                                placeholder="Month*"
                                variant="flushed"
                                value={month}
                                onChange={(e) => {
                                  setMonth(e.target.value);
                                }}
                              />
                            </Box>
                            <Box pl={4}>
                              <Input
                                type="tel"
                                name="alternumber"
                                placeholder="Year*"
                                maxLength="4"
                                variant="flushed"
                                value={year}
                                onChange={(e) => {
                                  setYear(e.target.value);
                                }}
                              />
                            </Box>
                            <Box pl={4} display="flex">
                              <Input
                                type="tel"
                                name="alternumber"
                                placeholder="CVV*"
                                maxLength="3"
                                variant="flushed"
                                value={cvv}
                                onChange={(e) => {
                                  setCvv(e.target.value);
                                }}
                              />
                              <Image
                                w="15px"
                                h="15px"
                                className="user"
                                src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                                alt="user"
                              />
                            </Box>
                          </Box>
                          <Box margin={"auto"}>
                            <Button
                              mt={"20px"}
                              onClick={handleSubmit}
                              borderRadius={"0px"}
                              border={"1px solid green"}
                              isDisabled={
                                cardNumber === "" ||
                                cardname === "" ||
                                month === "" ||
                                year === "" ||
                                cvv === ""
                              }
                            >
                              Place Order
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          mt={5}
                          flex="1"
                          textAlign="left"
                          display="flex"
                        >
                          <Box pr={2} mt={5}>
                            <Image
                              w="20px"
                              h="20px"
                              src="https://tse1.mm.bing.net/th?id=OIP.frkMALy3NuQXFoJ1hSlYHwAAAA&pid=Api&P=0"
                            />
                          </Box>{" "}
                          <Box pr={1} mt={5}>
                            {" "}
                            CASH ON DELIEVERY
                          </Box>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Stack>
                          <Box pl={4}>
                            <Radio
                              size="md"
                              name="1"
                              colorScheme="green"
                              defaultChecked={true}
                            >
                              Pay on Delievery
                            </Radio>
                          </Box>
                          <Box>
                            <Button
                              mt={"20px"}
                              onClick={handleSubmit}
                              borderRadius={"0px"}
                              border={"1px solid green"}
                              color="green"
                              _hover={{
                                color: "white",
                                bg: "green",
                              }}
                            >
                              Place Order
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="outline"
                w="100%"
                mr={3}
                colorScheme="#3b475b"
                borderRadius={"0px"}
                _hover={{
                  color: "white",
                  bg: "#3b475b",
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default CardDetail;
