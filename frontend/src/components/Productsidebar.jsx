import { Box, Flex, Text } from '@chakra-ui/react'
import "../styles/productpage.css"
import React, { useEffect, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'



const Productsidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialbrand = searchParams.getAll("brand")
    const [brand, setBrand] = useState(initialbrand || [])

    const handleChange = (e) => {
        const value = e.target.value
        let newBrand = [...brand]

        if (newBrand.includes(value)) {
            newBrand = newBrand.filter((el) => el !== value)
        } else {
            newBrand.push(value)
        }
        setBrand(newBrand)
    }

    useEffect(() => {
        const params = {
            brand
        }
        setSearchParams(params)
    }, [brand])
    return (
        <Flex className='sidebar'>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box className='sidebarfilters' as="span" flex='1' textAlign='Left'>
                                Brand
                            </Box>
                            <AddIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign='Left' pb={4}>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' value="Maeve" onChange={handleChange}
                                checked={brand.includes("Maeve")} /> Maeve
                        </Text>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' value="Sloggi" onChange={handleChange}
                                checked={brand.includes("Sloggi")} /> Sloggi
                        </Text>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' value="Pilcro" onChange={handleChange}
                                checked={brand.includes("Pilcro")} /> Pilcro
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>


            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box className='sidebarfilters' as="span" flex='1' textAlign='Left'>
                                Color
                            </Box>
                            <AddIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' /> White ⚪
                        </Text>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' /> Blue  🔵
                        </Text>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' /> Red   🔴</Text>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' /> Green 🟢
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>


            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box className='sidebarfilters' as="span" flex='1' textAlign='Left'>
                                Size
                            </Box>
                            <AddIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text padding={"1%"} className='sidebaroptions'>
                            <input type='checkbox' /> Small</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Medium</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Large</Text>
                        <Text padding={"1%"} className='sidebaroptions'> <input type='checkbox' /> X-Large</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box className='sidebarfilters' as="span" flex='1' textAlign='Left'>
                                Product Type
                            </Box>
                            <AddIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Tops</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Dresses</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Pants</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Jeans</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box className='sidebarfilters' as="span" flex='1' textAlign='Left'>
                                Category
                            </Box>
                            <AddIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> New!!</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Top-Rated</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Activewear</Text>
                        <Text padding={"1%"} className='sidebaroptions'><input type='checkbox' /> Blazers</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </Flex>
    )
}

export default Productsidebar
