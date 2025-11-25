import React, { useState } from 'react';
import './Navbar.css';
import sgLogo from '../../assets/sg-logo.jpg';
import Bag from '../../icons/shopping-bag.png';
import User from '../../icons/people.png';
import Heart from '../../icons/heart.png';
import MenuIcon from '../../icons/burger.png'; 
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);   

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);   

  return (
    <>
      <div className='navbar'>
        
        {/* HAMBURGUER (apenas no mobile) */}
        <img 
          src={MenuIcon} 
          alt="Menu" 
          className="menu-icon" 
          onClick={toggleMenu}
        />

        {/* MENU NORMAL (desktop) */}
        <div className='user-area'>
          <Link to="/coleções" className='hiperlink'>Coleções</Link>
          <Link to="/roupas" className='hiperlink'>Roupas</Link>
          <Link to="/acessorios" className='hiperlink'>Acessórios</Link>
          <Link to="/sobre-nos" className='hiperlink'>Sobre nós</Link>
        </div>

        <Link to="/">
          <img src={sgLogo} alt="SG Logo" className='logo cursor-pointer w-[110px] max-[425px]:w-[100px]'/>
        </Link>

        <div className='navbar-links'>
          <img className='cursor-pointer' onClick={() => navigate("/liked")} src={Heart} alt="Heart" />
          <img className='cursor-pointer' onClick={toggleCart} src={Bag} alt="Carrinho de Compras" />
          <Link to="/login">
            <img className='cursor-pointer' src={User} alt="Login" />
          </Link>
        </div>
      </div>

      {/* Drawer do MENU HAMBÚRGUER */}
      <div className={`menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleMenu}>×</button>
        </div>

        <div className="menu-content">
          <Link to="/coleções" onClick={toggleMenu}>Coleções</Link>
          <Link to="/roupas" onClick={toggleMenu}>Roupas</Link>
          <Link to="/acessorios" onClick={toggleMenu}>Acessórios</Link>
          <Link to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link>
        </div>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Drawer do CARRINHO */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Carrinho</h2>
          <button className="close-btn" onClick={toggleCart}>×</button>
        </div>
        <div className="cart-content">
          <p>Seu carrinho de compras está vazio 😢</p>
        </div>
      </div>

      {isCartOpen && <div className="overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default Navbar;
