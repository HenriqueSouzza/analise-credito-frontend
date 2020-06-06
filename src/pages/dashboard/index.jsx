import React from 'react';

import MenuHeader from '../../components/menu/menuHeader';

import Box from '../../components/card/box';

function Dashboard(props){
    return(
        <section className="content">
            <MenuHeader title={`Dashboard`} history={props.location.pathname} />  
            <div className="content-fluid">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <Box number={140} description={`Cadastro pendentes`} icon={`fas fa-users`} link={`/`} color={`bg-info`}/>
                    </div>
                    <div className="col-lg-3 col-6">
                        <Box number={130} description={`Pessoas aprovadas`} icon={`fas fa-users`} link={`/inscritos`} color={`bg-success`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;