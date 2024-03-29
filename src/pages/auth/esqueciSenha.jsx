import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import Input from '../../components/form/input';

import Button from '../../components/form/button';

import LoadingBody from '../../components/loading/loadingBody';

import { FORM_RULES, composeValidators } from '../../helpers/validations';

import { resetSenha } from './actions';

import './style.css';

import { Link } from 'react-router-dom';

class EsqueciSenha extends Component {

    onSubmit = values => {
        this.props.resetSenha(values, this.props.history)
    }

    render() {

        let { loading } = this.props.auth

        return (
            <div className="col-md-7 bg-white">
                <LoadingBody status={loading} />
                <div className="row login-body justify-content-center">
                    <div className="col-md-8 align-self-center">
                        <h2>
                            <p className="text-center">
                                Esqueci minha senha
                            </p> 
                        </h2>
                        <p className="text-center">
                            <small>Confirme sua matrícula, e informe seu e-mail para que seja enviado uma nova senha</small>
                        </p>
                        <Form
                            onSubmit={this.onSubmit}
                            render={({handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <Field 
                                                component={Input} 
                                                type={`text`}
                                                name={`matricula`} 
                                                label={`Matricula:`}
                                                maxLength={10}
                                                icon={`fa fa-user`}
                                                placeholder={`00000000000`}
                                                validate={composeValidators(FORM_RULES.required, FORM_RULES.min(6), FORM_RULES.max(11), FORM_RULES.number)}
                                                />
                                        </div>
                                    </div>  
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <Field 
                                                component={Input} 
                                                type={`email`}
                                                name={`email`} 
                                                label={`E-mail:`}
                                                icon={`fa fa-envelope`}
                                                placeholder={`email@email.com`}
                                                validate={composeValidators(FORM_RULES.required, FORM_RULES.email)}
                                                />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            {/* <label>&nbsp;</label> */}
                                            <Field
                                                component={Button}
                                                name={`sendEsqueci`}
                                                type={`submit`} 
                                                color={`btn-primary`}
                                                icon={`fa fa-sign-in`} 
                                                description={`Enviar`}
                                                />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 text-center">
                                            {/* <label>&nbsp;</label> */}
                                            <Link to={`/`}> 
                                                Fazer login
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            )}  
                        />
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * @param {*} state 
 */
const mapStateToProps = state => ({ auth: state.auth })

/**
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ resetSenha }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EsqueciSenha);