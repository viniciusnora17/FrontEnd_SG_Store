import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import './Acessories.css';

import imgHome11 from '../../src/section-home/img-home/img1.png';
import imgHome11Hover from '../../src/section-home/img-home/img1-1.png';
import imgHome02 from '../../src/section-home/img-acessories/img02.png';
import imgHome02Hover from '../../src/section-home/img-acessories/img02-02.png';
import imgHome03 from '../../src/section-home/img-acessories/img03.png';
import imgHome03Hover from '../../src/section-home/img-acessories/img03-03.png';
import imgHome04 from '../../src/section-home/img-acessories/img04.jpg';
import imgHome04Hover from '../../src/section-home/img-acessories/img04-04.png';
import imgHome05 from '../../src/section-home/img-acessories/img05.png';
import imgHome05Hover from '../../src/section-home/img-acessories/img05-05.png';
import imgHome06 from '../../src/section-home/img-acessories/img06.png';
import imgHome06Hover from '../../src/section-home/img-acessories/img06-06.png';
import imgHome07 from '../../src/section-home/img-acessories/img07.png';
import imgHome07Hover from '../../src/section-home/img-acessories/img07-07.png';
import imgHome08 from '../../src/section-home/img-acessories/img08.png'; 
import imgHome08Hover from '../../src/section-home/img-acessories/img08-08.jpg';

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
      state: { img, imgHover, title, price }
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
    { id: 1, img: imgHome11, imgHover: imgHome11Hover, title: "Boné Ugly People Hate Me", price: 151.90, category: "Bonés", size: "único" },
    { id: 2, img: imgHome02, imgHover: imgHome02Hover, title: "Boné Creme Montauk", price: 189.90, category: "Bonés", size: "único" },
    { id: 3, img: imgHome03, imgHover: imgHome03Hover, title: "Meia Cano Médio Teddy Bear", price: 89.90, category: "Meia", size: "único" },
    { id: 4, img: imgHome04, imgHover: imgHome04Hover, title: "Bolsa Western Caramelo", price: 559.90, category: "Bolsa", size: "único" },
    { id: 5, img: imgHome05, imgHover: imgHome05Hover, title: "Cinto Preto Yumi", price: 249.90, category: "Cinto", size: "único" },
    { id: 6, img: imgHome06, imgHover: imgHome06Hover, title: "Cinto Dallas Preto", price: 299.99, category: "Cinto", size: "único" },
    { id: 7, img: imgHome07, imgHover: imgHome07Hover, title: "Bolsa Luana Schedle", price: 459.90, category: "Bolsa", size: "único" },
    { id: 8, img: imgHome08, imgHover: imgHome08Hover, title: "Boné Bisous Burgundy", price: 189.90, category: "Bonés", size: "único" },
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
        <h2 className="text-clothes flex justify-center items-center">Acessórios</h2>
      </div>

      <div className='flex items-center justify-center gap-8 !pt-10 bg-[#F4F4F4]'>
  <button
    className="hiperlink-filter text-gray-500 hover:text-black transition-colors duration-300"
    onClick={() => setSelectedCategory("")}
  >
    Todos
  </button>
  {["Bonés", "Bolsa", "Cinto", "Meia"].map((cat) => (
    <button
      key={cat}
      className={`hiperlink-filter transition-colors duration-300 ${
        selectedCategory === cat
          ? "text-black font-medium"
          : "text-gray-500 hover:text-black"
      }`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat}
    </button>
  ))}

  {/* Botão para limpar filtro */}
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
