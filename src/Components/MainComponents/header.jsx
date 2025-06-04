//mport { useState } from "react";
import LogoFundoClaro from "../../logos/logoHeader.png";
import "./header.css";
import { Link } from "react-router-dom";

import CargaAlar from "../Ferramentas/CargaAlar";
import Provas from "../EstudeAqui/Provas";
import FichasProgressao from "../EstudeAqui/FichasProgressao";
function Header(){
    return(
        <>
            <div id="header">
                <img src={LogoFundoClaro} alt="Logo" id="logoHeader"/>
                <Link to="/"><button className="BtnHeader"> Home</button></Link>
                <Link to="/CargaAlar"><button className="BtnHeader">Carga Alar</button></Link>
                <Link to="/Provas"><button className="BtnHeader">Provas</button></Link>
                <Link to="/FichasProgressao"><button className="BtnHeader">Fichas</button></Link>
            </div>
        </>
    )
}

export default Header