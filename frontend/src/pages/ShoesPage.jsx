import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import "../styles/productpage.css"
// import Productsidebar from "../components/Productsidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getShoeProduct } from "../redux/productReducer/action"
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import Shoesidebar from "../components/Shoesidebar"


export const ShoesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const initialsort = searchParams.get("sort")
    const brand = searchParams.getAll("brand")
    const [sort, setSort] = useState(initialsort || "")
    const initialpage = searchParams.get("page")
    const [page, setPage] = useState(+initialpage || 1)
    const location = useLocation()
    const dispatch = useDispatch()



    const handlesort = (e) => {
        setSort(e.target.value)

    }

    const handlepage = (val) => {
        setPage(page + val)
    }


    useEffect(() => {
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
        dispatch(getShoeProduct(obj))
        // if (brand && products.length < 9) { setPage(1) }

    }, [location.search, sort, page])

    const { products } = useSelector((store) => store.DressReducer)
    console.log(products.length)


    return (
        <>
            <SimpleGrid className="topgrid" >
                <Box className="gridbox" bg='#13674c' height='80px'>5-5.5</Box>
                <Box className="gridbox" bg='#429786' height='80px'>6-6.5</Box>
                <Box className="gridbox" bg='#58839c' height='80px'>7-7.5</Box>
                <Box className="gridbox" bg='#4b9587' height='80px'>8-8.5</Box>
                <Box className="gridbox" bg='#588a52' height='80px'>9-9.5</Box>
                <Box className="gridbox" bg='#6799aa' height='80px'>10-11</Box>
            </SimpleGrid>
            <Box className="maincontainer">
                <Box className="sidebarcontainer">
                    <Heading size={"md"} >Filter By:</Heading>
                    <Shoesidebar />
                </Box>
                <Box className="productscontainer">
                    <Flex className="productscontainertop">
                        <Box className="label"><Heading size={"md"} >Footwear</Heading></Box>
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
                            return <Link key={el._id} to={`/singleproduct/${el._id}`}>
                                <Box style={{ color: "gray", textAlign: "left", padding: "3%" }}>
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