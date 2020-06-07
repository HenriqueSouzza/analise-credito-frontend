import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import MenuHeader from '../../components/menu/menuHeader';

import LoadingBody from '../../components/loading/loadingBody';

import Input from '../../components/form/input';

import Button from '../../components/form/button';

import { FORM_RULES, composeValidators } from '../../helpers/validations';

import { Form, Field } from 'react-final-form';

class Simulacao extends Component{

    constructor(props){
        super(props)
        this.state = {
            result: '',
            vlrEmprestimo: '',
            qtdParcela: '',
        }
    }

    onSubmit = values => {
        let total = (values.vlrEmprestimo * values.txJuros) / values.qtdParcelas
        
        this.setState({result: total, vlrEmprestimo: values.vlrEmprestimo, qtdParcela: values.qtdParcelas})
    }

    onClick = () => {
        this.props.history.push('/atendimento/' + this.props.match.params.id + '/visualizar')
    }

    onResult = () => {
        return(
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h5>Resultado</h5> 
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <strong>valor do empréstimo:</strong><br/>
                                        R$ {parseFloat(this.state.vlrEmprestimo)}
                                    </div>
                                    <div className="col-md-4">
                                        <strong>Valor da parcela:</strong><br/>
                                        R$ {parseFloat(this.state.result)}
                                    </div>
                                    <div className="col-md-4">
                                        <strong>Quantidade de parcelas:</strong><br/>
                                        {this.state.qtdParcela}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    render(){

        let { loading } = this.props.atendimento

        return(
            <section className="content">
                <MenuHeader title={`Simulacao de empréstimo`} history={this.props.location.pathname} />
                <LoadingBody status={loading}/>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <Form
                                    onSubmit={this.onSubmit}
                                    render={({handleSubmit}) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`vlrEmprestimo`} 
                                                        label={`Valor do emprestimo:`}
                                                        icon={`fa fa-dollar-sign`}
                                                        maxLength={11}
                                                        placeholder={`10000`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.number, FORM_RULES.max(11))}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`txJuros`} 
                                                        label={`Taxa de Juros:`}
                                                        icon={`fa fa-percent`}
                                                        placeholder={`1.50`}
                                                        validate={composeValidators(FORM_RULES.required)}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`number`}
                                                        name={`qtdParcelas`} 
                                                        label={`Quantidade de parcelas:`}
                                                        icon={`fa fa-number`}
                                                        placeholder={`10`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.minValue(1))}
                                                        />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mt-3">
                                                    <Field
                                                        component={Button}
                                                        name={`sendDadosCadastrais`}
                                                        type={`submit`} 
                                                        color={`btn-success`}
                                                        icon={`fa fa-search`} 
                                                        description={`Avançar`}
                                                        />
                                                </div>
                                                <div className="col-md-3 mt-3">
                                                    <div className="">
                                                        <label>&nbsp;</label>
                                                        <button className="btn btn-default col-md-11" onClick={() => this.onClick()}>
                                                            <i className="fa fa-arrow-left mr-1"></i>
                                                            Voltar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}/>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.result != '' ? this.onResult() : ''}
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


export default connect(mapStateToProps, mapDispatchToProps )(Simulacao);