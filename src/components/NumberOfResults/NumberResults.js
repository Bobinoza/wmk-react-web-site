import React from 'react';

import './NumberResults.css';

function NumberResults() {
    return (
        <div className="background-NumberResults">
            <div className="container">
                <h1 className="title-banner">GOODBARBER. CONSTRUTOR DE APPS MÓVEIS.</h1>
                <p className="tittle-p">Parceiro de confiança</p>
                <div className="wrap-NR">
                    <div className="wrap-option-1">
                        <p className="wrap-option-p-1">
                            <span className="wrap-span">30 000</span> +
                            <br />
                            <small className="wrap-small">APPS PUBLICADOS</small>
                        </p>
                    </div>
                    <div className="wrap-option-2">
                        <p className="wrap-option-p-2">
                            <span className="wrap-span">40Milhoes</span> +
                            <br />
                            <small className="wrap-small">DOWNLOADS/ANO</small>
                        </p>
                    </div>
                    <div className="wrap-option-3">
                        <p className="wrap-option-p-3">
                            <span className="wrap-span">3.8BILHOES</span> +
                            <br />
                            <small className="wrap-small">VIZUALIZACOES/ANO</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NumberResults;

// <div className="container-NumberResults">