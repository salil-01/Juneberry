import React from "react";
import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export const Navbar = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex", lg: "flex" }}
        bg={"#B43C3C"}
        color={"white"}
        justify={"space-evenly"}
        padding={3}
      >
        <Text fontSize={13}>
          the skies are blue and the dresses are darling
        </Text>
        <Text>HERE COMES THE SUN</Text>
        <Text fontSize={12} textDecoration={"underline"}>
          shop the May Collection
        </Text>
      </Flex>
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={{
            base: "space-evenly",
            md: "space-evenly",
            lg: "space-between",
          }}
          margin={"auto"}
          padding={5}
          borderBottom={"1px solid"}
          borderBottomColor={"blackAlpha.500"}
        >
          <Box>
            <Img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" />
          </Box>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"30%"}
          >
            <Input
              display={{ base: "none", md: "none", lg: "block" }}
              placeholder="Search Anthropologie"
              width={"47%"}
            />
            <ShoppingBagOutlinedIcon fontSize="medium" />
            <Text color={"teal"} fontWeight={500} cursor={"pointer"}>
              SignIn
            </Text>
          </Flex>
        </Flex>
        <Flex
          justify={"space-evenly"}
          paddingTop={3}
          borderBottom={"1px solid"}
          borderBottomColor={"blackAlpha.500"}
        >
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Top-Rated
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Dresses
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Clothing
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Shoes
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Accessories
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            display={{ base: "none", md: "none", lg: "block" }}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Beauty & Wellness
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            cursor={"pointer"}
            display={{ base: "none", md: "none", lg: "block" }}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Weddings
          </Text>
          <Text
            color={"blackAlpha.900"}
            paddingBottom={5}
            display={{ base: "none", md: "none", lg: "block" }}
            cursor={"pointer"}
            fontWeight={"600"}
            _hover={{
              color: "teal",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "teal",
            }}
          >
            Sale
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
