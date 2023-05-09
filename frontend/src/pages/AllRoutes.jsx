import { Route, Routes, useLocation } from "react-router-dom";
import { AddProduct } from "../components/Admin/AddProduct";
import { AllProducts } from "../components/Admin/AllProducts";
import { Dashboard } from "../components/Admin/Dashboard";
import { EditProduct } from "../components/Admin/EditProduct";
import { AllOrders } from "../components/Admin/Orders";
import Sidebar from "../components/Admin/Sidebar";
import { Users } from "../components/Admin/Users";
import AdminPage from "./AdminPage";
import { Bag } from "./Bag";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { NotFound } from "./NotFound";
import { ProductPage } from "./ProductPage";
import { Signup } from "./Signup";
import { SingleProductPage } from "./SingleProduct";
import { UserOrder } from "./UserOrder";
import { ShoesPage } from "./ShoesPage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UserPrivateRoute } from "../components/UserPrivateRoute";
import { AdminPrivateRoute } from "../components/AdminPrivateRoute";

export const AllRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Routes>
      {/* user section */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Homepage />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />
      <Route
        path="/products/dress"
        element={
          <>
            <Navbar />
            <ProductPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/products/shoes"
        element={
          <>
            <Navbar />
            <ShoesPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/:category/:id"
        element={
          <>
            <Navbar />
            <SingleProductPage />
            <Footer />
          </>
        }
      />
      
      <Route
        path="/bag"
        element={
          <UserPrivateRoute>
            <>
              <Navbar />
              <Bag />
              <Footer />
            </>
          </UserPrivateRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <UserPrivateRoute>
            <>
              <Navbar />
              <UserOrder />
              <Footer />
            </>
          </UserPrivateRoute>
        }
      />

      {/* admin section */}
      <Route path="/admin" element={<AdminPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <Dashboard />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <AllProducts />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/:category/edit/:id"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <EditProduct />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/products/add"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <AddProduct />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <Users />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <AdminPrivateRoute>
            <Sidebar>
              <AllOrders />
            </Sidebar>
          </AdminPrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
