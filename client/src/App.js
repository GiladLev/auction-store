import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import AllAuction from "./pages/AllAuction";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  // const user =JSON.parse(localStorage.getItem('user'))?.username

  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myauction" element={<AllAuction />} />
      </Routes>
    </Router>
  );
}

export default App;
