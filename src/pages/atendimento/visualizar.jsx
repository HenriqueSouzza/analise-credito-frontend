import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import MenuHeader from '../../components/menu/menuHeader';

import LoadingBody from '../../components/loading/loadingBody';

class Visualizar extends Component{

    constructor(props){
        super(props)
        this.state = {
            dadosCadastrais: {
                cpf: '12345678912',
                nomeCompleto: 'João da serra',
                dataNascimento: '01-01-2020',
                rendaMensal: 1200,
            }
        }
    }

    onClick = () => {
        this.props.history.push('/atendimento/'+ this.state.dadosCadastrais.cpf + '/simulacao')
    }
    
    render(){

        let { dadosCadastrais } = this.state
        
        let { loading, dadosEmprestimo, dadosClientes } = this.props.atendimento

        let totalTmp = dadosEmprestimo.reduce((total, item) => (total + item.vlrParcel), 0);

        let total = ((dadosCadastrais.rendaMensal * 30) / 100) > totalTmp ? ((dadosCadastrais.rendaMensal * 30) / 100) - totalTmp : 0

        let dadoCliente = []

        if(dadosClientes.length > 0){
           dadoCliente.push(dadosClientes.find(response => ( response.cpf == this.props.match.params.id ? response : [] )))
        }

        return(
            <section className="content">
                <MenuHeader title={`Detalhe do cliente`} history={this.props.location.pathname} />
                <LoadingBody status={loading}/>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h5>Dados financeiros</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <strong>CPF:</strong>
                                        <br/>
                                        {this.props.match.params.id}
                                    </div>
                                    <div className="col-md-4">
                                        <strong>Nome completo:</strong>
                                        <br/>
                                        {dadoCliente[0].nome}
                                    </div>
                                    <div className="col-md-4">
                                        <strong>Data de Nascimento:</strong>
                                        <br/>
                                        {dadoCliente[0].dataNascimento}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h5>Dados financeiros</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="card col-md-6 p-2 bg-light">
                                        <div className="row text-center">
                                            <div className="col-md-6">
                                                Margem para empréstimos: <br/>
                                                <strong>R$ {total}</strong>
                                            </div>
                                            <div className="col-md-6">
                                                Renda mensal: <br/>
                                                <strong>R$ {parseFloat(dadosCadastrais.rendaMensal)}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        {
                                            total <= 0 ? 
                                                <div className="text-danger">
                                                    Cliente não possui margem para empréstimo
                                                </div>
                                            : ''
                                        }
                                        <button className="btn btn-success col-md-6 mt-2 p-2" onClick={() => this.onClick()}>Fazer simulação de empréstimo</button>
                                    </div>
                                </div>
                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-12">
                                        <h5 className="text-success">Contratos de Empréstimos</h5>
                                    </div>
                                    <br/>
                                    <br/>
                                    {dadosEmprestimo.length > 0 ?
                                        dadosEmprestimo.map( (row,index) => (
                                            <div className="col-md-12 card">
                                                <div className="card-header" data-toggle="collapse" data-target={`#emprestimo${index}`} aria-expanded="false" aria-controls={`#emprestimo${index}`}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <strong>Valor do empréstimo: R$ {parseFloat(row.vlrEmpr)}</strong><br/>
                                                            <strong>Situação: {row.sit}</strong>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            <i className="fa fa-arrow-circle-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body collapse multi-collapse" id={`emprestimo${index}`}>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            Empréstimo: <br/>
                                                            {row.contrato}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Situação: <br/>
                                                            {row.sit}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Parcelas: <br/>
                                                            R$ {row.parcelas}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Valor emprestado: <br/>
                                                            R$ {row.vlrEmpr}
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-md-3">
                                                            Valor das parcelas: <br/>
                                                            {row.vlrParcel}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Data inclusão: <br/>
                                                            {row.dtAssCont}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Início do desconto: <br/>
                                                            R$ {row.dtIni}
                                                        </div>
                                                        <div className="col-md-3">
                                                            Fim do desconto: <br/>
                                                            R$ {row.dtFim}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    : 
                                        <div className="text-center">
                                            <h5>
                                                <i className="fa fa-info-circle"></i>
                                                <br/>
                                                Existem emprestimos
                                            </h5>
                                        </div>
                                    }
                                </div>
                                <div className="text-center m-3">
                                    <button className="btn btn-success col-md-3 p-2" onClick={() => this.props.history.push('/atendimento')}>Voltar para atendimento</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

/**
 * @param {*} state 
 */
const mapStateToProps = state => ({ atendimento: state.atendimento })

/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Visualizar);