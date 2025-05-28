//import { useState } from "react";
import LogoFundoClaro from "../../logos/logoHeader.png";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer(){

    return(
        <>
            
            <div id="footer">
                <img src={LogoFundoClaro} alt="Logo" id="logoFooter"/>
                <Link to='/Contato'><button id="btnContato" className="BtnFooter">Contato</button></Link>
                <Link to="/"><button id="btnHome" className="BtnFooter" >Voltar</button></Link>
            </div>
        </>
    )
}

export default Footer