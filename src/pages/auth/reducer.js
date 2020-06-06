import type from './types';

//Estado inicial da componente
const INITIAL_STATE = {
    list: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //Caso para apresentar o load na tela quando for true
        case type.LOAD:
            return { ...state, loading: action.payload }

        //Caso para Guardar token
        case type.GUARDAR_TOKEN:
            sessionStorage.setItem('token', action.payload.token)
            sessionStorage.setItem('user', action.payload.user)
            return { ...state, list: action.payload || INITIAL_STATE.list, loading: false }        

        default:
            return state;   

    }

}