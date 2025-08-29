import React from 'react';
import './Navbar.css';
import sgLogo from '../../assets/sg-logo.jpg';
import shoppingCart from '../../icons/shopping-cart.png';
import magnifyingGlass from '../../icons/magnifying-glass.png';
import Bag from '../../icons/shopping-bag.png';
import Heart from '../../icons/heart.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='user-area'>
        <div className='my-account'>
           <Link to="/login">entrar</Link>
        </div>
        <div className='shop-cart cursor-pointer'>
          <img src={Bag} alt="Carrinho de Compras" />
          <img className='h-5.5'  onClick={() => navigate("/liked")}  src={Heart} alt="Carrinho de Compras" />
        </div>
      </div>

      {/* Logo clicável que vai para a Home */}
      <Link to="/">
        <img src={sgLogo} alt="SG Logo" className='logo cursor-pointer  w-[110px] max-[425px]:w-[100px]'/>
      </Link>

      <div className='navbar-links'>
        <div className='search-box'>
          <input type="text" placeholder='Buscar' />
          <img src={magnifyingGlass} alt="Lupa" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
