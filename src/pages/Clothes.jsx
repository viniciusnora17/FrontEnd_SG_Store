import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import './Clothes.css';


import imgHome1 from '../../src/section-home/img-home/img1.png';
import imgHome1Hover from '../../src/section-home/img-home/img1-1.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome2Hover from '../../src/section-home/img-home/img2-2.png';
import imgHome3 from '../../src/section-home/img-home/img3.png';
import imgHome3Hover from '../../src/section-home/img-home/img3-3.png';
import imgHome4 from '../../src/section-home/img-home/img4.png';
import imgHome4Hover from '../../src/section-home/img-home/img4-4.png';
import imgHome5 from '../../src/section-home/img-home/img5.png';
import imgHome5Hover from '../../src/section-home/img-home/img5-5.png';
import imgHome6 from '../../src/section-home/img-home/img6.png';
import imgHome6Hover from '../../src/section-home/img-home/img6-6.png';
import imgHome7 from '../../src/section-home/img-home/img7.png';
import imgHome7Hover from '../../src/section-home/img-home/img7-7.png';
import imgHome8 from '../../src/section-home/img-home/img8.png';         // CORREÇÃO: era imgHom8
import imgHome8Hover from '../../src/section-home/img-home/img8-8.jpg';

import heartIcon from '../../src/icons/black-heart.png'; 
import heartIconFill from '../../src/icons/black-heart-fill.png';


// ------------------- CARD -------------------
const Card = ({ img, imgHover, title, price }) => {
  const [src, setSrc] = useState(img);
  const [hovered, setHovered] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();

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
    { id: 1, img: imgHome1, imgHover: imgHome1Hover, title: "boné ugly people hate me", price: 151.90, category: "acessórios", size: "M" },
    { id: 2, img: imgHome2, imgHover: imgHome2Hover, title: "body mademoiselle preto", price: 359.90, category: "body", size: "P" },
    { id: 3, img: imgHome3, imgHover: imgHome3Hover, title: "vestido nightfall preto", price: 359.90, category: "vestidos", size: "M" },
    { id: 4, img: imgHome4, imgHover: imgHome4Hover, title: "vestido tule curto emma", price: 329.90, category: "vestidos", size: "G" },
    { id: 5, img: imgHome5, imgHover: imgHome5Hover, title: "calça my yellow house", price: 249.90, category: "calças", size: "M" },
    { id: 6, img: imgHome6, imgHover: imgHome6Hover, title: "calça mademoiselle preta", price: 409.90, category: "calças", size: "G" },
    { id: 7, img: imgHome7, imgHover: imgHome7Hover, title: "saia brown schedle", price: 129.90, category: "saias", size: "P" },
    { id: 8, img: imgHome8, imgHover: imgHome8Hover, title: "tricô brighter", price: 189.90, category: "tricôs", size: "GG" },
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
        <h2 className="text-clothes">roupas</h2>
      </div>

      {/* FILTROS */}
      <div className='flex items-center gap-8 !pt-10 !pl-53 bg-[#F4F4F4]'>
        <div>
          <select
            className="btn-clothes cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">categorias</option>
            <option value="acessórios">acessórios</option>
            <option value="body">body</option>
            <option value="vestidos">vestidos</option>
            <option value="calças">calças</option>
            <option value="saias">saias</option>
            <option value="tricôs">tricôs</option>
          </select>
        </div>

        <div>
          <select
            className="btn-clothes cursor-pointer"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">preço</option>
            <option value="0-100">até R$100</option>
            <option value="100-200">R$100 - R$200</option>
            <option value="200-400">R$200 - R$400</option>
            <option value="400+">acima de R$400</option>
          </select>
        </div>

        <div>
          <select
            className="btn-clothes cursor-pointer"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">tamanho</option>
            <option value="P">p</option>
            <option value="M">m</option>
            <option value="G">g</option>
            <option value="GG">gg</option>
          </select>
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-9 w-full max-w-full !pt-10 !pb-12 bg-[#F4F4F4]">
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
          <p className="text-gray-500">Nenhum produto encontrado</p>
        )}
      </div>

      <Footer/>
    </>
  );
};
export default Container;
