import { CheckIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Badge,
  Flex,
  Text,
  Image,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderStatus, getOrders } from "../../redux/adminReducer/action";

export const AllOrders = () => {
  //   const [totalOrders, setTotalOrders] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const totalOrder = useSelector((store) => {
    return store.adminReducer;
  });
  const token = useSelector((store) => {
    return store.authReducer.token;
  });

  // console.log(totalOrder);

  useEffect(() => {
    dispatch(getOrders(token));
  }, []);

  const toggleStatus = (id) => {
    toast({
      position: "top",
      title: `Updating Order Status...`,
      status: "success",
      isClosable: true,
    });
    let item = totalOrder?.orders?.find((el) => el._id === id);
    if (item.status === "pending") {
      dispatch(changeOrderStatus(id, "completed", token)).then(() => {
        dispatch(getOrders(token));
        toast({
          position: "top",
          title: `Order Status Updated Successfully`,
          status: "success",
          isClosable: true,
        });
      });
    } else {
      dispatch(changeOrderStatus(id, "pending", token)).then(() => {
        dispatch(getOrders(token));
        toast({
          position: "top",
          title: `Order Status Updated Successfully`,
          status: "success",
          isClosable: true,
        });
      });
    }
  };

  return (
    <Box maxWidth="100%" backgroundColor={"white"} overflowX="auto">
      <Table variant="striped">
        <Tbody textTransform={"capitalize"}>
          {totalOrder.isLoading ? (
            <Box>
              <Spinner size={"md"} />
            </Box>
          ) : (
            totalOrder?.orders?.map((item) => {
              return (
                <Box
                  key={item.id}
                  borderWidth="2px"
                  p={{ base: "0", md: "1rem" }}
                  overflow={"auto"}
                >
                  <Badge fontSize={"1rem"} textAlign={"left"}>
                    {" "}
                    order Id : {item._id}
                  </Badge>
                  <Flex
                    gap="9"
                    justify={"space-around"}
                    alignItems={"center"}
                    py="1rem"
                    minW={"1000px"}

                  >
                    <Box>
                      <Image src={item.img} boxSize={"100%"} />
                    </Box>
                    <Text>Name : {item.author}</Text>
                    <Text>City: {item.city}</Text>

                    <Button
                      textTransform={"capitalize"}
                      onClick={() => toggleStatus(item._id)}
                      colorScheme={item.status == "pending" ? "green" : "red"}
                      isDisabled={item.status == "pending" ? false : true}
                      rightIcon={
                        item.status == "pending" ? <TimeIcon /> : <CheckIcon />
                      }
                      _hover={{
                        bg: "#EF6C00",
                        color: "white",
                      }}
                    >
                      {item.status === "pending" ? "Pending" : "Delievered"}
                    </Button>
                  </Flex>
                  <Flex flexDir={"column"} gap="5">
                    <Flex
                      key={item._id}
                      gap="15"
                      align={"center"}
                      borderWidth="1px"
                      px="1rem"
                      py="0.2rem"
                      backgroundColor={"teal.400"}
                      color={"black"}
                      minW={"1000px"}
                      borderRadius={"5px"}
                    >
                      <Box width="10rem">{item.name.substring(0, 15)}</Box>
                      <Flex gap="4">
                        <Text>Price: ₹{item.price}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                      </Flex>
                      <Box pl="7rem">ordered on : {item.created}</Box>
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
