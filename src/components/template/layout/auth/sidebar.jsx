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
                <div className="text-white">
                    <div style={{fontSize: 21}}>
                        <strong>Bem-vindo,</strong>
                    </div>
                    Nossa portal está cheio de novidades.<br/>
                    Agora é possível acompanhar todos os seus clientes e fazer operações e análises de crédito.<br/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;