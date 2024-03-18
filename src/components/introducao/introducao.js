import React from "react";
import './introducao.css'
import Imagem from '../../assets/introducao.png'

function Introducao() {
    return (
        <section id="introducao">
            <div className="container__left">
                <img src={Imagem} className="img"/>
            </div>
            <div className="container__right">
                <div className="content">
                    <h2>O que são Cidades Sustentáveis?</h2>
                    <p>Cidades sustentáveis são aquelas projetadas com foco na minimização do impacto ambiental 
                        e na maximização da qualidade de vida de seus habitantes. 
                        Elas integram soluções inovadoras em planejamento urbano, eficiência energética, 
                        gestão de recursos e mobilidade sustentável para criar um ambiente urbano equilibrado e 
                        inclusivo.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Introducao;