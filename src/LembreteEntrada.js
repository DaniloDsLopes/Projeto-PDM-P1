import React from 'react'

const LembreteEntrada = () => {


    return (
        <div className="row">
            <div className="container col-sm-12 col-md-9 col-lg-7 col-xl-6">
                <input 
                    type="text" 
                    className="form-control text-center mt-4 p-3 " 
                    placeholder='Digite seu novo lembrete' 
                    />
                <div
                    className="btn form-control btn-outline-primary mt-2 w-500 p-3"
                    type="button">
                    OK
                </div>
            </div>
        </div>
    )
}

export default LembreteEntrada