import React, { useState } from 'react';
import './Container.css';
import { useNavigate } from "react-router-dom";

import imgHome1 from '../../src/section-home/img-home/img1.png';
import imgHome1Hover from '../../src/section-home/img-home/img1-1.png';
import imgHome2 from '../../src/section-home/img-home/img2.png';
import imgHome2Hover from '../../src/section-home/img-home/img2-2.png';
import imgHome3 from '../../src/section-home/img-home/img3.png';
import imgHome3Hover from '../../src/section-home/img-home/img3-3.png';
import imgHome4 from '../../src/section-home/img-home/img-4.png';
import imgHome4Hover from '../../src/section-home/img-home/img4-4.png';

const Card = ({ img, imgHover, title, price }) => {
  const [src, setSrc] = useState(img);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/produto", {
      state: { img, title, price }
    });
  };

  return (
    <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[20%]" onClick={handleClick}>
      <img
        className="w-full object-cover cursor-pointer"
        src={src}
        alt={title}
        onMouseEnter={() => setSrc(imgHover)}
        onMouseLeave={() => setSrc(img)}
      />
      <div className="p-2">
        <p>{title}</p>
        <p className='font-bold'>{price}</p>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[95dvh] container-cards px-4">
      <h2 className="w-full text-center products mb-12">novidades</h2>

      <div className="flex flex-wrap justify-center gap-3 w-full max-w-full">
        <Card  img={imgHome1} imgHover={imgHome1Hover} title="boné ugly people hate me" price="R$ 151,90"/>
        <Card img={imgHome2} imgHover={imgHome2Hover} title="body mademoiselle preto" price="R$ 359,90" />
        <Card img={imgHome3} imgHover={imgHome3Hover} title="vestido nightfall preto" price="R$ 359,90" />
        <Card img={imgHome4} imgHover={imgHome4Hover} title="vestido tule curto emma" price="R$ 359,90" />
      </div>

      <button className="btn">ver mais</button> 
    </div>
  );
};

export default Container;
