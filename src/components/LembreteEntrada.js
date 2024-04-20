import React, { Component } from 'react'

export default class LembreteEntrada extends Component {
    render() {
      return (
          <div>
            <form onSubmit={this.props.funcaoBotao} className="row">
                <input  value={this.props.campoLembrete} type="text" className="form-control p-3 rounded-3 mb-2" name="Lembrete" placeholder="Digite o seu lembrete" onChange={this.props.funcaoLembrete} />
                <input type="submit" value="OK" className="btn btn-primary p-2 mb-4"/>
            </form>
          </div>
      )
    }
  }