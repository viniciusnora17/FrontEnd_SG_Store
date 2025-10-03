import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import './Clothes.css';


import imgHome11 from '../../src/section-home/img-home/img11.png';
import imgHome11Hover from '../../src/section-home/img-home/img11-11.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome2Hover from '../../src/section-home/img-home/img2-2.png';
import imgHome9 from '../../src/section-home/img-home/img9.png';
import imgHome9Hover from '../../src/section-home/img-home/img9-9.png';
import imgHome10 from '../../src/section-home/img-home/img10.png';
import imgHome10Hover from '../../src/section-home/img-home/img10-10.png';
import imgHome5 from '../../src/section-home/img-home/img5.png';
import imgHome5Hover from '../../src/section-home/img-home/img5-5.png';
import imgHome6 from '../../src/section-home/img-home/img6.png';
import imgHome6Hover from '../../src/section-home/img-home/img6-6.png';
import imgHome7 from '../../src/section-home/img-home/img7.png';
import imgHome7Hover from '../../src/section-home/img-home/img7-7.png';
import imgHome8 from '../../src/section-home/img-home/img8.png'; 
import imgHome8Hover from '../../src/section-home/img-home/img8-8.jpg';

import imgHome12 from '../../src/section-home/img-home/img12.png'; 
import imgHome12Hover from '../../src/section-home/img-home/img12-12.png';

import imgHome13 from '../../src/section-home/img-home/img13.png'; 
import imgHome13Hover from '../../src/section-home/img-home/img13-13.png';

import imgHome14 from '../../src/section-home/img-home/img14.png'; 
import imgHome14Hover from '../../src/section-home/img-home/img14-14.png';

import imgHome15 from '../../src/section-home/img-home/img15.jpg'; 
import imgHome15Hover from '../../src/section-home/img-home/img15-15.jpg';

import heartIcon from '../../src/icons/black-heart.png'; 
import heartIconFill from '../../src/icons/black-heart-fill.png';


// ------------------- CARD -------------------
const Card = ({ img, imgHover, title, price }) => {
  const [src, setSrc] = useState(img);
  const [hovered, setHovered] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();


  const priceNumber = parseFloat(price.replace("R$", "").replace(",", "."));
  const installmentValue = priceNumber / 4;

  const handleClick = () => {
    navigate("/produto", {
      state: { img, title, price }
    });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorited(prev => !prev);
  };

  return (
    <div 
      className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%] relative container-card"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img
          className="w-full object-cover cursor-pointer transition-all duration-300 ease-in-out"
          src={src}
          alt={title}
          onMouseEnter={() => setSrc(imgHover)}
          onMouseLeave={() => setSrc(img)}
        />

        {(hovered || favorited) && (
          <button 
            className="absolute top-3 right-3 bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
            onClick={handleFavoriteClick}
          >
            <img 
              src={favorited ? heartIconFill : heartIcon} 
              alt="favorito" 
              className="w-6 h-6 transition-all duration-300 ease-in-out transform" 
            />
          </button>
        )}
      </div>

      <div className="p-2">
        <p>{title}</p>
        <p>{price}</p>
        <p className="text-sm text-black-600">
          4x de R$ <b>{installmentValue.toFixed(2).replace(".", ",")}</b> sem juros
        </p>
      </div>
    </div>
  );
};


// ------------------- CONTAINER -------------------
const Container = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // LISTA DE PRODUTOS
  const products = [
    { id: 1, img: imgHome11, imgHover: imgHome11Hover, title: "camiseta long time lovers", price: 151.90, category: "camisetas", size: "M" },
    { id: 2, img: imgHome2, imgHover: imgHome2Hover, title: "body mademoiselle preto", price: 359.90, category: "body", size: "P" },
    { id: 3, img: imgHome9, imgHover: imgHome9Hover, title: "cropped whiteoff", price: 359.90, category: "cropped", size: "M" },
    { id: 4, img: imgHome10, imgHover: imgHome10Hover, title: "short curto savannah", price: 329.90, category: "shorts", size: "G" },
    { id: 5, img: imgHome5, imgHover: imgHome5Hover, title: "calça my yellow house", price: 249.90, category: "calças", size: "M" },
    { id: 6, img: imgHome6, imgHover: imgHome6Hover, title: "calça mademoiselle preta", price: 409.90, category: "calças", size: "G" },
    { id: 7, img: imgHome7, imgHover: imgHome7Hover, title: "saia brown schedle", price: 129.90, category: "saias", size: "P" },
    { id: 8, img: imgHome8, imgHover: imgHome8Hover, title: "tricô brighter", price: 189.90, category: "tricôs", size: "GG" },
    { id: 9, img: imgHome12, imgHover: imgHome12Hover, title: "camiseta cat mom social", price: 189.90, category: "camisetas", size: "GG" },
    { id: 10, img: imgHome13, imgHover: imgHome13Hover, title: "shorts tricô sunny", price: 259.90, category: "tricôs", size: "GG" },
    { id: 11, img: imgHome14, imgHover: imgHome14Hover, title: "short grayday", price: 139.90, category: "shorts", size: "GG" },
    { id: 12, img: imgHome15, imgHover: imgHome15Hover, title: "calça alfaiataria urban", price: 320.00, category: "calças", size: "GG" },
  ];

  // FILTRAGEM
  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;

    const matchPrice = (() => {
      if (!selectedPrice) return true;
      if (selectedPrice === "0-100") return product.price <= 100;
      if (selectedPrice === "100-200") return product.price > 100 && product.price <= 200;
      if (selectedPrice === "200-400") return product.price > 200 && product.price <= 400;
      if (selectedPrice === "400+") return product.price > 400;
      return true;
    })();

    const matchSize = selectedSize ? product.size === selectedSize : true;

    return matchCategory && matchPrice && matchSize;
  });

  return (
    <>
      <Navbar/>

      <div className='bg-[#F4F4F4]'>
        <h2 className="text-clothes flex justify-center items-center">roupas</h2>
      </div>

      {/* FILTROS */}
       <div className='flex items-center justify-center gap-8 !pt-10 bg-[#F4F4F4]'>
          {["camisetas", "tricôs", "calças", "bodys", "saias", "cropped", "shorts"].map((cat) => (
            <button
              key={cat}
              className={`hiperlink-filter ${
                selectedCategory === cat ? "text-black font-medium" : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-9 w-full max-w-full !pt-10 !pb-12 cursor-pointer bg-[#F4F4F4]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Card 
              key={p.id}
              img={p.img} 
              imgHover={p.imgHover} 
              title={p.title} 
              price={`R$ ${p.price.toFixed(2)}`}
            />
          ))
        ) : (
          <div className='h-[36.3dvh] flex justify-center items-center'>
            <p className="text-gray-500 text-3xl font-light">Nenhum produto encontrado</p>
          </div>  
        )}
      </div>

      <Footer/>
    </>
  );
};
export default Container;
