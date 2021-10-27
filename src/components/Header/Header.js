import React from 'react';

import './Header.css';

function Header() {
    return (
        <>
            <div className="divContainer">
                
                <div className="contentContainer">
                    <h1>CRIE SEU APP MOBILE</h1>
                    <p>
                        Apps nativos e construtor Progessive Web
                        para eCommerce e Gerenciamento de Conteudo
                    </p>
                    <div className="containerButton">
                        <button className="btn-Header">
                            VER PLANOS
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

export default Header;