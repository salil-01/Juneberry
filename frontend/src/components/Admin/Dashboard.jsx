import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Chart } from "./Stats";
import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { LineChart } from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/adminReducer/action";

const getData = async (url) => {
  return await axios
    .get(url)
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
};
const StatsCard = (props) => {
  const { title, stat, icon, color, percent, loss } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      boxShadow={"base"}
      // border={"1px solid"}
      borderColor={useColorModeValue("gray.500", "gray.500")}
      borderRadius={"3px"}
      backgroundColor={"#FEFAE0"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box>
          {loss === "loss" ? (
            <ArrowDownIcon boxSize={"20px"} color={color} />
          ) : (
            <ArrowUpIcon boxSize={"20px"} color={color} />
          )}
          <Text>{percent}</Text>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

export const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [menData, setMenData] = useState(0);
  const [womenData, setWomenData] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const authData = useSelector((store) => {
    return store.authReducer;
  });
  // console.log(adminData);
  useEffect(() => {
    // dress data
    getData(`${process.env.REACT_APP_BACKEND_URL}/dress`).then((res) => {
      // console.log(res.data.msg);
      setMenData(res.data.msg.length);
    });
    //shoes data
    getData(`${process.env.REACT_APP_BACKEND_URL}/shoes`).then((res) => {
      // console.log(res.data);
      setWomenData(res.data.msg.length);
    });
    //users data
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authData.token}`,
      },
    }).then((res)=>{
      // console.log(res);
      setUserCount(res.data.users.length)
    }).catch((error)=>{
      console.log(error);
    })

    //order data
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authData.token}`,
      },
    }).then((res)=>{
      // console.log(res);
      setOrderCount(res.data.orders.length)
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  return (
    <>
      <Box
        fontFamily={
          "Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }
        bg={"#088395"}
        maxW="7xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            title={"All Users"}
            stat={userCount} //MAPED USER NUMBER
            icon={<BsPerson size={"3em"} />}
            color={"green"}
            percent={"20.98%"}
          />
          <StatsCard
            title={"Total Products"}
            stat={menData + womenData} //MAPED TOTAL INVENTORY PRODUCTS NUMBER
            icon={<TfiShoppingCartFull size={"3em"} />}
            color={"red"}
            percent={"2.98%"}
            loss={"loss"}
          />
          <StatsCard
            title={"Total  Orders"}
            stat={orderCount} //MAPED TOTAL Users  NUMBER
            icon={<FiShoppingCart size={"3em"} />}
            color={"green"}
            percent={"23.98%"}
          />
        </SimpleGrid>
      </Box>
      <Flex
        w={"100%"}
        margin={"auto"}
        flexDirection={{ sm: "column", md: "row", lg: "row" }}
        justifyContent={"space-around"}
        bg={"#088395"}
      >
        <Chart />
      </Flex>
      <Box padding={"30px"} margin="auto" bg={"#088395"}>
        <LineChart />
      </Box>
    </>
  );
};
