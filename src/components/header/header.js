import React, { useState } from "react";
import './header.css'
import Botao from '../../assets/menu.svg'
import Logo from '../../assets/logo.png'

function Header(){
    // useState para ativar ou desativar a classe navbar__mobile(botao de navegacao para telas menores)
    const [mobileNavbarActive, setMobileNavbarActive] = useState(false);

    const toggleMobileNavbar = () => {
        setMobileNavbarActive(!mobileNavbarActive);
    };

    // funcao para tela scrollar até a tela ao clicar na guia desejada
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('scroll-animation'); // Adiciona a classe de animação
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    element.classList.remove('scroll-animation'); // Remove a classe de animação após a transição
                }, 500);
            }, 100);
        }
    };

    return(
        <nav class="navbar">
            <div class="navbar__content max-width mb-0">
                <img src={Logo} className="logo" onClick={() => scrollToSection('home')}/>
                <ul class="navbar__links">
                    <li><a href="#home" onClick={() => scrollToSection('home')}>Início</a></li>
                    <li><a href="#introducao" onClick={() => scrollToSection('introducao')}>Introdução</a></li>
                    <li><a href="#planejamento" onClick={() => scrollToSection('planejamento')}>Planejamento</a></li>
                    <li><a href="#eficiencia" onClick={() => scrollToSection('eficiencia')}>Eficiência</a></li>
                    <li><a href="#gestao" onClick={() => scrollToSection('gestao')}>Gestão</a></li>
                    <li><a href="#mobilidade" onClick={() => scrollToSection('mobilidade')}>Mobilidade Urbana</a></li>
                    <li><a href="#conclusao" onClick={() => scrollToSection('conclusao')}>Conclusão</a></li>
                </ul>
                <div className={`navbar__mobile ${mobileNavbarActive ? 'active' : ''}`}>
                    <img src={Botao} alt="menu" class="burguer" onClick={toggleMobileNavbar}/>
                    <ul class="mobile__links">
                        <li><a href="#home" onClick={() => {scrollToSection('home'); toggleMobileNavbar()}}>Início</a></li>
                        <li><a href="#introducao" onClick={() => {scrollToSection('introducao'); toggleMobileNavbar()}}>Introdução</a></li>
                        <li><a href="#planejamento" onClick={() => {scrollToSection('planejamento'); toggleMobileNavbar()}}>Planejamento Urbano Sustentável</a></li>
                        <li><a href="#eficiencia" onClick={() => {scrollToSection('eficiencia'); toggleMobileNavbar()}}>Eficiência Energética e Renováveis</a></li>
                        <li><a href="#gestao" onClick={() => {scrollToSection('gestao'); toggleMobileNavbar()}}>Gestão Sustentável de Recursos</a></li>
                        <li><a href="#mobilidade" onClick={() => {scrollToSection('mobilidade'); toggleMobileNavbar()}}>Mobilidade Urbana Sustentável</a></li>
                        <li><a href="#conclusao" onClick={() => {scrollToSection('conclusao'); toggleMobileNavbar()}}>Conclusão</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;