import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form'; //redux-form

import { reducer as toastrReducer } from 'react-redux-toastr'; //redux do componente de mensagens

//Auth
import AuthReducer from './pages/auth/reducer';

//Atendimento
import AtendimentoReducer from './pages/atendimento/reducer';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    auth: AuthReducer,
    dashboard: () => ({ test: 1500 }),
    atendimento: AtendimentoReducer,
})

export default rootReducer; 