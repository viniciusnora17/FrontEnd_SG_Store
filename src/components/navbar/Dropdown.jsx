import React, { useState, useRef } from 'react';
import './Dropdown.css';
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timerRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <div className='container-pai-navbar'>
      <div className="logo-dropdown-container">
        {/* Roupas */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => handleMouseEnter('roupas')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown">
            <span className="dropdown-title">roupas</span>
            <div className={`dropdown-content ${openMenu === 'roupas' ? 'show' : ''}`}>
              <div className='hiperlinks'>
                <div> <Link to="/categoria/t-shirts">t-shirts</Link></div>
                <div><Link to="/categoria/blusas-basicas">blusas básicas</Link></div>
                <div><Link to="/categoria/tricots">tricots</Link></div>
                <div><Link to="/categoria/calcas">calças</Link></div>
                <div><Link to="/categoria/shorts-e-bermudas">shorts e bermudas</Link></div>
                <div><Link to="/categoria/cropped-e-blusas">cropped e blusas</Link></div>
              </div>
            </div>
          </div>
        </div>

        {/* Acessórios */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => handleMouseEnter('acessorios')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown">
            <span className="dropdown-title">acessórios</span>
            <div className={`dropdown-content ${openMenu === 'acessorios' ? 'show' : ''}`}>
              <div className='hiperlinks'>
                <div>bolsas</div>
                <div>pulseiras</div>
                <div>colares</div>
                <div>cintos</div>
                <div>bonés</div>
              </div>
            </div>
          </div>
        </div>

        <a href="" className='dropdown-title'>vestidos</a>
         <Link className='dropdown-title' to="/sobre-nos">sobre nós</Link>
      </div>


    </div>
  );
};

export default Dropdown;
