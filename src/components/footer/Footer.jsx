import React from 'react'
import './Footer.css'
import imgLogo from '../../assets/sg-logo.jpg'
import visa from '../../payments-img/visabanner.jpg'
import pix from '../../payments-img/pixbanner.png'
import mastercard from '../../payments-img/mastercardbanner.jpg'
import imgs from '../../payments-img/imgs-payment.png'

const Footer = () => {
  return (
    <footer className="">
        <div className='flex justify-evenly items-center h-[20dvh] w-[70%]'>

            <div className='flex flex-col items-center justify-evenly h-[80%]'>
                <h3 className=''>nossas páginas</h3>
                <a className='hiperlink-footer' href="">home</a>
                <a className='hiperlink-footer' href="">minha conta</a>
                <a className='hiperlink-footer' href="">carrinho</a>
            </div>


             <div className='flex flex-col items-center justify-evenly h-[80%]'>
                <h3>termos e suporte</h3>
                <a className='hiperlink-footer' href="">politicas e trocas</a>
                <a className='hiperlink-footer' href="">ajuda</a>
                <a className='hiperlink-footer' href="">trocar ou devolver peça</a>
            </div>

            <div className='flex flex-col items-center justify-evenly h-[80%]'>
                <h3>entre em contato</h3>
                <a className='hiperlink-footer' href="">instagram</a>
                <a className='hiperlink-footer' href="">whatsapp</a>
                <a className='hiperlink-footer' href="">+55 19 99999-9999</a>
                <a className='hiperlink-footer' href="">+55 19 99999-9999</a>
            </div>

        </div>

        <div className='container-payment'>
            <p className='payments'>Meios de pagamento</p>
                <img className='img-payment' src={imgs} alt="" />
        </div>

        <p className='copyright'>© 2025 SG Store. Todos os direitos reservados • Desenvolvido por <a className='us' href="https://www.linkedin.com/in/viniciusnora/" target='blank'>Vinícius Nora</a> e <a className='us' href="https://www.linkedin.com/in/enzo-miquelini/" target='blank'>Enzo Miquelini</a></p>
      
    </footer>
  );
};

export default Footer;
