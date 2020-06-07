import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { Form, Field } from 'react-final-form';

import { connect } from 'react-redux';

import MenuHeader from '../../components/menu/menuHeader';

import Input from '../../components/form/input';

import Button from '../../components/form/button';

import Table from '../../components/table/dataTable';

import { FORM_RULES, composeValidators } from '../../helpers/validations';

import { ACTION_RULES } from '../../helpers/authorization';

import { buscarClientes } from './actions';

class Clientes extends Component{

    componentDidMount = () => {
        this.props.buscarClientes()
    }

    onSubmit = values => {
        this.props.buscarClientes(values)
    }

    render(){

        let { loading, dadosClientes } = this.props.atendimento

        const columns = [
            {
                name: 'CPF',
                selector: 'cpf',
                sortable: true,
            },
            {
                name: 'Nome Completo',
                selector: 'nome',
                sortable: true,
            },
            {
                name: 'Data nascimento',
                selector: 'dataNascimento',
                sortable: true,
            }
        ];
        
        return (
            <section className="content">
                <MenuHeader title={`Lista / histórico de clientes`} history={this.props.location.pathname} />
                {/* <LoadingBody status={loading} /> */}
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <Form
                                    onSubmit={this.onSubmit}
                                    render={({handleSubmit, submitError}) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`cpf`} 
                                                        label={`CPF:`}
                                                        icon={`fa fa-user`}
                                                        maxLength={11}
                                                        placeholder={`12345678978`}
                                                        validate={composeValidators(FORM_RULES.number, FORM_RULES.max(11))}
                                                        />
                                                </div>
                                                <div className="col-md-4">
                                                    <Field 
                                                        component={Input} 
                                                        type={`text`}
                                                        name={`nome_compl`} 
                                                        label={`Nome:`}
                                                        icon={`fa fa-user`}
                                                        placeholder={`Nome completo`}
                                                        validate={composeValidators(FORM_RULES.min(5))}
                                                        />
                                                </div>
                                                <div className="col-md-3">
                                                    <label>&nbsp;</label>
                                                    <Field
                                                        component={Button}
                                                        name={`sendDados`}
                                                        type={`submit`} 
                                                        color={`btn-success`}
                                                        icon={`fa fa-search`} 
                                                        description={`Pesquisar`}
                                                        />
                                                </div>
                                            </div>
                                        </form>
                                    )}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <Table 
                                    description={false}
                                    checkbox={false} 
                                    columns={columns} 
                                    data={dadosClientes} 
                                    router={this.props.history}
                                    btnAdd={dadosClientes.length > 0} 
                                    actions={[ACTION_RULES.can_detail]}
                                    loading={loading} 
                                />
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
const mapDispatchToProps = dispatch => bindActionCreators({ buscarClientes }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Clientes);

