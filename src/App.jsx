import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Dropdown from './components/navbar/Dropdown';
import Container from './section-home/Container';
import Carousel from './section-home/Carousel'; 

import img1 from './carousel-img/img1.png';
import img2 from './carousel-img/img2.png';
import img3 from './carousel-img/img3.png';

const images = [img1, img2, img3];

function App() {
  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
        <Dropdown />
      </div>

      <div>
        <Carousel images={images} />
      </div>

      <div className="main-container">
        <Container />
      </div>
    </>
  );
}

export default App;
