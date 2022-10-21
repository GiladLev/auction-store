import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import AllAuction from "./pages/AllAuction";
import { useSelector } from "react-redux";
import AddAuction from "./pages/AddAuction";

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
        <Route path="/addauction" element={<AddAuction />} />
      </Routes>
    </Router>
  );
}

export default App;
