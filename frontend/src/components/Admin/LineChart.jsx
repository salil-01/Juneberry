import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Revenue Generated in $k",
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [65, 59, 62, 70, 73],
      borderColor: "#4C3D3D",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const LineChart = () => {
  return (
    <Box bg={"#FEFAE0"} borderRadius={"5px"} width={{"sm":"100%","md":"100%","lg":"60%"}}  margin = "auto">
      <Line options={options} data={data} />
    </Box>
  );
};
