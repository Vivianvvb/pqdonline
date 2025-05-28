import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "../Components/MainComponents/header"
import Footer from "../Components/MainComponents/footer"
import {Link} from 'react-router-dom';

import LogoFundoClaro from "../logos/logoHeader.png";
import logoAbra from "../logos/logoABRA.png";
import logoSkyradical from "../logos/logoSkyRadical.png";
import logoAeroplay from "../logos/logoAeroPlay.png";
import logoSetor2 from "../logos/logoSetor2.jpg";

function App() {
    return (
    <>
      <Header />

      <div id="body_main_div">
        <div id="ferramentas_div" className="main_div">
          <img src={LogoFundoClaro} alt="Logo" id="logoHeader"/>
          <h2> FERRAMENTAS</h2>          
          <p>Explore nossas ferramentas online de paraquedismo! Com os botões abaixo, você terá acesso direto a uma seleção de recursos essenciais para aprimorar seu treinamento, planejamento e segurança durante o salto. De calculadoras de carga alar a conversor de medida de vento, essas ferramentas são projetadas para tornar sua experiência no paraquedismo mais segura e eficiente. Clique em um dos botões e comece agora mesmo!</p>
          <br />
          <Link to="/Vento"><button id="btnVento" className="BtnFerrmanetas">  Medidas de Vento</button></Link>
          <Link to="/CargaAlar"><button id="btnCargaAlar" className="BtnFerrmanetas">Carga Alar</button></Link>
          <Link to="/Caderneta"><button id="btnCaderneta" className="BtnFerrmanetas">Caderneta de Salto </button></Link>
          <Link to="/Reserva"><button id="btnReserva" className="BtnFerrmanetas">Caderneta do Reserva </button></Link>
        </div>
<br />
        <div id="estude_div" className="main_div">
          <img src={LogoFundoClaro} alt="Logo" id="logoHeader"/>
          <h2> ESTUDE AQUI</h2>
          <p>Descubra as opções de estudo que preparamos para você! Através dos botões abaixo, você poderá acessar simulados, fichas de progressão e provas - todas ferramentas essenciais para aprimorar seu conhecimento e performance. Se está se preparando para um teste ou busca uma forma prática de revisar, temos tudo o que você precisa. Explore agora e organize seus estudos de maneira eficiente! </p>
          <br />
          <Link to="/FichasProgressao"><button id="btnFicha" className="BtnEstude">Fichas de Progressão</button></Link>
          <Link to="/Simulados"><button id="btnSimulados" className="BtnEstude" >Simulados</button></Link>
          <Link to="/Provas"><button id="btnProvas" className="BtnEstude" >Provas</button></ Link>
          <Link to="/DicasCanais"><button id="btnCanais" className="BtnEstude" >Dicas de Canais</button></Link>
        </div>
<br />

        {/* <div id="categorias_div" className="main_div">
          <img src={LogoFundoClaro} alt="Logo" id="logoHeader"/>
          <h2> CATEGORIAS</h2>
          <p>Conheça as informações detalhadas para cada Categoria no paraquedismo! Através dos botões abaixo, você poderá acessar conteúdos exclusivos e adaptados para iniciantes, intermediários e experientes. Se você está começando ou já possui mais saltos no currículo, temos material específico para ajudar a evoluir de forma segura e técnica. Clique e descubra tudo o que você precisa para cada fase da sua jornada no paraquedismo! </p>
          <br />
          <Link to="/CategoriaAI"><button id="btnCatAI" className="BtnCategorias" >Categoria AI </button></Link>
          <Link to="/CategoriaA"><button id="btnCatA" className="BtnCategorias" >Categoria A </button></Link>
          <Link to="/CategoriaB"><button id="btnCatB" className="BtnCategorias" > Categoria B </button></Link>
          <br />
          <Link to="/CategoriaC"><button id="btnCatC" className="BtnCategorias" > Categoria C </button></Link>
          <Link to="/CategoriaD"><button id="btnCatD" className="BtnCategorias" > Categoria D </button></Link>
          <Link to="/Coach"><button id="btnCoach" className="BtnCategorias" > Coach </button></Link>
        </div> */}
        
<br />
        <div id="parceiro_div" className="main_div">
          <Link to='https://www.abra.org.br' target="_blank"><img src={logoAbra} alt="Logo" id="logoABRA"/></Link>
          <Link to='https://www.skyradical.com.br' target='_blank'><img src={logoSkyradical} alt="Logo" id="logoSkyRadical"/></Link>
          <Link to='https://www.skyradical.com.br/eventos-radical/shows-e-apresentacoes/' target='_blank'><img src={logoAeroplay} alt="Logo" id="logoAeroPlay"/></Link>
          <Link to='https://www.setordois.com' target='_blank'><img src={logoSetor2} alt="Logo" id="logoSetor2"/></Link>
        </div>

      </div>
      
      <Footer />
    </>
  )
}

export default App
