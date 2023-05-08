import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Spinner,
  Box,
  Center,
  useToast,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const deleteUser = async (id, token) => {
  return await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/user/delete/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const toast = useToast();
  const token = useSelector((store) => {
    return store.authReducer.token;
  });
  //   console.log(token);
  /* -------Get Data of All Users ------ */
  const getData = async (url, token) => {
    setLoading(true);
    try {
      let res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(res);
      setData(res.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (data.length === 0) {
      getData(`${process.env.REACT_APP_BACKEND_URL}/user`, token);
    }
  }, [data.length]);
  const handleDelete = async (id) => {
    // console.log(id);
    setLoading(true);
    deleteUser(id, token)
      .then(() => {
        getData(`${process.env.REACT_APP_BACKEND_URL}/user`, token);
        toast({
          title: "User Deleted",
          position: "top",
          status: "success",
          variant: "top-accent",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(() => {
        getData(`${process.env.REACT_APP_BACKEND_URL}/user`, token);
        toast({
          title: "Error while Deleting User",
          position: "top",
          status: "error",
          variant: "top-accent",
          duration: 2000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box backgroundColor={"white"}>
      <TableContainer
        margin="auto"
        mt={"60px"}
        // alignItems={"center"}
        //   mr={["30px"]}
      >
        {loading ? (
          [...Array(10).keys()].map((item) => {
            return (
             
                <Stack key={item} width={"100%"} margin={"20px auto"}>
                  <Skeleton
                    height={{ base: "70", md: "70", lg: "70" }}
                    margin={"auto"}
                    width={"100%"}
                    borderRadius={"sm"}
                  />
                </Stack>
              
            );
          })
        ) : (
          <Table variant="striped" colorScheme={"teal"}>
            <Thead>
              <Tr>
                <Th borderColor={"gray.300"}>
                  <Center>ID</Center>
                </Th>
                <Th borderColor={"gray.300"}>
                  <Center>Name</Center>
                </Th>
                <Th borderColor={"gray.300"}>
                  <Center>Email</Center>
                </Th>
                <Th borderColor={"gray.300"}>
                  <Center>Mobile</Center>
                </Th>
                <Th borderColor={"gray.300"}>
                  <Center>Delete</Center>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((element) => (
                <Tr key={element._id}>
                  <Td backgroundColor={"white"}>
                    <Center>{element._id}</Center>
                  </Td>
                  <Td>
                    <Center>{element.name}</Center>
                  </Td>
                  <Td>
                    <Center>{element.email}</Center>
                  </Td>
                  <Td>
                    <Center>{element.number}</Center>
                  </Td>
                  <Td>
                    <Center>
                      <Button
                        onClick={() => handleDelete(element._id)}
                        bgColor={"red.500"}
                        _hover={{ bgColor: "red.400" }}
                        color={"whiteAlpha.900"}
                        //   w="70px"
                        margin={"auto"}
                      >
                        Delete
                      </Button>
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};
