import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import {
  SimpleGrid,
  Flex,
  Image,
  Text,
  IconButton,
  CloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ProductPage } from "../../pages/ProductPage";
const product = {
  _id: "64522cd8278fb6ceb2f28137",
  name: "Pilcro The Romy Relaxed Buttondown",
  img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
  price: 7399.47,
  mrp: 8057.2,
  brand: "Pilcro",
  rating: 4.2,
};
// const getAPIData = (Fn) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState(null);

//   const getData = (arg) => {
//     setLoading(true);
//     Fn(arg)
//       .then((res) => setData(res.data))
//       .catch((err) => {
//         console.log(err);
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   };

//   return { loading, error, data, getData };
// };
export const EditProduct = () => {
  const [data, setData] = useState("" || product);
  const [imageurl, setImageUrl] = useState(product.img || "");
  const toast = useToast();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const productData = useSelector((store) => {
  //   return store.AdminReducer;
  // });
  // console.log(productData);
  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    const updatedData = {
      ...data,
      price: +data.price,
    };
    console.log(updatedData);
    //   setData(updatedData);
    //   dispatch(editProduct(updatedData, id)).then(() => {
    //     toast({
    //       position: "top",
    //       title: `Product Edited Successfully`,
    //       status: "success",
    //       isClosable: true,
    //     });
    //   });
  };
  const handleUpload = () => {
    onClose();
  };
  useEffect(() => {
    const getSingleProduct = (val) => {
      axios
        .get(`https://american-eagle-mock-server.onrender.com/men/${id}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    //  getSingleProduct(id)
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Image URL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              <Flex align="center" gap="10px">
                <Input
                  placeholder="Enter Image URL"
                  w="360px"
                  name="img"
                  value={data.img}
                  onChange={handleChange}
                />
              </Flex>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleUpload} size="sm">
              Upload
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              ml={3}
              onClick={onClose}
              size="sm"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Center>
            <Heading fontSize={"1.5rem"}>
            EDIT PRODUCT
            </Heading>
        </Center>
      <Flex flexDirection={{"sm":"column","md":"column","lg":"row"}} gap={"40px"} justifyContent={"space-around"} alignItems={"center"} padding={"30px"}>
        
        <Flex
        
          border="5px solid"
          borderColor="brand.100"
          bg="gray.500"
          width={"40%"}
          
        >
          <Image w="100%" src={data.img} alt={data.name} />
          <IconButton
            onClick={onOpen}
            colorScheme="teal"
            aria-label="add image"
            size="sm"
            position={"absolute"}
            ml={"22%"}
            icon={<EditIcon />}
          />
        </Flex>
        <Box
          padding={10}
          margin={"auto"}
          bg="white"
          borderRadius={"5px"}
          boxShadow={"sm"}
          width={"80%"}
        
        >
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Please Enter Product Name"
                name="name"
                onChange={handleChange}
                value={data.name}
                type={"text"}
                border={"1px dotted gray"}
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Product Price</FormLabel>
              <Input
                value={data.price}
                placeholder="Please Enter Price"
                name="price"
                onChange={handleChange}
                type={"number"}
                border={"1px dotted gray"}
              
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Product MRP</FormLabel>
              <Input
                placeholder="Please Enter MRP"
                name="mrp"
                onChange={handleChange}
                value={data.mrp}
                border={"1px dotted gray"}
                type={"number"}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Brand</FormLabel>
              <Select
                name="type"
                placeholder="Select Brand"
                value={data.brand}
                onChange={handleChange}
                border={"1px dotted gray"}
              >
                <option value="tshirt">T Shirt</option>
                <option value="shirt">Shirt</option>
                <option value="shorts">Shorts</option>
                <option value="jeans">Jeans</option>
                <option value="dress">Women Dress</option>
              </Select>
            </FormControl>
            {/* <Stack spacing={10} mt={"30px"} pt={2}>
            {productData.isLoading ? (
              <Button
                variant="outline"
                border={"1px solid #43A047"}
                isLoading
                loadingText="Editing Product"
                size="lg"
                bg={"#1d2b4f"}
                color={"white"}
                borderRadius="5px"
                _hover={{
                  bg: "#43A047)",
                  color: "white",
                }}
              >
                Edit Product
              </Button>
            ) : (
              <Button
                variant="outline"
                rightIcon={<EditIcon />}
                onClick={handleSubmit}
                size="lg"
                border={"1px solid #43A047"}
                color={"#43A047"}
                borderRadius="5px"
                _hover={{
                  bg: "#43A047",
                  color: "white",
                }}
              >
                Edit Product
              </Button>
            )}
          </Stack> */}
          </form>
        </Box>
      </Flex>
    </>
  );
};
