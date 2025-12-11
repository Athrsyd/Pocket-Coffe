import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import BFY from "./Components/BFY/BFY.jsx";
import Product from "./Components/Product/Product.jsx";
import { AboutUs } from "./Components/AboutUs/AboutUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Testimoni from "./Components/Testimoni/Testimoni.jsx";
import HowToBuy from "./Components/HowToBuy/HowToBuy.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <App />
              <AboutUs />
              <BFY />
              <HowToBuy />
              <Testimoni />
              <Footer />
            </>
          }
        />
        <Route path="/product" element={
          <>
            <Product />
            <Footer />
          </>
      } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
