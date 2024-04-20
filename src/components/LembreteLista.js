import React, { Component } from 'react'

export default class LembreteLista extends Component{
    render(){
        return(
            <div className='border w-100 rounded-3 d-flex flex-column align-items-center '>
                {this.props.dados.map((elemento, indice) => {
                    return(
                        <div className='container text-center border col-sm-12 col-md-9 col-lg-7 col-xl-6 mt-2 p-3 rounded border-warning bg-warning' key={indice}>
                            {elemento.Lembrete}
                        </div>
                    )
                })}
            </div>
        )
    }
}




