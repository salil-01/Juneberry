import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Login } from "./pages/Login";

function App() {
  const auth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  console.log(auth);
  return (
    <div className="App">
      <Flex justifyContent={"space-between"}>
        <Link to={"/login"}>login</Link>
        <Link to={"/signup"}>signup</Link>
        <Link to={"/products"}>products</Link>
        <Link to={`singleproduct/${1}`}>singleproduct</Link>
        {!auth ? <Login text={"Bag"} /> : <Link to={"/bag"}>bag</Link>}
        <Link to={"/wishlist"}>wishlist</Link>
        <Link to={"/admin"} >Admin</Link>
      </Flex>
      <AllRoutes />
    </div>
  );
}

export default App;
