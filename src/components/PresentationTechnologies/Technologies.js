import React from 'react';
import './Technologies.css';

import phone from '../..//images/gustoso1.webp';
import notebook from '../..//images/gustoso2.webp';
import appGoogle from '../..//images/appGoogle.webp';
import appApple from '../..//images/appApple.webp';
import pwa from '../..//images/pwaWeb.webp';

function Technologies() {
    return (
        <div className="background-Technologies">
            <div className="container">
                <div className="title">
                    <h2>Publique seu App Store, no Google Play e na Web</h2>
                </div>
                <div className="row">
                    <div className="column-1">
                        <picture>
                            <img className="x"  src={phone} alt="" />
                        </picture>
                        <h2>
                            App Store e Google Play
                        </h2>
                        <p className="column-1-p">
                            O GoodBarber permite que você crie um aplicativo nativo. 
                            Um aplicativo nativo é projetado em uma tecnologia 
                            específica para o telefone em que está instalado. 
                            Aplicativos nativos para iPhone e iPad são distribuídos 
                            na App Store da Apple. Aplicativos nativos para telefones 
                            Android são distribuídos pelo Google Play. Depois de 
                            publicado nas lojas, seu aplicativo nativo tem muitas 
                            vantagens: visibilidade via ASO e notoriedade, graças aos 
                            comentários e classificações do usuário.
                        </p>
                        <div className="footer-article-column-1">
                            <div>
                                <p>App 100% nativo disponivel em</p>
                            </div>
                            <div className="container-store-logo">
                                <picture>
                                    <img src={appGoogle} alt="" />
                                </picture>
                                <picture>
                                    <img src={appApple} alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>

                    <div className="column-2">
                        <picture>
                            <img src={notebook} alt="" />
                        </picture>
                        <h2>
                            PWA: na Web
                        </h2>
                        <p className="column-2-p">
                            A GoodBarber permite que você crie um Progressive Web App. Um 
                            PWA é um app da Web projetado para funcionar da melhor 
                            maneira em qualquer dispositivo: celular, tablet e computador. 
                            O acesso ao seu PWA é feito de qualquer navegador da Web, a 
                            partir de um URL simples. Os Progressive Web Apps oferecem 
                            recursos avançados, como modo offline ou notificações push. 
                            Eles são o futuro da web.
                        </p>
                        <div className ="footer-article-column-2">
                            <div>
                                <p>Progressive App totalmente responsivo</p>
                            </div>
                            <div className="container-pwa-web">
                                <picture>
                                    <img src={pwa} alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Technologies;