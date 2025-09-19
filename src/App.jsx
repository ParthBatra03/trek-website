import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // optional if you’ve made it
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Define your pages here */}
        {/* Example */}
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/about" element={<h1>About Trekking</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
