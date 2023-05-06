import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

const getData = async (url) => {
  return await axios
    .get(url)
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
};

export const Chart = () => {
  const [menData, setMenData] = useState(0);
  const [womenData, setWomenData] = useState(0);
  const [pending, setPending] = useState(0);
  const [delivered, setDelieverd] = useState(0);
  const authData = useSelector((store) => {
    return store.authReducer;
  });
  // console.log(adminData);
  useEffect(() => {
    //dress data
    getData(`${process.env.REACT_APP_BACKEND_URL}/dress`).then((res) => {
      setMenData(res.data.msg.length);
    });
    //shoes data
    getData(`${process.env.REACT_APP_BACKEND_URL}/shoes`).then((res) => {
      setWomenData(res.data.msg.length);
    });

    //orders data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/order`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        // setOrderCount(res.data.orders.length);
        let pendingCount = 0;
        let deleiverdCount = 0;
        res?.data?.orders?.map((item) => {
          if (item.status === "pending") {
            pendingCount++;
          } else {
            deleiverdCount++;
          }
        });
        setPending(pendingCount);
        setDelieverd(deleiverdCount);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(getOrders(adminData.token)).then(() => {});
  }, []);

  const data = {
    datasets: [
      {
        data: [menData, womenData],
        backgroundColor: ["#3A4F7A", "teal"],
      },
    ],
    labels: ["Dress", "Shoes"],
  };
  const orderData = {
    datasets: [
      {
        data: [pending, delivered],
        backgroundColor: ["#AEEA00", "green"],
      },
    ],
    labels: ["Pending", "Delivered"],
  };

  return (
    <>
      <Box
        width={{ sm: "90%", md: "80%", lg: "50%" }}
        margin={"20px auto"}
        p={3}
      >
        <Box>
          <Text fontSize="xl" color={"white"} mb={"10px"}>
            Products Statistics{" "}
          </Text>
        </Box>
        <Box
          p={"15px"}
          width={"50%"}
          margin={"auto"}
          boxShadow={"base"}
          borderRadius={"5px"}
          backgroundColor={"#FEFAE0"}
        >
          <Doughnut data={data} />
        </Box>
      </Box>
      <Box
        width={{ sm: "90%", md: "80%", lg: "50%" }}
        margin={"20px auto"}
        p={3}
      >
        <Box>
          <Text fontSize="xl" color={"white"} mb={"10px"}>
            Orders Statistics
          </Text>
        </Box>
        <Box
          p={"15px"}
          width={"50%"}
          margin={"auto"}
          boxShadow={"base"}
          borderRadius={"5px"}
          backgroundColor={"#FEFAE0"}
        >
          <Doughnut data={orderData} />
        </Box>
      </Box>
    </>
  );
};
