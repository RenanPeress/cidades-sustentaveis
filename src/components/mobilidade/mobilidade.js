import React from "react";
import './mobilidade.css'
import Imagem from '../../assets/mobilidade.png'

function Mobilidade() {
    return (
        <section id="mobilidade">
            <div className="container__left">
                <img src={Imagem} className="img"/>
            </div>
            <div className="container__right">
                <div className="content">
                    <h2>Mobilidade Urbana Sustentável</h2>
                    <p>A transformação dos sistemas de transporte para serem mais sustentáveis é crucial. 
                        Isso significa promover o transporte público de baixa emissão, vias para bicicletas 
                        e pedestres, e a implementação de tecnologias para veículos elétricos e compartilhamento 
                        de viagens.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Mobilidade;