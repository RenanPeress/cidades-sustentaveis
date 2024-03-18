import React from "react";
import './eficiencia.css'
import Imagem from '../../assets/eficiencia.png'

function Eficiencia() {
    return (
        <section id="eficiencia">
            <div className="container__left">
                <img src={Imagem} className="img"/>
            </div>
            <div className="container__right">
                <div className="content">
                    <h2>Eficiência Energética e Renováveis</h2>
                    <p>As cidades sustentáveis adotam tecnologias de eficiência energética 
                        e fontes de energia renovável, como solar e eólica, para reduzir a 
                        dependência de combustíveis fósseis. Isso não só diminui a emissão 
                        de gases do efeito estufa mas também promove uma economia de energia 
                        mais resiliente e autossuficiente.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Eficiencia;