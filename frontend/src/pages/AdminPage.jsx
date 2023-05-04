import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Admin/Sidebar";
const AdminPage = () => {
  const [showPage, setShowPage] = useState("dashboard");
  return (
    <>
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box
          //   border={"1px solid"}
          width={["40%", "40%", "30%", "18%"]}
          h="100vh"
          position={"fixed"}
        >
          <Sidebar setShowPage={setShowPage} />
        </Box>
        <Box
          //   border={"1px solid"}
          width={["55%", "55%", "60%", "75%"]}
          marginLeft={["50%", "45%", "20%"]}
          bg={"rgb(239,238,241)"}
        >
        </Box>
      </Flex>
    </>
  );
};
export default AdminPage;