import React from 'react';
import styled from 'styled-components';
import './Destaques.css'

const Card = () => {
  return (
    <StyledWrapper className='flex items-center justify-center h-[60dvh] bg-[#F4F4F4] gap-10 container-destaques'>
      <div className="card overflow-hidden">
        <img className='h-auto' src="https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a22314-ogxys3oyrt0/pv/cd/74/59/15f8d91e7d5fcd6e797344a758/vestido-coastal-off-white-mundo-lolita-large-2.jpg" alt="" />
      </div>

       <div className="card overflow-hidden">
        <img src="https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-700,h-1050,fo-custom,e-sharpen,pr-true,pr-true,q-88/a22314-ogxys3oyrt0/pv/2f/30/c1/4dddcaf45e0bc39b49bb39c13a/bone-vermelho-latinas-do-it-better-mundo-lolita-2.jpg" alt="" />
        </div>

       <div className="card overflow-hidden">
        <img src="https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-700,h-1050,fo-custom,e-sharpen,pr-true,pr-true,q-88/a22314-ogxys3oyrt0/pv/84/1c/f3/d8569f013de6489929fa6f45e0/vestido-fenda-off-white-amuleto-mundo-lolita-2.jpg" alt="" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    width: 26%;
    height: 55dvh;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    
    backdrop-filter: blur(6px);
    
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .card:hover {
    border: 3px solid #92A590;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }`;

export default Card;
