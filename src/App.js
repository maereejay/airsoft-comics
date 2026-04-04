import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import Navbar from "./components/NavBar/Navbar.jsx";
import PricingPage from "./pages/PricingPage.js"
import Footer from "./components/Footer/Footer.jsx"
import Aboutus from "./pages/Aboutus.js";
import BlogPage from "./pages/BlogPage.js";
import MessageSuccess from "./pages/messagesuccess.js";
// import AuthPage from "./pages/AuthPage.js";


export default function App(){
  return(
    <div className="App">
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/messagesuccess" element={<MessageSuccess/>} />

      </Routes>

        <Footer />
    </BrowserRouter>
    </div>

  );
}
