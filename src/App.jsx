import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SobreNos from "./pages/Sobrenos";
import ProductPage from "./pages/ProductPage";
import Categoria from "./pages/Categoria";
import Login from "./pages/Login";
import Gostei from "./pages/Gostei";
import Sacola from "./pages/Bag";
import Clothes from "./pages/Clothes";
import Collection from "./pages/Collection";
import Acessories from "./pages/Acessories";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/produto" element={<ProductPage />} />
        <Route path="/categoria/:slug" element={<Categoria />} />
        <Route path="/liked" element={<Gostei />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sacola" element={<Sacola />} />
        <Route path="/roupas" element={<Clothes />} />
        <Route path="/acessorios" element={<Acessories />} />
        <Route path="/coleções" element={<Collection />} />

        {/* Rota do painel admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
