import React from 'react'

const LembreteLista = (props) => {
    return (
        <div className="container text-center border col-sm-12 col-md-9 col-lg-7 col-xl-6 mt-2 p-3 d-block rounded border-warning"
            style={{ backgroundColor: '#ffffe0' }}>
                {props.Lembrete}
        </div>
    )
}

export default LembreteLista