import React from "react"
import Header from  '../MainComponents/header.jsx'
import Footer from '../MainComponents/footer.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import {Link} from "react-router-dom"
import { useReactToPrint } from 'react-to-print'
import {useRef} from 'react'

function Caderneta(){
  
  const componentRef = useRef();

  const printCaderneta = () => {
    content:() => componentRef.current
  }
    return(
        <>
  <Header />
  <div className="main_div">
    <section className='caderneta' ref={componentRef}> 
      <h2>CADERNETA DE SALTO</h2>
      <div className='table1' >
        <table>
          <tr>
            <th>Salto no.</th>
            <th> DZ </th>
            <th> Altitude </th>
            <th> Tempo QL </th>
          </tr>
          <tr>
            <td> <input type="text" placeholder='Salto no.' maxLength='5' /> </td>
            <td> <input type="text" placeholder='Área de salto' maxLength='30' /> </td>
            <td> <input type="text" placeholder='Altitude' maxLength='6' /> </td>
            <td> <input type="text" placeholder='Tempo de Queda livre' maxLength='10' /> </td>
          </tr>
        </table>
      </div>

      <div className='table2'>
        <table>
          <tr>
            <th> Data</th>
            <th> Aeronave </th>
            <th> Equipamento </th>
            <th> Tempo Total </th>
          </tr>
          <tr>
            <td> <input type="date" placeholder='Data' maxLength='12' /></td>
            <td> <input type="text" placeholder='Aeronave' maxLength='20' /> </td>
            <td> <input type="text" placeholder='Equipamento' maxLength='10' /> </td>
            <td> <input type="text" placeholder='Tempo total' maxLength='10' /> </td>
          </tr>
        </table>
      </div>
        <br />
      <div className='inputs'>
        <textarea className="TipoSalto" cols='50' rows='2' placeholder='Tipo de Salto'/> <br />
        <textarea className="Descricao" cols="50" rows="15" placeholder='Descrição Salto'></textarea>
        <br />
      </div>

    <div className='btn_caderneta'> 
        <button> Imprimir caderneta em Branco</button>    
        <button onClick={printCaderneta}> Imprimir caderneta preenchida </button>
        
      </div>
    </section>
  </div>
  <Footer />
  </>
    )
}

export default Caderneta