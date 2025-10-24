import React from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './Gostei.css'

function SobreNos() {
  const likes = [];
  return (
    <>
      <Navbar />
      

      <div className="h-[70dvh]">
          <h2 className="my-liked">meus likes</h2>
          <div className="line"></div>

             {likes.length === 0 && (
          <p style={{
            textAlign: "center",
            color: "#777",
            fontSize: "22px",
            marginTop: "60px",
            fontWeight: "300",
          }}>
            Nenhum item foi adicionado aos seus likes.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SobreNos;
