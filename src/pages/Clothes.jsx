import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import './Clothes.css'


import imgHome1 from '../../src/section-home/img-home/img1.png';
import imgHome1Hover from '../../src/section-home/img-home/img1-1.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome2Hover from '../../src/section-home/img-home/img2-2.png';
import imgHome3 from '../../src/section-home/img-home/img3.png';
import imgHome3Hover from '../../src/section-home/img-home/img3-3.png';
import imgHome4 from '../../src/section-home/img-home/img-4.png';
import imgHome4Hover from '../../src/section-home/img-home/img4-4.png';

import heartIcon from '../../src/icons/black-heart.png'; 
import heartIconFill from '../../src/icons/black-heart-fill.png';

const Card = ({ img, imgHover, title, price }) => {
  const [src, setSrc] = useState(img);
  const [hovered, setHovered] = useState(false);
  const [favorited, setFavorited] = useState(false); // Novo estado
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/produto", {
      state: { img, title, price }
    });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Impede navegação
    setFavorited(prev => !prev);
    console.log(`${title} ${!favorited ? 'adicionado aos' : 'removido dos'} favoritos!`);
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
        <p className=''>{price}</p>
      </div>
    </div>
  );
};


const Container = () => {
  return (
    <>
    <Navbar/>

    <div className='bg-[#F4F4F4] '>
        <h2 className="text-clothes">roupas</h2>
        <div className="line"></div>
    </div>

    <div className='flex items-center justify-center gap-15  !pt-10 bg-[#F4F4F4]'>
        <button className='btn-clothes'>camisetas</button>
        <button className='btn-clothes'>cropped</button>
        <button className='btn-clothes'>shorts</button>
        <button className='btn-clothes'>calças</button>
        <button className='btn-clothes'>blusas</button>
        <button className='btn-clothes'>tricôs</button>
        <button className='btn-clothes'>t-shirts</button>
    </div>

    <div className="flex flex-col justify-center items-center h-auto !pt-14 !pb-14 container-cards px-4">

      <div className="flex flex-wrap justify-center gap-3 w-full max-w-full">
        <Card img={imgHome1} imgHover={imgHome1Hover} title="boné ugly people hate me" price="R$ 151,90"/>
        <Card img={imgHome2} imgHover={imgHome2Hover} title="body mademoiselle preto" price="R$ 359,90" />
        <Card img={imgHome3} imgHover={imgHome3Hover} title="vestido nightfall preto" price="R$ 359,90" />
        <Card img={imgHome4} imgHover={imgHome4Hover} title="vestido tule curto emma" price="R$ 359,90" />
      </div>

       <div className="flex flex-wrap justify-center gap-3 w-full max-w-full !mt-18">
        <Card img={imgHome1} imgHover={imgHome1Hover} title="boné ugly people hate me" price="R$ 151,90"/>
        <Card img={imgHome2} imgHover={imgHome2Hover} title="body mademoiselle preto" price="R$ 359,90" />
        <Card img={imgHome3} imgHover={imgHome3Hover} title="vestido nightfall preto" price="R$ 359,90" />
        <Card img={imgHome4} imgHover={imgHome4Hover} title="vestido tule curto emma" price="R$ 359,90" />
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Container;
