import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Login } from "./pages/Login";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";

function App() {
  const auth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  // console.log(auth);
  return (
    <div className="App">
      <Flex justifyContent={"space-between"}>
        <Login text={"Login"} />
        <Signup text={"Signup"} />
        <Link to={"/signup"}>signup</Link>
        <Link to={"/products"}>products</Link>
        <Link to={`${"dress"}/${"64522cd8278fb6ceb2f28137"}`}>
          singleproduct
        </Link>
        {!auth ? <Login text={"Bag"} /> : <Link to={"/bag"}>bag</Link>}
        <Link to={"/wishlist"}>wishlist</Link>
        <Link to={"/admin/dashboard"}>Admin</Link>
        <Link to={"/orders"}>Orders</Link>
      </Flex>
      {/* <Navbar /> */}

      <AllRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
