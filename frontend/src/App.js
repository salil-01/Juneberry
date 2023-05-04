import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Flex justifyContent={"space-between"}>
        <Link to={"/login"}>login</Link>
        <Link to={"/signup"}>signup</Link>
        <Link to={"/products"}>products</Link>
        <Link to={`singleproduct/${1}`}>singleproduct</Link>
        <Link to={"/bag"}>bag</Link>
        <Link to={"/wishlist"}>wishlist</Link>
      </Flex>
      <Navbar />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
