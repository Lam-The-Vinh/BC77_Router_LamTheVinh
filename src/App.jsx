import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductManagement from "./MasterPage/ProductManagement";
import CreateProduct from "./Page/CreateProduct";
import UpdateProduct from "./Page/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/product-management" replace />}
        />
        <Route path="product-management" element={<ProductManagement />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="update-product" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
