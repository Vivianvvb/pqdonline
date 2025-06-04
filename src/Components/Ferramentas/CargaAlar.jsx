import { useState } from 'react'
import Header from "../MainComponents/header"
import Footer from "../MainComponents/footer"
import {Link} from 'react-router-dom';

function CargaAlar() {
// Elementos
  const [pesoEquip, setPesoEquip] = useState(0);
  const [velame, setVelame] = useState(0);
  const [message, setMessage] = useState("");
  
//Função para calcular Carga Alar
  const CalcularCargaAlar = (pesoEquip, velame) => {
    let result = 0;  
    if(pesoEquip <= 0 || velame <= 0) {
      setMessage("Definir valores de peso e velame");
    } else {
    //calcular
    result = (((pesoEquip)*2.2)/velame).toFixed(2);  
    // exibir resultado da mensagem
      setMessage(`Sua carga alar é de ${result}`);}
  }

  return (
    <>
      <Header />

<div className="main_div">
    <h1> C&aacute;lculo de Carga Alar </h1>
    
    <div className="input-group">
        <label> Peso Equipado </label>
        <input type="number" id="peso" name="peso" placeholder="0" maxLength="3" onChange={(e) => setPesoEquip(e.target.value)}/> 
    </div>

    <div className="input-group">
        <label> Tamanho do velame </label>
        <input type="number" id="velame" name="velame" placeholder="0" maxLength="3" onChange={(e) => setVelame(e.target.value)}/> 
    </div>

    <button id="calculate-btn" onClick={() => CalcularCargaAlar(pesoEquip, velame)}> Calcular </button>

    <div className="output-group">
        <p> <strong>{message} </strong></p>
    </div>

    <div id="message"> 
        <p className="p_mensagem"><small>  Categoria AI -  entre 0.6 e 1.0</small></p>
        <p className="p_mensagem"><small>  Categoria A - até 1.1</small></p>
        <p className="p_mensagem"><small>  Categoria B -  até 1.3</small></p>
        <p className="p_mensagem"><small>  Categoria C -  até 1.5</small></p>
        <p className="p_mensagem"><small>  Categoria D - Sem limite</small></p>    
    </div>

    
</div>
      
      <Footer />
    </>
  )
}
export default CargaAlar