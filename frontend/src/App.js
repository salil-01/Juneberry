import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  console.log(auth);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
