import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";

import Home from "./pages/home.js";
import Auction from "./pages/auction.js";
import Product from "./pages/product.js";
import ScrollToTop from "./utils/ScrollToTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from "./pages/filter.js";
import LoginPage from "./pages/login/login.js";
import RegistrationPage from "./pages/register/registration.js";
import { Login, Register } from "./pages/authentication.jsx";
import { CreateAuction } from "./pages/create_auction/create_auction.jsx";



function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/create_auction" element={<CreateAuction />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;

// npm i react-router-dom
// npm start
