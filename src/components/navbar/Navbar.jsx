import React from 'react';
import './Navbar.css';
import sgLogo from '../../assets/sg-logo.jpg';
import shoppingCart from '../../icons/shopping-cart.png';
import magnifyingGlass from '../../icons/magnifying-glass.png';
import Bag from '../../icons/shopping-bag.png';
import User from '../../icons/people.png';
import Heart from '../../icons/heart.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className='navbar'>
      <div className='user-area'>
        <Link to="/coleções" className='hiperlink'>Coleções</Link>
        <Link to="/roupas" className='hiperlink'>Roupas</Link>
        <Link to="/acessorios" className='hiperlink'>Acessórios</Link>
        <Link to="/sobre-nos" className='hiperlink'>Sobre nós</Link>
      </div>

   
      <Link to="/">
        <img src={sgLogo} alt="SG Logo" className='logo cursor-pointer  w-[110px] max-[425px]:w-[100px]'/>
      </Link>

      <div className='navbar-links'>
        <img className='cursor-pointer' onClick={() => navigate ("/liked")} src={Heart} alt="Heart" />
        <img className='cursor-pointer'  onClick={() => navigate ("/sacola")} src={Bag} alt="Carrinho de Compras" />
        {/* <img className='h-5.6 cursor-pointer' onClick={() => navigate("/liked")}  src={Heart} alt="Carrinho de Compras" /> */}
        <Link to="/login"> <img className='cursor-pointer' src={User} alt="Login" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
