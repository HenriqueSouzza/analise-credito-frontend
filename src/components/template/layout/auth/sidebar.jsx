import React from 'react';

import imgLogo  from '../../../../uploads/iconAuth.png';

import './style.css';
 
function Sidebar() {

    return (
        <div className="col-md-5 align-self-center sidebarAuth">
            <div className="login-logo">
                <img src={imgLogo} className="brand-image img-logo" alt={`LogoImage`} />
            </div>
            <div className="text-center">
                <h1>
                    <p className="text-white">
                        Bem-vindo !
                    </p>
                </h1>
                <h5>
                    <p className="text-white">
                        Nossa portal está cheio de novidades.<br></br>
                        Agora é possível acompanhar todos os seus clientes e fazer operações e análises de crédito.<br></br>
                    </p>
                </h5>
            </div>
        </div>
    )
}

export default Sidebar;