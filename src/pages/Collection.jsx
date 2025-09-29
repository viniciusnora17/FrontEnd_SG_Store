import React from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import imgCollection from '/img-collection.png'
import './Collection.css'

function SobreNos() {
  return (
    <>
      <Navbar />
        <div>
            <img src={imgCollection} alt="" className="img-collection" />
        </div>
      <Footer />
    </>
  );
}

export default SobreNos;
