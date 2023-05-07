import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'


export const SingleProductPage = () => {
    // const [product, setProduct] = useState({})
    const { id } = useParams()
    const { products } = useSelector((store) => store.DressReducer)

    const singleproduct = products.find((el) => el._id === id)
    console.log(singleproduct)

    return (
        <>
            <Flex className="singleproductcontainer">
                <Box className="imagecontainer"><img src={singleproduct.img} /></Box>
                <Flex className="infocontainer">
                    <Box className="infocontainertextside">
                        <Flex className="infoselectioncontainer">
                        <Box className="info">
                            <Heading fontWeight={"medium"} as={"h1"}>{singleproduct.name}</Heading>
                            <Text className="infotext"><u>The {singleproduct.brand} Collection By Anthropologie</u></Text>
                            <Text className="infotext">⭐⭐⭐⭐ (45)</Text>
                            <Text fontSize={"xl"}>${singleproduct.price}</Text>
                            <Text className="infotext">Or 4 interest-free installments of $37.00 with <br /><b>Klarna</b> or <b>Afterpay ℹ️</b></Text>
                            <Text className="infotext">Online Exclusive</Text>
                        </Box>
                        <Box className="selection">
                            <Text fontSize={"large"}>Color:</Text>
                            <span className="color">🔵</span><span className="color">🔴</span><span className="color">🟡</span><span className="color">🟠</span><span className="color">🟢</span>
                            <Text fontSize={"large"}>Fit:</Text>
                            <Flex className="fitcontainer">
                                <Box className="fit">Standard</Box>
                                <Box className="fit">Petite</Box>
                                <Box className="fit">Plus</Box>
                            </Flex>
                            <Text fontSize={"large"}>Size:</Text>
                            <Flex className="sizecontainer">
                                <Box className="Size">S</Box>
                                <Box className="Size">M</Box>
                                <Box className="Size">L</Box>
                                <Box className="Size">XL</Box>
                                <Box className="Size">XXL</Box>
                            </Flex>
                            <Flex className="buttoncontainer">
                                <Button backgroundColor={"#4b5666"} color={"white"}>Add To Cart</Button>
                                <Button backgroundColor={"#4b5666"} color={"white"}>Add To Wishlist</Button>
                            </Flex>

                            <Box className="accordioncontainer">
                                <Accordion defaultIndex={[0]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text fontSize={"xl"}>Product Details</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={0}>
                                            Style No. 4130318350035; Color Code: 066

                                            Remember the sisterhood of the traveling pants? The Somerset is for grown-ups, but it has that magic. Insanely flattering, on everyone. Extremely versatile, for every style. The perfect outfit, for everything. If you're shopping for your first, we should warn you: You won't stop at one. You'll start a collection.

                                            Cotton; polyester, rayon lining
                                            V-neck
                                            Smocked waist
                                            Maxi silhouette
                                            Pintucked hem
                                            Pullover styling
                                            Machine wash
                                            Imported


                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text fontSize={"xl"}>Shipping &  Returns</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Within 30 days of purchase, we accept returns for unworn, unwashed, and unaltered items. Items must be returned in original packaging with all tags attached. A refund will be issued to the original form of payment at the original selling price. If returned after 30 days, a merchandise credit will be issued for the original selling price.

                                            For fast and free returns, find your local store. Prefer to return by mail? View our complete return policy and/or start your return online here.

                                            Please note: Wedding gowns and bridal sets must be shipped back to our warehouse and cannot be returned to a store unless originally purchased at a store.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>
                        </Flex>
                    </Box>
                    <Box className="infoimagegrid">
                        <Box className="gridImages"><img src="https://images.urbndata.com/is/image/Anthropologie/4130318350035_066_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" /></Box>
                        <Box className="gridImages"><img src="https://images.urbndata.com/is/image/Anthropologie/4130647160167_041_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" /></Box>
                        <Box className="gridImages"><img src="https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" /></Box>
                        <Box className="gridImages"><img src="https://images.urbndata.com/is/image/Anthropologie/4130646420031_014_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" /></Box>
                        <Box className="gridImages"><img src="https://images.urbndata.com/is/image/Anthropologie/4130646420009_001_b17?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" /></Box>
                    </Box>
                </Flex>
            </Flex>
            <Box className="recommendation" ><Heading>Recommended For You</Heading></Box>
            <Flex className="swipercontainer">
                <Box className="swiperimagecontainer">
                    <img alt="1" src="https://images.urbndata.com/is/image/Anthropologie/4130370060133_018_b2?$an-category$&qlt=80&fit=constrain" />
                </Box>
                <Box className="swiperimagecontainer">
                    <img alt="2" src="https://images.urbndata.com/is/image/Anthropologie/4130916210154_053_b2?$an-category$&qlt=80&fit=constrain" />
                </Box>
                <Box className="swiperimagecontainer">
                    <img alt="3" src="https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b?$an-category$&qlt=80&fit=constrain" />
                </Box>
                <Box className="swiperimagecontainer">
                    <img alt="4" src="https://images.urbndata.com/is/image/Anthropologie/4130089540094_030_b2?$an-category$&qlt=80&fit=constrain" />
                </Box>
            </Flex>
        </>
    )
}