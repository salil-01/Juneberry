import { Route, Routes } from "react-router-dom";
import { Bag } from "./Bag";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { NotFound } from "./NotFound";
import { ProductPage } from "./ProductPage";
import { Signup } from "./Signup";
import { SingleProductPage } from "./SingleProduct";
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
      <Route path="/wishlist" element={<WishList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
