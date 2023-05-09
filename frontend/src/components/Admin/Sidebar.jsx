import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  Image,
  Img,
  Avatar,
} from "@chakra-ui/react";
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
// import { TbReportMoney } from "react-icons/tb";
import { BsBagCheck, BsBag } from "react-icons/bs";
// import { AiOutlineBars } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../../redux/auth/action";
import logo from "../../assets/JuneBerry2.png";
import { logout } from "../../redux/authReducer/action";
const LinkItems = [
  { name: "DashBoard", icon: FiHome, path: "/admin/dashboard" },
  { name: "Products", icon: BsBag, path: "/admin/products" },
  { name: "Add Product", icon: MdAddShoppingCart, path: "/admin/products/add" },
  { name: "Orders", icon: BsBagCheck, path: "/admin/orders" },
  { name: "Users", icon: HiUsers, path: "/admin/users" },
  { name: "Go Back", icon: FaUserFriends, path: "/" },
];
export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        fontFamily={
          "Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          // border={"1px solid"}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box
          ml={{ base: 0, md: 60 }}
          p="4"
          backgroundColor={"rgb(239, 238, 241)"}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      // h="full"
      boxShadow={"base"}
      // marginLeft={"10px"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          _hover={{
            cursor: "pointer",
          }}
          // border={}
          src={logo}
          alt="admin_logo"
          width={"150px"}
          onClick={() => navigate("/")}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavLink   to={link.path}  onClick={onClose} key={link.name}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </NavLink>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link style={{ textDecoration: "none" }}  _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#3b475b",
          color: "#ffff",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  // const auth = true;
  const { user } = useSelector((store) => store.authReducer);
  // console.log(name);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      mb={"2px"}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box margin={"auto"}>
        <HStack mr={"10px"}>
          <Input
            type={"text"}
            height={"30"}
            width={"300px"}
            border={"1px dotted gray"}
            placeholder="Search for Product"
            _placeholder={{ opacity: 1, color: "gray.500" }}
          ></Input>
          <Icon as={BsSearch} height={"20px"} width={"10%"} />
        </HStack>
      </Box>
      <HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<IoMdSettings />}
          />
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack spacing="20px">
                <Avatar size={"lg"} />

                {/* <Img src={profile}/> */}

                <Box padding={"5px"} display={{ base: "none", md: "block" }}>
                  <Text fontSize="xs" color="gray.600">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      {" "}
                      {user}
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      {" "}
                      Admin
                    </span>
                  </Text>
                </Box>

                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList padding={"10px"}>
              <MenuItem
                borderRadius={"2px"}
                _hover={{
                  bg: "#1D2B4F",
                  color: "white",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                borderRadius={"2px"}
                _hover={{
                  bg: "#1D2B4F",
                  color: "white",
                }}
              >
                Settings
              </MenuItem>

              <MenuItem
                borderRadius={"2px"}
                _hover={{
                  bg: "#1D2B4F",
                  color: "white",
                }}
                onClick={() => {
                  toast({
                    title: "Logged Out Successfully",
                    position: "top",
                    description: "Redirecting to Home Page....",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  dispatch(logout).then(() => {
                    navigate("/");
                  });
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
