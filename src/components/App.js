import React, { Component } from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Lembrete: '',
            lista: []
        }
    }

    digitarLembrete = (campoLembrete) => {
        this.setState({ [campoLembrete.target.name]: campoLembrete.target.value })
    }

    clicarBotao = (botao) => {
        botao.preventDefault()
        let copiaLista = [];
        for (let i = 0; i < this.state.lista.length; i++) {
            copiaLista[i] = this.state.lista[i];
        }
        copiaLista.push({
            'Lembrete': this.state.Lembrete
        })
        this.setState({ lista: copiaLista })
        this.setState({ Lembrete: '' })
    }

    render() {
        return (
            <div className="container mt-5 col-sm-12 col-md-6" >
                <div className="row mb-3">
                    <LembreteLista dados={this.state.lista} />
                </div>
                <div className="row">
                    <LembreteEntrada
                        campoLembrete={this.state.Lembrete}
                        funcaoBotao={this.clicarBotao}
                        funcaoLembrete={this.digitarLembrete} />
                </div>
            </div>    
        )        
    } 
}