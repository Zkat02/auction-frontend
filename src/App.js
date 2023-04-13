// npm i react-router-dom
// npm start


// import Navbar from "./components/navbar/Navbar.js";
// import Footer from "./components/footer/Footer.js";

import Home from "./pages/home/home.js";
import Auction from "./pages/auction/auction.js";
import Product from "./pages/product/product.js";
import ScrollToTop from "./utils/ScrollToTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages/auth/authentication.jsx";
import { CreateAuction } from "./pages/create_auction/create_auction.jsx";
import ContactUs from "./pages/contact_us/contact_us.js";
import Account from "./pages/account/account.js";



function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/create_auction" element={<CreateAuction />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
