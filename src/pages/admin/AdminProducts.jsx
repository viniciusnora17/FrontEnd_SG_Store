import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./CartPage.css";

export default function AdminProducts() {
  

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      

      <Footer />
    </>
  );
}
