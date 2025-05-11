import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/homes/Home";
import Creater from "./pages/creater/Creater";
import Templates from "./pages/templatess/Templates";
import About_site from "./pages/about/About_site";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creater" element={<Creater />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/about" element={<About_site />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
