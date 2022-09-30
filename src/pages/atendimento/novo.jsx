import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import MenuHeader from '../../components/menu/menuHeader';

import LoadingBody from '../../components/loading/loadingBody';

import Input from '../../components/form/input';

import Button from '../../components/form/button';

import { FORM_RULES, composeValidators } from '../../helpers/validations';

import { Form, Field } from 'react-final-form';

import { novoCliente } from './actions';

class Novo extends Component{

    onSubmit = values => {
        this.props.novoCliente(values, this.props.history)
    }

    render(){

        let { loading } = this.props.atendimento

        return(
            <section className="content">
                <MenuHeader title={`Novo cliente`} history={this.props.location.pathname} />
                <LoadingBody status={loading} />
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h5>Dados pessoais</h5>
                            </div>
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
                                                        name={`cpf`} 
                                                        label={`CPF:`}
                                                        icon={`fa fa-user`}
                                                        maxLength={11}
                                                        placeholder={`12345678978`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.number, FORM_RULES.max(11))}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`nome_compl`} 
                                                        label={`Nome:`}
                                                        icon={`fa fa-user`}
                                                        placeholder={`Nome completo`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.min(5))}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`date`}
                                                        name={`dataNascimento`} 
                                                        label={`Data de nascimento:`}
                                                        icon={`fa fa-calendar`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.min(5))}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`rendaMensal`} 
                                                        label={`Renda mensal:`}
                                                        icon={`fa fa-dollar-sign`}
                                                        placeholder={`1200`}
                                                        validate={composeValidators(FORM_RULES.required, FORM_RULES.number)}
                                                        />
                                                </div>
                                                <div className="col-md-3 mt-3">
                                                    <Field
                                                        component={Button}
                                                        name={`sendDadosCadastrais`}
                                                        type={`submit`} 
                                                        color={`btn-success`}
                                                        icon={`fa fa-search`} 
                                                        description={`Verificar`}
                                                        />
                                                </div>
                                                <div className="col-md-3 mt-3">
                                                    <div className="">
                                                        <label>&nbsp;</label>
                                                        <button className="btn btn-default col-md-11" onClick={() => this.props.history.push('/atendimento')}>
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
const mapDispatchToProps = dispatch => bindActionCreators({ novoCliente }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Novo);