import React from "react";
import './planejamento.css'
import Imagem from '../../assets/planejamento.png'

function Planejamento() {
    return (
        <section id="planejamento">
            <div className="container__right">
                <div className="content">
                    <h2>Planejamento Urbano Sustentável</h2>
                    <p>A espinha dorsal das cidades sustentáveis é um planejamento 
                        urbano que prioriza o espaço verde, a biodiversidade e a 
                        utilização eficiente do espaço. Isso inclui a criação de parques, 
                        a preservação de áreas naturais e a promoção de práticas de construção 
                        que respeitem o meio ambiente.
                    </p>
                </div>
            </div>
            <div className="container__left">
                <img src={Imagem} className="img"/>
            </div>
        </section>
    );
}

export default Planejamento;