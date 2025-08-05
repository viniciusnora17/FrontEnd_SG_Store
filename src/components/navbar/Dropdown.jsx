import React, { useState, useRef } from 'react';
import './Dropdown.css';

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
                <div>t-shirts</div>
                <div>blusas básicas</div>
                <div>tricots</div>
                <div>calças</div>
                <div>shorts e bermudas</div>
                <div>cropped e blusas</div>
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
        <a href="" className='dropdown-title'>sobre-nós</a>
      </div>


    </div>
  );
};

export default Dropdown;
