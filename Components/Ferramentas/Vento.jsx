import { useState } from 'react'
import Header from "../MainComponents/header"
import Footer from "../MainComponents/footer"
import {Link} from 'react-router-dom'

function Vento() {
//Selecionar Elementos
  const [vento1, setVento1] = useState(0);
  const [vento2, setVento2] = useState(0);
  const [medida1, setMedida1] = useState("");
  const [medida2, setMedida2] = useState("");
  const [message, setMessage] = useState("");


  //Função para converter as unidades
  const Converter = (vento1) => {
    if(medida1 === medida2) {
      setMessage("Já esta na medida correta");
    } else if(vento1 === 0){
      setMessage("Informar valor de vento");
    } else if(medida1==="Selecione uma opção" || medida2 ==="Selecione uma opção") {
      setMessage("Selecione as medidas");
    } else {
    //converter para km/hr
    let kilometer
    switch(medida1) {
        case "Km/h - Kilometros por hora":
            kilometer = vento1;
        break
        
        case "Kn - Knots - Milhas náuticas por hora":
            kilometer = vento1 * 1.85;
        break
        
        case "M/s - metros por segundo":
            kilometer = vento1 * 3.6;
        break

        case "Mph - Milhas por hora":
            kilometer = vento1 * 1.61;
        break
        default:"Km/h - Kilometros por hora";
        break
    }
    //converter metros para outras unidades
    let result
    switch(medida2) {
        case "Km/h - Kilometros por hora":
            result = kilometer;
        break

        case "Kn - Knots - Milhas náuticas por hora":
            result = kilometer * 0.54;
        break

        case "M/s - metros por segundo":
            result = kilometer * 0.28;
        break

        case "Mph - Milhas por hora":
            result = kilometer * 0.62;
        break
        default: "Kn - Knots - Milhas náuticas por hora";
        break
    }
    result = Math.ceil(result)
    vento1 = Math.ceil(vento1)
    setVento2(result)
    setMessage(`${vento1} ${medida1} EQUIVALEM A ${vento2} ${medida2}`);
      console.log(vento1, vento2, medida1, medida2, message)
    }
  }

  return (
    <>
      <Header />

      <div id="body_main_div">

<h1> Conversor de Ventos </h1>

    <div className="input-group">
        <label> Digite o valor </label>
        <input type="number" id="input" name="ïnput" placeholder="0" onChange={(e) => setVento1(Number(e.target.value))} /> 

    </div>

    <div className="input-group">
        <label> Selecione a medida atual </label>
        <select id="from" value={medida1} onChange={(e) => setMedida1(e.target.value)}>
            <option>Selecione uma opção</option>
            <option>Km/h - Kilometros por hora</option>
            <option>Kn - Knots - Milhas náuticas por hora</option>
            <option>M/s - metros por segundo</option>
            <option>Mph - Milhas por hora</option>
        </select>
    </div>

    <div className="input-group">
        <label> Selecione como quer a informação </label>
        <select id="to" value={medida2} onChange={(e) => setMedida2(e.target.value)}>
            <option>Selecione uma opção</option>
            <option>Km/h - Kilometros por hora</option>
            <option>Kn - Knots - Milhas náuticas por hora</option>
            <option>M/s - metros por segundo</option>
            <option>Mph - Milhas por hora</option>
        </select>
    </div>

    <button id="convert-btn" onClick={() => Converter(vento1)}> Converter </button>

    <div className="output">
      <p> <strong>{message} </strong></p>
    </div>

    <div id="message"> 
      <h2>Vento Recomendado por categoria</h2>
        <p><small> Vento para Cat AI - até 26 km/h </small></p>
        <p><small> Vento para Cat A - até 26 km/h </small></p>
        <p><small> Vento para Cat B - até 28 km/h </small></p>
        <p><small> Vento para Cat C - até 30 km/h </small></p>
        <p><small> Vento para Cat D - até 32 km/h </small></p>
    </div>

      </div>
      
      <Footer />
    </>
  )
}
export default Vento