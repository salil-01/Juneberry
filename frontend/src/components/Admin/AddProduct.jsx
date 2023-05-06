import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  useToast,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductDress,
  addProductShoes,
} from "../../redux/adminReducer/action";
const initialState = {
  name: "",
  img: " ",
  mrp: "",
  price: "",
  brand: "",
  category: "",
};
const reducerFn = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NAME": {
      return {
        ...state,
        name: payload,
      };
    }
    case "IMG": {
      return {
        ...state,
        img: payload,
      };
    }
    case "MRP": {
      return {
        ...state,
        mrp: +payload,
      };
    }
    case "PRICE": {
      return {
        ...state,
        price: +payload,
      };
    }
    case "BRAND": {
      return {
        ...state,
        brand: payload,
      };
    }
    case "CATEGORY": {
      return {
        ...state,
        category: payload,
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};
export const AddProduct = () => {
  const initialRef = useRef(null);
  const toast = useToast();
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const dispatcher = useDispatch();
  const addProductData = useSelector((store) => {
    return store.adminReducer;
  });
  const token = useSelector((store) => {
    return store.authReducer.token;
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(state);
    let productData = {
      name: state.name,
      img: state.img,
      mrp: state.mrp,
      price: state.price,
      brand: state.brand,
      rating:4.3
    };
    if (state.category === "dress") {
      dispatcher(addProductDress(productData,token))
        .then((res) => {
          toast({
            position: "top",
            title: `Product Added Successfully`,
            status: "success",
            isClosable: true,
          });
        })
        .catch((error) => {
          console.log(error);
          toast({
            position: "top",
            title: `Error`,
            status: "error",
            isClosable: true,
          });
        });
    } else if(state.category==="shoes"){
      dispatcher(addProductShoes(productData, token))
        .then((res) => {
          toast({
            position: "top",
            title: `Product Added Successfully`,
            status: "success",
            isClosable: true,
          });
        })
        .catch((error) => {
          console.log(error);
          toast({
            position: "top",
            title: `Error`,
            status: "error",
            isClosable: true,
          });
        });
    }
    dispatch({ type: "reset" });
  };
  return (
    <>
      <Box
        padding={10}
        margin={"auto"}
        mt="10px"
        bg="white"
        borderRadius={"5px"}
        boxShadow={"2xl"}
        width={{ base: "95vw", md: "95vw", lg: "40vw" }}
      >
        <Heading as={"h3"} textAlign={"center"} fontSize={"1.0rem"} mb={"40px"}>
          Please Enter Product Details to Add a New Product
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Product Title</FormLabel>
            <Input
              ref={initialRef}
              border={"1px dotted gray"}
              name="name"
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
              value={state.name}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Image</FormLabel>
            <Input
              value={state.img}
              border={"1px dotted gray"}
              name="img"
              onChange={(e) =>
                dispatch({ type: "IMG", payload: e.target.value })
              }
              //
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Mrp</FormLabel>
            <Input
              border={"1px dotted gray"}
              name="mrp"
              onChange={(e) =>
                dispatch({ type: "MRP", payload: e.target.value })
              }
              type="number"
              value={state.mrp}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Product Price</FormLabel>
            <Input
              border={"1px dotted gray"}
              name="price"
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
              value={state.price}
              type="number"
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Brand</FormLabel>
            <Select
              placeholder="Select Brand"
              border={"1px dotted gray"}
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.value })
              }
              value={state.brand}
            >
              <option value="Maeve">Maeve</option>
              <option value="Sloggi">Sloggi</option>
              <option value="Pilcro">Pilcro</option>
            </Select>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Category</FormLabel>
            <Select
              placeholder="Select Category"
              border={"1px dotted gray"}
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              value={state.category}
            >
              <option value="dress">Dress</option>
              <option value="shoes">Shoes</option>
            </Select>
          </FormControl>
          <Stack spacing={10} mt={"30px"} pt={2}>
            {addProductData.isLoading ? (
              <Button
                variant="outline"
                border={"1px solid #1d2b4f"}
                rightIcon={<AddIcon />}
                isLoading
                loadingText="Adding Product"
                size="lg"
                bg={"#1d2b4f"}
                color={"white"}
                borderRadius="5px"
                _hover={{
                  bg: "#1d2b4f)",
                }}
              >
                Add Product
              </Button>
            ) : (
              <Button
                variant="outline"
                rightIcon={<AddIcon />}
                onClick={handleSubmit}
                size="lg"
                border={"1px solid #1d2b4f"}
                color={"#1d2b4f"}
                borderRadius="5px"
                _hover={{
                  bg: "#1d2b4f",
                  color: "white",
                }}
              >
                Add Product
              </Button>
            )}
          </Stack>
        </form>
      </Box>
    </>
  );
};
