import React from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './Sobrenos.css'

function SobreNos() {
  return (
    <>
      <Navbar />
     

      <div className="!p-10">
        <h1 className="text-3xl about-us">sobre nós</h1>
        <p className="!mt-4 text-lg">
          Aqui você pode contar a história da empresa, missão, valores, etc.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SobreNos;
