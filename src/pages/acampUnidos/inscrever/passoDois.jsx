import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import MenuHeader from '../../../components/menu/menuHeader';

class PassoDois extends Component{

    render(){
        return(
            <div className="text-left">
                <h4>Dados do evento</h4>
                <div className="row justify-content-center">
                    <div className="col-md-5">sdsdssds</div>
                </div>
                <hr/>
                <h4>Forma de pagamento</h4>
                    <div className="row justify-content-center">
                        <div className="col-md-5">sdsds</div>
                    </div>
                <hr/>
                <button className="btn btn-danger" onClick={() => this.props.onClickPasso({passoAtual: '1'})}>Voltar</button>
                <button className="btn btn-success" onClick={() => this.props.onClickPasso({passoAtual: '3'})}>Proximo</button>
            </div>
        )
    }
}

/**
 * @param {*} state 
 */
// const mapStateToProps = state => ({ alunos: state.atvAlunos })

/**
 * @param {*} dispatch 
 */
// const mapDispatchToProps = dispatch => bindActionCreators({ removerAluno, buscarDadosForm, buscarAluno, alterarAluno, salvarAlunoLyceum }, dispatch);


export default connect(null, null )(PassoDois);