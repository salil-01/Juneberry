import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import "../styles/productpage.css"
import Productsidebar from "../components/Productsidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMenProduct } from "../redux/productReducer/action"

export const ProductPage = () => {
    const dispatch = useDispatch()
    // const
    useEffect(() => {
        let obj = {
            params: {
                // brand: "pilcro",
            },
        };
        dispatch(getMenProduct(obj))
    }, [])
    const { products } = useSelector((store) => store.DressReducer)
    console.log(products)
    return (
        <>
            <SimpleGrid className="topgrid" >
                <Box className="gridbox" bg='#b18341' height='80px'>DRESSES</Box>
                <Box className="gridbox" bg='#9a5462' height='80px'>PANTS</Box>
                <Box className="gridbox" bg='#b48779' height='80px'>JEANS</Box>
                <Box className="gridbox" bg='#cc835a' height='80px'>GETAWAY & RESORT <br />WEAR</Box>
                <Box className="gridbox" bg='#887277' height='80px'>TOPS</Box>
                <Box className="gridbox" bg='#a57772' height='80px'>INTIMATES</Box>
            </SimpleGrid>
            <Box className="maincontainer">
                <Box className="sidebarcontainer">
                    <Heading size={"md"} >Filter By:</Heading>
                    <Productsidebar />
                </Box>
                <Box className="productscontainer">
                    <Flex className="productscontainertop">
                        <Box className="label"><Heading size={"md"} >Dresses</Heading></Box>
                        <Flex className="sortcontainer" >
                            <select>
                                <option>Sort By</option>
                                <option>High to low</option>
                                <option>Low to High</option>
                            </select>
                            <Box>
                                <Button>PREV</Button>
                                <span>1</span>
                                <Button>NEXT</Button>

                            </Box>
                        </Flex>
                    </Flex>
                    <Box className="productscontainer2">
                    {products.map((el) => {
                        return <Box style={{ color: "gray", textAlign: "left", padding: "3%" }}>
                            <img src={el.img} alt={el.name} />
                            <p>{el.name}</p>
                            <p>${el.mrp}</p>
                            🟢🔵(2colors)
                        </Box>
                    })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}