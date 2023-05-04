import { Box, Flex, Text } from '@chakra-ui/react'
import "../styles/productpage.css"
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const Productsidebar = () => {
    return (
        <Flex className='sidebar'>
            
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='center'>
                                    BRAND
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Maeve</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Sloggi</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Pilcro</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
           
            
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='center'>
                                    COLOR
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>White ⚪</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Blue  🔵</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Red   🔴</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Green 🟢</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            
           
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='center'>
                                    SIZE
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Small</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Medium</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Large</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>X-Large</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='center'>
                                    PRODUCT TYPE
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Tops</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Dresses</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Pants</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Jeans</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='center'>
                                    CATEGORY
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>New!!</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Top-Rated</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Activewear</Text>
                            <Text padding={"1%"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} className='sidebaroptions'>Blazers</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
         
        </Flex>
    )
}

export default Productsidebar
