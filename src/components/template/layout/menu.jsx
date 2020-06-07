import React from 'react';

import MenuLink from '../../menu/menuLink';

// import MenuTreeView from '../../menu/menuTreeView';

function Menu(){

    return(
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                <MenuLink description={`Dashboard`} path={`/`} icon={`fas fa-tachometer-alt`}  active={``} />
                <MenuLink description={`Atendimento`} path={`/atendimento`} icon={`fa fa-users`} active={``} />
                <MenuLink description={`Sair`} path={`/sair`} icon={`fa fa-sign-out-alt`} active={``} />
            </ul>
        </nav>
    )
}

export default Menu;