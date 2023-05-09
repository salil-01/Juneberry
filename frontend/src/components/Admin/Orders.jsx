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
  SimpleGrid,
  Stack,
  Skeleton,
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
          {totalOrder.isLoading
            ? [...Array(3).keys()].map((item) => {
                return (
                  <Stack key={item} width={"100%"} margin={"20px auto"}>
                    <Skeleton
                      height={{ base: "500", md: "500", lg: "280" }}
                      margin={"auto"}
                      width={"100%"}
                      borderRadius={"sm"}
                    />
                  </Stack>
                );
              })
            : totalOrder?.orders?.map((item) => {
                return (
                  <Box
                    key={item.id}
                    borderWidth="2px"
                    p={{ base: "0", md: "1rem" }}
                    overflow={"auto"}
                  >
                    <Badge
                      fontSize={"1rem"}
                      margin={"0px 0px 10px 0px"}
                      textAlign={"left"}
                    >
                      {" "}
                      order Id : {item._id}
                    </Badge>
                    <Flex
                      gap="9"
                      justify={"space-around"}
                      alignItems={"center"}
                      flexDirection={{ sm: "column", md: "column", lg: "row" }}
                    >
                      <Box width={{ sm: "50%", md: "50%", lg: "10%" }}>
                        <Image src={item.img} />
                      </Box>
                      <SimpleGrid
                        width={"40%"}
                        textAlign={"left"}
                        columnGap={"25px"}
                        rowGap={"10px"}
                        gridTemplateColumns={"repeat(2,1fr)"}
                      >
                        <Text>
                          <b>User : {item.author}</b>
                        </Text>
                        <Text>City: {item.city}</Text>
                        <Text>Price: ${item.price}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                      </SimpleGrid>
                      <Button
                        textTransform={"capitalize"}
                        onClick={() => toggleStatus(item._id)}
                        colorScheme={item.status == "pending" ? "green" : "red"}
                        isDisabled={item.status == "pending" ? false : true}
                        rightIcon={
                          item.status == "pending" ? (
                            <TimeIcon />
                          ) : (
                            <CheckIcon />
                          )
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
                        alignItems={"center"}
                        justifyContent={"space-around"}
                        borderWidth="1px"
                        padding={"5px"}
                        backgroundColor={"teal.100"}
                        color={"black"}
                        borderRadius={"5px"}
                        margin={"10px 0px 10px 0px"}
                      >
                        <Box>Product Name : {item.name}</Box>
                        <Box>ordered on : {item.created}</Box>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
        </Tbody>
      </Table>
    </Box>
  );
};
