import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/juneberry.png";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../pages/Signup";
import { logout } from "../redux/authReducer/action";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const bagTotal = useSelector((store) => {
    return store.bagReducer.bag.length;
  });
  const adminAuth = useSelector((store) => {
    return store.authReducer.isAdminAuth;
  });
  const auth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  const user = useSelector((store) => {
    return store.authReducer.user;
  });
  const handleSearchClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Box position={"sticky"} width={"100%"} top={0} zIndex={1}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          alignItems={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            alignItems={"center"}
          >
            <Box
              textAlign={useBreakpointValue({
                base: "center",
                md: "left",
              })}
              width={{ sm: "100%", md: "100%", lg: "10%" }}
            >
              <Link to="/">
                <Image src={logo} boxSize={"100%"} />
              </Link>
            </Box>
            <Box w="100%">
              <Flex display={{ base: "none", md: "flex" }} width={"100%"}>
                <DesktopNav />
              </Flex>
            </Box>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={4}
            mt={"15px"}
          >
            {show === true ? (
              <Box>
                <Input
                  w={{ lg: "116px", base: "none" }}
                  h={"29px"}
                  borderRadius={0}
                  type="text"
                  placeholder="search"
                />
              </Box>
            ) : (
              " "
            )}
            <Box
              w={"30px"}
              h={"30px"}
              _hover={{ cursor: "pointer" }}
              onClick={handleSearchClick}
            >
              <Link to={"#"}>
                <CiSearch size={"28px"} />
              </Link>
            </Box>
            <Box w={"30px"} h={"30px"} _hover={{ cursor: "pointer" }}>
              <HStack>
                <Link to={"/bag"}>
                  <IoBagOutline size={"27px"} />
                </Link>

                <span
                  style={{
                    marginTop: "-30px",
                    marginLeft: "-5px",
                    display: "float",
                  }}
                >
                  {bagTotal || ""}
                </span>
              </HStack>
            </Box>
            <Box
              w={"30px"}
              h={"30px"}
              // border={"1px solid black"}
              _hover={{ cursor: "pointer" }}
            >
              <Menu>
                <MenuButton>
                  <IoPersonOutline size={"27px"} />
                </MenuButton>
                <MenuList padding={"10px"}>
                  <MenuItem>
                    {auth || adminAuth ? (
                      <Text fontWeight={"500"}>Hello , {user} 🙂</Text>
                    ) : null}
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    {auth || adminAuth ? (
                      <Link to={"/orders"}>
                        <Text fontWeight={"500"}>Orders</Text>
                      </Link>
                    ) : null}
                  </MenuItem>
                  <MenuItem
                    borderRadius={"2px"}
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    {auth || adminAuth ? (
                      <Link
                        to={"#"}
                        onClick={() => {
                          dispatch(logout);
                          toast({
                            title: "Logged Out Successfully",
                            position: "top",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          });
                          navigate("/");
                        }}
                      >
                        <Text fontWeight={"500"}>Logout</Text>
                      </Link>
                    ) : (
                      <Link to={"/login"}>
                        <Text fontWeight={"500"}>Login</Text>
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem borderRadius={"2px"} padding={"10px"}>
                    <Box
                      width={"100%"}
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      <Signup text={"Signup"} />
                    </Box>
                  </MenuItem>
                  {adminAuth ? (
                    <MenuItem
                      borderRadius={"2px"}
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      <Link
                        to={"/admin/dashboard"}
                        onClick={() =>
                          toast({
                            title: "Welcome to Admin Dashboard..👋",
                            position: "top",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          })
                        }
                      >
                        <Text
                          fontWeight={"500"}
                          _hover={{ textDecoration: "underline" }}
                        >
                          Admin Panel
                        </Text>
                      </Link>
                    </MenuItem>
                  ) : null}
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Flex>
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
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("blackAlpha.900");
  const linkHoverColor = useColorModeValue("teal");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const defaultLinkStyle = { borderBottom: "3px solid white" };
  const activeLinkStyle = {
    borderBottom: "3px solid rgb(75,86,102)",
  };

  return (
    <Flex width={"100%"} mt={"20px"} justifyContent={"space-around"}>
      {/* Mens section */}
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <NavLink
            p={2}
            to={"/products/dress"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
            style={({ isActive }) => {
              return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            end
          >
            <Text
              fontSize={"18px"}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
              // borderBottom={"2px solid"}
            >
              Dresses
            </Text>
          </NavLink>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          to={"#"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>TOPS</Text>
              <Text>
                <Link to={"#"}>T-Shirts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Graphic Tees</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shirts</Link>
              </Text>
              <Text>
                <Link to={"#"}> Sweaters & Carigans</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jackets</Link>
              </Text>
              <Text>
                <Link to={"#"}>Hoodies & Sweatshirts</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>BOTTOMS</Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shorts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Pants</Link>
              </Text>
              <Text>
                <Link to={"#"}>Skirts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Joggers</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>DRESSES</Text>
              <Text>
                <Link to={"#"}>Midi Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jumpsuits</Link>
              </Text>
              <Text>
                <Link to={"#"}>Maxi Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Mini Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Rompers</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shift Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shirt Dresses</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>SHOES & ACCESSORIES</Text>
              <Text>
                <Link to={"#"}>Shoes</Link>
              </Text>
              <Text>
                <Link to={"#"}>Socks</Link>
              </Text>
              <Text>
                <Link to={"#"}>Sunglasses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Belts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Rompers</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bags</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jewelry</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>FEATURED</Text>
              <Text>
                <Link to={"#"}>New Arrivals</Link>
              </Text>
              <Text>
                <Link to={"#"}>Best Sellers</Link>
              </Text>
              <Text>
                <Link to={"#"}> Crop Edit</Link>
              </Text>
              <Text>
                <Link to={"#"}> Ripped Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>The Logo Shop</Link>
              </Text>
              <Text>
                <Link to={"#"}>Curvy Destination</Link>
              </Text>
              <Text>
                <Link to={"#"}>Dream Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>The Dress Shop</Link>
              </Text>
              <Text>
                <Link to={"#"}>Stripe Edit</Link>
              </Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>

      {/* Shoes section */}
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <NavLink
            p={2}
            to={"/products/shoes"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
             style={({ isActive }) => {
              return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
          >
            <Text
              fontSize={"18px"}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
            >
              Shoes
            </Text>
          </NavLink>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          to={"#"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>TOPS</Text>
              <Text>
                <Link to={"#"}>T-Shirts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Graphic Tees</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shirts</Link>
              </Text>
              <Text>
                <Link to={"#"}> Sweaters & Carigans</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jackets</Link>
              </Text>
              <Text>
                <Link to={"#"}>Hoodies & Sweatshirts</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>BOTTOMS</Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shorts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Pants</Link>
              </Text>
              <Text>
                <Link to={"#"}>Skirts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Joggers</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>DRESSES</Text>
              <Text>
                <Link to={"#"}>Midi Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jumpsuits</Link>
              </Text>
              <Text>
                <Link to={"#"}>Maxi Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Mini Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Rompers</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shift Dresses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Shirt Dresses</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>SHOES & ACCESSORIES</Text>
              <Text>
                <Link to={"#"}>Shoes</Link>
              </Text>
              <Text>
                <Link to={"#"}>Socks</Link>
              </Text>
              <Text>
                <Link to={"#"}>Sunglasses</Link>
              </Text>
              <Text>
                <Link to={"#"}>Belts</Link>
              </Text>
              <Text>
                <Link to={"#"}>Rompers</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bags</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jewelry</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>FEATURED</Text>
              <Text>
                <Link to={"#"}>New Arrivals</Link>
              </Text>
              <Text>
                <Link to={"#"}>Best Sellers</Link>
              </Text>
              <Text>
                <Link to={"#"}> Crop Edit</Link>
              </Text>
              <Text>
                <Link to={"#"}> Ripped Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>The Logo Shop</Link>
              </Text>
              <Text>
                <Link to={"#"}>Curvy Destination</Link>
              </Text>
              <Text>
                <Link to={"#"}>Dream Jeans</Link>
              </Text>
              <Text>
                <Link to={"#"}>The Dress Shop</Link>
              </Text>
              <Text>
                <Link to={"#"}>Stripe Edit</Link>
              </Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>

      {/* Clothing */}
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            to={"/products/dress"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
          >
            <Text
              fontSize={"18px"}
              _hover={{
                color: linkHoverColor,
              }}
              fontWeight={500}
            >
              Clothing
            </Text>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>MENS SALE</Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS SALE</Text>
              <Text>
                <Link to={"#"}>Tops</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>LAST OF THE BEST</Text>
              <Text>
                <Link to={"#"}>Upto 60 percetn Off</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS FEST</Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>

      {/* Accessorie */}
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            to={"/products/dress"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
          >
            <Text
              fontSize={"18px"}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
            >
              Accessories
            </Text>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>MENS SALE</Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS SALE</Text>
              <Text>
                <Link to={"#"}>Tops</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>LAST OF THE BEST</Text>
              <Text>
                <Link to={"#"}>Upto 60 percetn Off</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS FEST</Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            to={"/products/dress"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
          >
            <Text
              fontSize={"18px"}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
            >
              Weddings{" "}
            </Text>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>MENS SALE</Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS SALE</Text>
              <Text>
                <Link to={"#"}>Tops</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>LAST OF THE BEST</Text>
              <Text>
                <Link to={"#"}>Upto 60 percetn Off</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS FEST</Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            to={"/products/dress"}
            fontSize={"16px"}
            fontWeight={500}
            color={linkColor}
          >
            <Text
              fontSize={"18px"}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
            >
              Sale
            </Text>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          borderTop={0}
          boxShadow={"md"}
          bg={popoverContentBgColor}
          borderRadius={0}
          p={5}
          minW={"sm"}
          w={"100vw"}
        >
          <HStack
            align={"start"}
            spacing={36}
            padding={"2px 12px"}
            marginBottom={"30px"}
          >
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>MENS SALE</Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS SALE</Text>
              <Text>
                <Link to={"#"}>Tops</Link>
              </Text>
              <Text>
                <Link to={"#"}>Bottoms</Link>
              </Text>
              <Text>
                <Link to={"#"}>Jeans</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>LAST OF THE BEST</Text>
              <Text>
                <Link to={"#"}>Upto 60 percetn Off</Link>
              </Text>
            </Stack>
            <Stack
              spacing={3}
              textAlign={"left"}
              fontSize={"12px"}
              letterSpacing={"0.5px"}
            >
              <Text fontWeight={"bold"}>WOMENS FEST</Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

// const DesktopSubNav = ({ label, to, subLabel }) => {
//     return (
//         <Link
//             to={to}
//             role={"group"}
//             display={"block"}
//             p={2}
//             rounded={"md"}
//             // _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//         >
//             <Stack direction={"row"} align={"center"}>
//                 <Box border={"1px solid red"} textAlign={"left"}>
//                     <Text
//                         transition={"all .3s ease"}
//                         // _groupHover={{ color: "pink.400" }}
//                         // fontWeight={"bold"}
//                         fontSize={"12px"}
//                     >
//                         {label}
//                     </Text>
//                     <Text fontSize={"12px"} letterSpacing={"0.5px"}>
//                         {subLabel}
//                     </Text>
//                 </Box>
//                 <Flex
//                     transition={"all .3s ease"}
//                     transform={"translateX(-10px)"}
//                     opacity={0}
//                     _groupHover={{
//                         opacity: "100%",
//                         transform: "translateX(0)",
//                     }}
//                     justify={"flex-end"}
//                     align={"center"}
//                     flex={1}
//                 ></Flex>
//             </Stack>
//         </Link>
//     );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Dress",
    children: [
      {
        label: "Mini Dress",
        to: "/products/dress",
      },
      {
        label: "Graphic Tees",
        to: "/products/dress",
      },
      {
        label: "Floral Dress",
        to: "/products/dress",
      },
      {
        label: "Embroidery",
        to: "/products/dress",
      },
    ],
  },
  {
    label: "Shoes",
    children: [
      {
        label: "Sneakers",
        to: "/products/shoes",
      },
      {
        label: "Casuals",
        to: "/products/shoes",
      },
      {
        label: "Party Wear",
        to: "/products/shoes",
      },
    ],
  },
  {
    label: "Clothing",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        to: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        to: "#",
      },
    ],
  },
  {
    label: "Accessories",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        to: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        to: "#",
      },
    ],
  },
];
