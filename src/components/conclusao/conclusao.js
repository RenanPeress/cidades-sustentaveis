import React from "react";
import './conclusao.css'

function Conclusao() {
    return (
        <section id="conclusao">
            <div className="container__conclusao">
                <h2>Construindo um Futuro Sustentável</h2>
                <p>As cidades sustentáveis representam mais do que apenas uma tendência; 
                    elas são uma necessidade para o futuro do nosso planeta. Ao adotar práticas sustentáveis, 
                    podemos garantir um ambiente urbano mais saudável, resiliente e inclusivo para as gerações 
                    presentes e futuras. Juntos, podemos fazer a diferença. <strong>Exemplos de cidades sustentáveis:</strong>
                </p>
            </div>
            <div className="container__exemplos">
                <div className="exemplo">
                    <div className="title"><h3>Freiburg, Alemanha</h3></div>
                    <div className="card image-1"></div>
                    <a href="https://maps.app.goo.gl/SmcLSoQoH7jUrdr47"><p>Veja no maps</p></a>
                </div>
                <div className="exemplo">
                    <div className="title"><h3>Copenhague, Dinamarca</h3></div>
                    <div className="card image-2"></div>
                    <a href="https://maps.app.goo.gl/yRpPbbFrA2cqkf1M7"><p>Veja no maps</p></a>
                </div>
                <div className="exemplo">
                    <div className="title"><h3>Curitiba, Brasil</h3></div>
                    <div className="card image-3"></div>
                    <a href="https://maps.app.goo.gl/wH4D9zgJTZheDNeTA"><p>Veja no maps</p></a>
                </div>
            </div>
        </section>
    );
}

export default Conclusao;