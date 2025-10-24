
import './Footer.css'
import imgLogo from '../../assets/sg-logo.jpg'
import Visa from '../../payments-img/visa.png'
import MasterCard from '../../payments-img/mastercard.png'
import Elo from '../../payments-img/elo.png'
import { SiPix } from "react-icons/si";


import React, { useState } from 'react'

const Footer = () => {

     const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer>
      <div className="flex justify-evenly items-center h-auto w-[70%] !pt-5 footer footer-container">

      
        <div className="footer-section">
          <h3 
            className="!font-light footer-title"
            onClick={() => toggleSection("paginas")}
          >
            Nossas Páginas
          </h3>
          <div className={`footer-links ${openSection === "paginas" ? "open" : ""}`}>
            <a className="hiperlink-footer" href="/">Home</a>
            <a className="hiperlink-footer" href="">Minha conta</a>
            <a className="hiperlink-footer" href="">Sacola</a>
            <a className="hiperlink-footer" href="/liked">Meus likes</a>
          </div>
        </div>

       
        <div className="footer-section">
          <h3 
            className="!font-light footer-title"
            onClick={() => toggleSection("termos")}
          >
            Termos e Suporte
          </h3>
          <div className={`footer-links ${openSection === "termos" ? "open" : ""}`}>
            <a className="hiperlink-footer" href="">Politicas e Trocas</a>
            <a className="hiperlink-footer" href="">Ajuda</a>
            <a className="hiperlink-footer" href="">Trocar ou Devolver Peça</a>
            <a className="hiperlink-footer" href="">Política de Privacidade</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 
            className="!font-light footer-title"
            onClick={() => toggleSection("contato")}
          >
            Entre em Contato
          </h3>
          <div className={`footer-links ${openSection === "contato" ? "open" : ""}`}>
            <a className="hiperlink-footer" href="https://www.instagram.com/use.sg.store/" target="_blank">Instagram</a>
            <a className="hiperlink-footer" href="">Whatsapp</a>
            <a className="hiperlink-footer" href="">+55 19 99999-9999</a>
            <a className="hiperlink-footer" href="">+55 19 99999-9999</a>
          </div>
        </div>
      </div>

      <div className="container-payment !mt-6 !mb-5">
        <p className="payments !font-light">Meios de Pagamento</p>
            <div className='flex items-center gap-2 !ml-3'>
                <img src={Visa} alt="Visa Pagamento" />
                <img src={MasterCard} alt="Mastercard Pagamento" />
                <SiPix size={20} color="#00B2A9" alt="Pix pagamento"/>
                <img src={Elo} alt='Elo pagamento' className='w-5'/>
            </div>
      </div>

      <p className="copyright">
        © 2025 SG Store. Todos os direitos reservados • Desenvolvido por 
        <a className="us" href="https://www.linkedin.com/in/viniciusnora/" target="blank"> Vinícius Nora</a> e 
        <a className="us" href="https://www.linkedin.com/in/enzo-miquelini/" target="blank"> Enzo Miquelini</a>
      </p>
    </footer>
  );
};

export default Footer;
