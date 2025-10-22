import React from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './Sobrenos.css'


import WallImg from '../pages/img-Sobrenos/wall-sg-store.jpeg'

function SobreNos() {
  return (
    <>
      <div className="navbar-container-fixed">
          <Navbar />
          
        </div>
     

      <div className="! flex items-center justify-between">
        <div className="texts-aboutus">
          <h1 className=" about-us overflow-hidden">Sobre Nós</h1>
          <p className="!mt-4 text-lg text-aboutus">
           A SG Store é o resultado do sonho de duas amigas que decidiram transformar sua paixão por moda em um projeto cheio de personalidade e carinho.
Nossa loja nasceu em São João da Boa Vista (SP) com o propósito de oferecer muito mais do que roupas — queremos inspirar confiança, estilo e autenticidade em cada cliente que passa por aqui.

Cada coleção é escolhida com cuidado, sempre buscando unir tendência, conforto e qualidade. Acreditamos que se vestir é uma forma de expressar quem você é, e por isso, cada detalhe da SG Store foi pensado para que você se sinta bem, linda e confiante.
          </p>
        </div>
        <img className="w-135 img-aboutus" src={WallImg} alt="" />
      </div>
      <Footer />
    </>
  );
}

export default SobreNos;
