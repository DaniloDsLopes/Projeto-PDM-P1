import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import React from 'react'
import LembreteEntrada from './LembreteEntrada';
const App = () => {
    return (
        <div className='container-fluid mt-3 '>
                <div className='justify-content-md-center'>
                    <LembreteEntrada/>
                </div>
        </div>

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)