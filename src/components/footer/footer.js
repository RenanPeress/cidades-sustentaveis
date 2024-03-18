import React from "react";
import './footer.css'
import Logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer>
            <img id="logo" src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Renan Peres, Nathiely Saraira, Ricardo Oliveira e Hérick Land</span>
        </footer>
    );
}

export default Footer;