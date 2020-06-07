import React from 'react';

import { Route, Switch } from 'react-router-dom';

//Component de listagem de clientes
import Clientes from './clientes'; 
import Novo from './novo'; 
import Visualizar from './visualizar'; 
import Simulacao from './simulacao'; 

function Router(props){

    return(
        <Switch>
            {/*  */}
            {/* <Route exact path='/' component={ props => <Clientes {...props} />} /> */}
            <Route exact path='/atendimento' component={ props => <Clientes {...props} />} />
            <Route path='/atendimento/novo' component={ props => <Novo {...props} />} />
            <Route path='/atendimento/:id/visualizar' component={ props => <Visualizar {...props} />} />
            <Route path='/atendimento/:id/simulacao' component={ props => <Simulacao {...props} />} />
        </Switch>
    )

}

export default Router;