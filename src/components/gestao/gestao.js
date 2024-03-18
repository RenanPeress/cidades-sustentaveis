import React from "react";
import './gestao.css'
import Imagem from '../../assets/gestao.png'

function Gestao() {
    return (
        <section id="gestao">
            <div className="container__right">
                <div className="content">
                    <h2>Gestão Sustentável de Recursos</h2>
                    <p>O manejo eficiente de recursos naturais, incluindo água, resíduos e energia, é vital. 
                        Isso envolve sistemas de reciclagem avançados, gestão de águas pluviais e reuso de água, 
                        além da promoção do consumo consciente entre os cidadãos.
                    </p>
                </div>
            </div>
            <div className="container__left">
                <img src={Imagem} className="img"/>
            </div>
        </section>
    );
}

export default Gestao;