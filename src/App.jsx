import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SobreNos from "./pages/Sobrenos";
import ProductPage from "./pages/ProductPage";
import Categoria from "./pages/Categoria";
import Login from "./pages/Login";
import Gostei from "./pages/Gostei";
import Sacola from "./pages/Bag";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/produto" element={<ProductPage />} />
        <Route path="/categoria/:slug" element={<Categoria />} />
        <Route path="/liked" element={<Gostei/>}/>

        <Route path="/login" element={<Login />} />
       <Route path="/sacola" element={<Sacola />} />


      </Routes>
    </Router>
  );
}

export default App;
