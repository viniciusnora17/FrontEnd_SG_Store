import Navbar from '../components/navbar/Navbar';

import Container from '../section-home/Container';
import Carousel from '../section-home/Carousel';
import Footer from '../components/footer/Footer';
import Destaques from '../section-home/Destaques';
import DiscountForm from '../components/DiscountForm';

import img1 from '../carousel-img/img1.png';
import img2 from '../carousel-img/img2.png';
import img3 from '../carousel-img/img3.png';

  const images = [img1, img2, img3];

  function Home() {
    return (
      <>
        <div className="navbar-container-fixed">
          <Navbar />
          
        </div>

        <div>
          <Carousel images={images} />
        </div>

        <div className="main-container">
          <Container />
        </div>
        <Destaques/>

        <div>
          <DiscountForm />
        </div>

        <Footer/>
      </>
    );
  }

  export default Home;
