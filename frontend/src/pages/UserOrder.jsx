import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CheckIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Table,
  Tbody,
  Box,
  Button,
  Badge,
  Flex,
  Text,
  Image,
  Stack,
  Skeleton,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const UserOrder = () => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const authData = useSelector((store) => {
    return store.authReducer;
  });
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/order/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setOrder(res.data.msg);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    // console.log(res.data);
  }, []);
  return (
    <Box
      maxWidth="100%"
      marginTop={"20px"}
      backgroundColor={"white"}
      overflowX="auto"
    >
      <Table variant="striped">
        <Tbody textTransform={"capitalize"}>
          {/* //Skeleton */}
          {isLoading ? (
            [...Array(5).keys()].map((item) => {
              return (
                <Stack key={item} width={"80%"} margin={"20px auto"}>
                  <Skeleton
                    height={{ base: "260", md: "260" }}
                    width={{ base: "90%", md: "70%", lg: "90%" }}
                    margin={"auto"}
                    borderRadius={"sm"}
                  />
                </Stack>
              );
            })
          ) : order.length === 0 ? (
            <Box mt={"40vh"}>
              <Heading fontSize={"1.5rem"}>No Order History Found</Heading>
              <Text>
                Head Over to{" "}
                <Button
                  _hover={{
                    textDecoration: "underline",
                  }}
                  variant={"link"}
                  color={"black"}
                  onClick = {()=>navigate("/products")}
                >
                  Products
                </Button>{" "}
                to get some...
              </Text>
            </Box>
          ) : (
            order?.map((item) => {
              return (
                <Box
                  key={item.id}
                  width={"70%"}
                  margin={"20px auto"}
                  p={{ base: "0", md: "1rem" }}
                  bg={"#F5EBEB"}
                  borderRadius={"5px"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
                  }
                >
                  <Badge fontSize={"1rem"} textAlign={"left"}>
                    {" "}
                    order Id : {item._id}
                  </Badge>
                  <Flex
                    gap="5"
                    mt={"25px"}
                    justify={"space-around"}
                    alignItems={"center"}
                  >
                    <Box
                      boxShadow={
                        "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
                      }
                      width={"20%"}
                    >
                      <Image src={item.img} boxSize={"100%"} />
                    </Box>
                    <Flex width={"60%"} gap={"30px"} flexDirection={"column"}>
                      <Flex
                        width={"70%"}
                        margin={"auto"}
                        gap={"40px"}
                        textAlign={"left"}
                        justifyContent={"space-between"}
                        padding={"8px"}
                      >
                        <Flex flexDirection={"column"} gap={"10px"}>
                          <Text>
                            <b>{item.name}</b>
                          </Text>
                          <Text>Ordered On : {item.created}</Text>
                        </Flex>
                        <Flex flexDirection={"column"} gap={"10px"}>
                          <Text>
                            <b>Price : ${item.price}</b>
                          </Text>
                          <Text>Quantity : {item.quantity}</Text>
                        </Flex>
                      </Flex>

                      <Box padding={"10px"}>
                        <Button
                          textTransform={"capitalize"}
                          colorScheme={
                            item.status == "pending" ? "yellow" : "green"
                          }
                          rightIcon={
                            item.status == "pending" ? (
                              <TimeIcon />
                            ) : (
                              <CheckIcon />
                            )
                          }
                        >
                          {item.status === "pending" ? "Pending" : "Delievered"}
                        </Button>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              );
            })
          )}
        </Tbody>
      </Table>
    </Box>
  );
};
