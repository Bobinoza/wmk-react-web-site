import React from 'react';

import './Presentation.css'
import img1 from '../../images/img1.webp';

function Presentation() {
    return (
        <div className="Presentation-container">
            <h1 className="Presentation-container-h1">Usamos as tecnologias mais poderosas para criar seu app iOS, Android e PWA</h1>

            <div className="wrap-Presentation">
                <div className="wrap-content">
                    <div className="wrap-mini-title">
                        <i class="fas fa-mobile-alt"></i>
                        <p>APP DE COMPRAS</p>
                    </div>
                    <h1 className="titleText">Use a melhor tecnologia para criar seu app de compras</h1>
                    <p className="mainParagraph">
                        O eCommerce agora é realizado em celulares. Proporcionar uma experiência 
                        de compra impecável em smartphones tornou-se um requisito essencial para 
                        fazer negócios online. Até o momento, apenas apps nativos e apps 
                        progressivos da Web permitem oferecer a melhor experiência do 
                        usuário para compras no seu telefone. A GoodBarber permite que você 
                        crie um aplicativo de comércio eletrônico com as tecnologias móveis 
                        mais avançadas. Pare de procurar maneiras.
                    </p>
                    <div className="Wrapp-Buttons">
                        <a href="" className="button-1">CRIE UM SHOPPING APP</a>
                        <a href="" className="button-2"><i className="fas fa-plus"></i><span>Mais informacoes</span></a>
                    </div>

                </div>

                <div className="wrap-img">
                    <img src={img1} alt="" />
                </div>
            </div>


        </div>
    );
}

export default Presentation;