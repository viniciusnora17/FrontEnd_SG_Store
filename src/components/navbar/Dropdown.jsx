import React from 'react'
import './Dropdown.css';

const Dropdown = () => {
    return (
        <div className='container-pai-navbar'>
            <div className="logo-dropdown-container">
                {/* Roupas */}
                <div className="dropdown-wrapper">
                    <div className="dropdown">
                        <span className="dropdown-title">roupas</span>
                        <div className="dropdown-content">
                            <div>
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
                <div className="dropdown-wrapper">
                    <div className="dropdown">
                        <span className="dropdown-title">acessórios</span>
                        <div className="dropdown-content">
                            <div>
                                <div>bolsas</div>
                                <div>pulseiras</div>
                                <div>colares</div>
                                <div>cintos</div>
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
