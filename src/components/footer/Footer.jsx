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
        <div className='flex justify-evenly items-center h-auto w-[70%] !pt-5 footer'>

            <div className='flex flex-col items-start justify-evenly h-auto gap-1'>
                <h3 className='!font-light'>nossas páginas</h3>
                <a className='hiperlink-footer' href="">home</a>
                <a className='hiperlink-footer' href="">minha conta</a>
                <a className='hiperlink-footer' href="">carrinho</a>
                <a className='hiperlink-footer' href="">meus likes</a>
            </div>


             <div className='flex flex-col items-start justify-evenly h-auto gap-1'>
                <h3 className='!font-light'>termos e suporte</h3>
                <a className='hiperlink-footer' href="">politicas e trocas</a>
                <a className='hiperlink-footer' href="">ajuda</a>
                <a className='hiperlink-footer' href="">trocar ou devolver peça</a>
                <a className='hiperlink-footer' href="">política de privacidade</a>
            </div>

            <div className='flex flex-col items-start justify-evenly h-auto gap-1'>
                <h3 className='!font-light'>entre em contato</h3>
                <a className='hiperlink-footer' href="">instagram</a>
                <a className='hiperlink-footer' href="">whatsapp</a>
                <a className='hiperlink-footer' href="">+55 19 99999-9999</a>
                <a className='hiperlink-footer' href="">+55 19 99999-9999</a>
            </div>

        </div>

        <div className='container-payment'>
            <p className='payments !font-light'>meios de pagamento</p>
                <img className='img-payment' src={imgs} alt="" />
        </div>

        <p className='copyright'>© 2025 SG Store. Todos os direitos reservados • Desenvolvido por <a className='us' href="https://www.linkedin.com/in/viniciusnora/" target='blank'>Vinícius Nora</a> e <a className='us' href="https://www.linkedin.com/in/enzo-miquelini/" target='blank'>Enzo Miquelini</a></p>
      
    </footer>
  );
};

export default Footer;
