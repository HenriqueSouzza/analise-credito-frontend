import { toastr } from 'react-redux-toastr';

import type from  './types';

/**
 * método para buscar os dados do usuario
 */
export const buscarClientes = (params = null) => {

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        const dataClientes = [
            {cpf: '43151188001', nome: 'José da serra', dataNascimento: '01-01-1990', rendaMensal: 500000},
            {cpf: '56872904003', nome: 'Moisés Souza', dataNascimento: '15-02-1989', rendaMensal: 600000},
            {cpf: '11978918038', nome: 'João pedro nunes', dataNascimento: '30-03-1988', rendaMensal: 700000},
            {cpf: '09970854011', nome: 'Thiago nunes', dataNascimento: '07-04-1987', rendaMensal: 800000},
            {cpf: '07676645077', nome: 'Gustavo carille', dataNascimento: '21-05-2001', rendaMensal: 900000},
            {cpf: '20126915016', nome: 'Josep guardiola', dataNascimento: '29-06-2002', rendaMensal: 1000000},
        ]

        setTimeout(() => { 

            dispatch({type: type.BUSCAR_CLIENTES, payload: dataClientes })

            if(dataClientes.length <= 0){
                toastr.success('Sucesso', 'Nenhum cliente encontrado !')
            }

         }, 1500);

    }

}

export const novoCliente = (params, router) => {

    return dispatch => {

        dispatch({type: type.LOAD, payload: true})

        setTimeout(() => { 

            dispatch({type: type.LOAD, payload: false })

            router.push('/atendimento/43151188001/visualizar')

         }, 1500);

    }
    
}

// export const salvarInscricao = params => {

//     const endPoint = '/api/inscricao'

//     const headers = { Authorization: TOKEN }

//     return dispatch => {

//         dispatch({type: type.LOAD, payload: true})

//         axios.post(endPoint, params, { headers: headers })
//         .then(response => {
            
//             params = {
//                 'env': 'production',
//                 'idPessoa': USER.pessoa,
//                 'idEvento': params.items[0]['id']
//             }
            
//             dispatch(buscarDadosInscricao(params))
            
//         })
//         .catch(error => {

//             dispatch({type: type.LOAD, payload: false})
//             console.log(error.response)

//         })
//     }

// }

/**
 * método para buscar dados do cep
 */
// export const buscarCep = (params) => {

//     const endPoint = 'https://viacep.com.br/ws/'+ params + '/json'

//     return dispatch => {

//         dispatch({type: type.LOAD, payload: true})

//         axios.get(endPoint)
//         .then(response => {
            
//             dispatch({ type: type.BUSCAR_DADOS_CEP, payload: response })
            
//         })
//         .catch(error => {

//             dispatch({type: type.LOAD, payload: false})

//             console.log(error.response)

//         })
//     }

// }

