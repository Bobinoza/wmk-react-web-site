import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="containerFooter">
            <div className="wrapFooter">
                <div className="wrapTitle">
                    <h1 className="titleFooter">WMK <i className="fab fa-react"></i> </h1>
                </div>
                <div className="wrapYearAndTerms">
                    <div className="copyright">
                        <p className="">© 2021 WMK</p>
                    </div>
                    <div className="paragraphTerms">
                        <p>  
                            <a href="http://">TERMOS DE USO </a>  
                            E  
                            <a href="http://"> POLITICA DE PRIVACIDADE</a> 
                        </p>
                    </div>
                </div>
                <div className="wrapSocialmedia">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                </div>

            </div>

        </div>
    );
}

export default Footer;