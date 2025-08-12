import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SobreNos from "./pages/Sobrenos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}

export default App;
