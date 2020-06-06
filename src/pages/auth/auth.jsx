import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import Input from '../../components/form/input';

import Button from '../../components/form/button';

import LoadingBody from '../../components/loading/loadingBody';

import { FORM_RULES, composeValidators } from '../../helpers/validations';

import { efetuarLogin } from './actions';

import './style.css';

import { Link } from 'react-router-dom';

class Auth extends Component {

    onSubmit = values => {
        this.props.efetuarLogin(values, this.props.history)
    }

    render() {

        let { loading } = this.props.auth
        
        return (
                <div className="col-md-7 bg-white">
                    <LoadingBody status={loading} />
                    <div className="row login-body justify-content-center">
                        <div className="col-md-8 align-self-center">
                            <h1>
                                <p className="text-center">
                                    Acessar
                                </p> 
                            </h1>
                            <p className="text-center">
                                <small>Informe seu login e senha para acessar</small>
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
                                                    maxLength={11}
                                                    icon={`fa fa-user`}
                                                    placeholder={`00000000000`}
                                                    validate={composeValidators(FORM_RULES.required, FORM_RULES.min(6), FORM_RULES.max(10), FORM_RULES.number)}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                <Field 
                                                    component={Input} 
                                                    type={`password`}
                                                    name={`senha`} 
                                                    label={`Senha:`}
                                                    maxLength={9}
                                                    icon={`fa fa-key`}
                                                    placeholder={`********`}
                                                    validate={composeValidators(FORM_RULES.required, FORM_RULES.max(8))}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                {/* <label>&nbsp;</label> */}
                                                <Field
                                                    component={Button}
                                                    name={`sendAuth`}
                                                    type={`submit`} 
                                                    color={`btn-primary`}
                                                    icon={`fa fa-sign-in`} 
                                                    description={`Entrar`}
                                                    />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8 text-center">
                                                {/* <label>&nbsp;</label> */}
                                                <Link to={`/esqueci-senha`}> 
                                                    Esqueci minha senha
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
const mapDispatchToProps = dispatch => bindActionCreators({ efetuarLogin }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Auth);