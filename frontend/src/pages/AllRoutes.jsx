import { Route, Routes } from "react-router-dom";
import { AddProduct } from "../components/Admin/AddProduct";
import { AllProducts } from "../components/Admin/AllProducts";
import { Dashboard } from "../components/Admin/Dashboard";
import { EditProduct } from "../components/Admin/EditProduct";
import { AllOrders } from "../components/Admin/Orders";
import Sidebar from "../components/Admin/Sidebar";
import { Users } from "../components/Admin/Users";
import { UserPrivateRoute } from "../components/UserPrivateRoute";
import AdminPage from "./AdminPage";
import { Bag } from "./Bag";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { NotFound } from "./NotFound";
import { ProductPage } from "./ProductPage";
import { Signup } from "./Signup";
import { SingleProductPage } from "./SingleProduct";
import { UserOrder } from "./UserOrder";
import { WishList } from "./WishList";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/products" element={<ProductPage />} />
      <Route path="/singleproduct/:id" element={<SingleProductPage />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/orders" element={<UserOrder />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
      <Route
        path="/admin/products"
        element={
          <Sidebar>
            <AllProducts />
          </Sidebar>
        }
      />
      <Route
        path="/admin/:category/edit/:id"
        element={
          <Sidebar>
            <EditProduct />
          </Sidebar>
        }
      />
      <Route
        path="/admin/products/add"
        element={
          <Sidebar>
            <AddProduct />
          </Sidebar>
        }
      />
      <Route
        path="/admin/users"
        element={
          <Sidebar>
            <Users />
          </Sidebar>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <Sidebar>
            <AllOrders />
          </Sidebar>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
