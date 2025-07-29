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
        <img src={iconUser} alt="User Ícone" />
        <img src={shoppingCart} alt="Carrinho de Compras" />
      </div>

      <img src={sgLogo} alt="SG Logo" className='logo'/>

      <div className='navbar-links'>
        <div className='search-box'>
          <input type="text" placeholder='Buscar' />
          <img src={magnifyingGlass} alt="Lupa" />
        </div>
      </div>

      {/* Dropdown de Categorias */}
      <div className="dropdown">
        <span className="dropdown-title">Categorias</span>
        <div className="dropdown-content">
          <div>Body, croppeds & blusas</div>
          <div>Blusas básicas</div>
          <div>Calças, shorts & saias</div>
          <div>Kimonos</div>
          <div>Vestidos & macacões</div>
          <div>Tricots & jaquetas</div>
          <div>T-Shirts</div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
