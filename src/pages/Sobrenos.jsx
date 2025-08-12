import React from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';

function SobreNos() {
  return (
    <>
      <Navbar />
      <Dropdown/>

      <div className="p-10">
        <h1 className="text-3xl font-bold">Sobre Nós</h1>
        <p className="mt-4 text-lg">
          Aqui você pode contar a história da empresa, missão, valores, etc.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SobreNos;
