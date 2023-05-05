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
import { addProductMen, addProductWomen } from "../../../redux/admin/action";
const initialState = {
  hreftag:
    "https://www.aeo.in/product/american-eagle-men-blue-micro-dot-button-up-resort-shirt-873382.html",
  title: "",
  image_front: " ",
  image_reverse: "",
  price: "",
  type: "",
  category: "",
};
const reducerFn = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "title": {
      return {
        ...state,
        title: payload,
      };
    }
    case "image_front": {
      return {
        ...state,
        image_front: payload,
      };
    }
    case "image_reverse": {
      return {
        ...state,
        image_reverse: payload,
      };
    }
    case "price": {
      return {
        ...state,
        price: +payload,
      };
    }
    case "type": {
      return {
        ...state,
        type: payload,
      };
    }
    case "category": {
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
    return store.AdminReducer;
  });
  console.log(addProductData);
  //   const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    if (state.category === "men") {
      dispatcher(addProductMen(state))
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
    } else {
      dispatcher(addProductWomen(state))
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
              placeholder="Please Enter Product Title"
              name="title"
              onChange={(e) =>
                dispatch({ type: "title", payload: e.target.value })
              }
              value={state.title}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Image I</FormLabel>
            <Input
              value={state.image_front}
              placeholder="Please Enter URL for Ist Image"
              name="image_front"
              onChange={(e) =>
                dispatch({ type: "image_front", payload: e.target.value })
              }
              //
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Image II</FormLabel>
            <Input
              placeholder="Please Enter URL for IInd Image"
              name="image_reverse"
              onChange={(e) =>
                dispatch({ type: "image_reverse", payload: e.target.value })
              }
              value={state.image_reverse}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Product Price</FormLabel>
            <Input
              placeholder="Please Enter Price"
              name="price"
              onChange={(e) =>
                dispatch({ type: "price", payload: e.target.value })
              }
              value={state.price}
              type="number"
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select Gender"
              onChange={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
            </Select>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select Category"
              onChange={(e) =>
                dispatch({ type: "type", payload: e.target.value })
              }
            >
              <option value="tshirt">T Shirt</option>
              <option value="shirt">Shirt</option>
              <option value="shorts">Shorts</option>
              <option value="jeans">Jeans</option>
              <option value="dress">Women Dress</option>
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