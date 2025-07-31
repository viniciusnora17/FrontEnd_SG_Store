import React from 'react'
import './Navbar.css';
import sgLogo from '../../assets/sg-logo.jpg';
import iconUser from '../../icons/user.png'
import shoppingCart from '../../icons/shopping-cart.png'
import magnifyingGlass from '../../icons/magnifying-glass.png'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='user-area'>
        <div className='my-account'>
          <img src={iconUser} alt="User Ícone" /> minha conta
        </div>
        <div className='shop-cart'>
          <img src={shoppingCart} alt="Carrinho de Compras" />
        </div>
      </div>

      <img src={sgLogo} alt="SG Logo" className='logo'/>


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
