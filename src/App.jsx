import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import TreksPage from './pages/TrekPage';

// 👉 import your ChatBot
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/treks" element={<TreksPage />} />
      </Routes>
      <Footer />

      {/* 👉 Mount the chatbot globally */}
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
