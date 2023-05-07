import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import "../styles/productpage.css"
import Productsidebar from "../components/Productsidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getDressProduct } from "../redux/productReducer/action"
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { Link, useLocation, useSearchParams } from "react-router-dom"


export const ProductPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const initialsort = searchParams.get("sort")
    const brand = searchParams.getAll("brand")
    const [sort, setSort] = useState(initialsort || "")
    const initialpage = searchParams.get("page")
    const [page, setPage] = useState(initialpage || 1)
    const location = useLocation()
    const dispatch = useDispatch()

    const handlesort = (e) => {
        setSort(e.target.value)

    }

    const handlepage = (val) => {
        setPage(page + val)
    }


    useEffect(() => {
        if (products.length < 9) { setPage(1) }
        const params = {
            brand,
            page
        }
        sort && (params.sort = sort)
        setSearchParams(params)

        let obj = {
            params: {
                brand,
                page
            }
        };
        // (!brand) && (obj.params.page=page)
        sort && (obj.params.sort = sort)
        dispatch(getDressProduct(obj))
    }, [location.search, sort, page])

    const { products } = useSelector((store) => store.DressReducer)
    console.log(products.length)
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
                            <select onChange={handlesort}>
                                <option value="">Sort By</option>
                                <option value="desc">High to low</option>
                                <option value="asc">Low to High</option>
                                <option value="">Newest</option>
                                <option value="">Bestselling</option>
                                <option value="">A to Z</option>
                                <option value="">Z to A</option>
                            </select>
                            <Box>
                                <Button variant='ghost' leftIcon={<ChevronLeftIcon boxSize={10} />} isDisabled={page === 1} onClick={() => handlepage(-1)} ></Button>
                                {page}
                                <Button variant='ghost' isDisabled={products.length < 9} onClick={() => handlepage(1)} leftIcon={<ChevronRightIcon boxSize={10} />}></Button>


                            </Box>
                        </Flex>
                    </Flex>
                    <Box className="productscontainer2">
                        {products?.map((el) => {
                            return <Link to={`/${"dress"}/${el._id}`}>
                                <Box key={el._id} style={{ color: "gray", textAlign: "left", padding: "3%" }}>
                                    <img src={el.img} alt={el.name} />
                                    <p>{el.name}</p>
                                    <span>${el.price}</span>
                                    <p>🟢🔵(2colors)</p>
                                </Box>
                            </Link>
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}