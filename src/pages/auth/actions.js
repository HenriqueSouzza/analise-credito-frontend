import { toastr } from 'react-redux-toastr';

import type from  './types';

/**
 * Método responsável para efeutar login
 * @param {*} params 
 * @param {*} router 
 */
export const efetuarLogin = (params, router) => {

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        setTimeout(() => { 

            dispatch({type: type.GUARDAR_TOKEN, payload: {user: 'Usuario teste', token: '123456789'}})

            toastr.success('Sucesso', 'Seja bem-vindo !')

            router.go()

         }, 1500);

    }
}


/**
 * Método responsável para resetar senha
 * @param {*} params 
 * @param {*} router 
 */
export const resetSenha = (params, router) => {

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        setTimeout(() => { 

            dispatch({type: type.LOAD, payload: false})

            toastr.success('Sucesso', 'Senha alterada com sucesso. Sua nova senha foi enviada por email !')

            router.push('/')

        }, 1500);
        
    }
}