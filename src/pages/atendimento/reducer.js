import type from './types';

//Estado inicial da componente
const INITIAL_STATE = {
    dadosClientes: [
        {cpf: '43151188001', nome: 'José da serra', dataNascimento: '01-01-1990', rendaMensal: 500000},
        {cpf: '56872904003', nome: 'Moisés Souza', dataNascimento: '15-02-1989', rendaMensal: 600000},
        {cpf: '11978918038', nome: 'João pedro nunes', dataNascimento: '30-03-1988', rendaMensal: 700000},
        {cpf: '09970854011', nome: 'Thiago nunes', dataNascimento: '07-04-1987', rendaMensal: 800000},
        {cpf: '07676645077', nome: 'Gustavo carille', dataNascimento: '21-05-2001', rendaMensal: 900000},
        {cpf: '20126915016', nome: 'Josep guardiola', dataNascimento: '29-06-2002', rendaMensal: 1000000},
    ],
    dadosEmprestimo: [
        {
            vlrParcel: 330.16, 
            vlrEmpr: 14000, 
            contrato: '123459778',
            dtAssCont: '21-03-20', 
            dtIni: '05-2020', 
            dtFim: '06-2026',
            parcelas: '71',
            sit: 'Ativo'
        },
        {
            vlrParcel: 326.50, 
            vlrEmpr: '10000', 
            contrato: '654789151',
            dtAssCont: '21-03-20', 
            dtIni: '06-2018', 
            dtFim: '06-2021',
            parcelas: '48',
            sit: 'Ativo'
        },
    ],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        //Condição para apresentar o load na tela quando for true
        case type.LOAD:
            return {...state, loading: action.payload}

        //Condição para guardar clientes
        case type.BUSCAR_CLIENTES:
            return { ...state, dadosClientes: action.payload || INITIAL_STATE.list, loading: false }       
            
        //Caso para guardar os dados do cep
        // case type.BUSCAR_DADOS_CEP:
            // return { ...state, dadosCep: action.payload.data || INITIAL_STATE.list, loading: false }       
            

        default:
            return state;   

    }

}