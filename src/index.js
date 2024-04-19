import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {


    return (
        <div className='container-fluid mt-3 '>
            <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-7 col-xl-6 text-center">
                    <h1>Hello, lembretes</h1>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)