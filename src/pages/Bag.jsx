import React from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './Bag.css'

function Bag() {
  const likes = [];
  return (
    <>
      <Navbar />
      

      <div className="h-[70dvh]">
          <h2 className="my-liked">sua sacola</h2>
          <div className="line"></div>

             {likes.length === 0 && (
          <p style={{
            textAlign: "center",
            color: "#777",
            fontSize: "22px",
            marginTop: "60px",
            fontWeight: "300",
          }}>
            sua sacola está vázia
          </p>
        )}
        <div className="flex items-center justify-center">
             <p style={{
            textAlign: "center",
            color: "#777",
            fontSize: "22px",
            fontWeight: "300",
          }}>
            não sabe oque escolher? de uma olhada nos nossos produtos :)
          </p>
        </div>
        
        <div className="flex items-center justify-center ">
          <button className="btn-bag">ver produtos</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bag;
