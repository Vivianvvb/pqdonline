import {Link} from 'react-router-dom'
import {useState} from 'react'
import Header from "../MainComponents/header"
import Footer from "../MainComponents/footer"
import { useReactToPrint } from 'react-to-print'
import {useRef} from 'react'
function Reserva(){
//informacoes cabeçalho    
    const [proprietario, setProprietario] = useState("");
    const [telefone, setTelefone] = useState("");
    const [tamanhoReserva, setTamanhoReserva] = useState(0);
    const [pesoMaximo, setPesoMaximo] = useState("");
    const [velocidadeMaxima, setVelocidadeMaxima] = useState(0);
//informacoes reserva
    const [fabricanteReserva, setFabricanteReserva] = useState("");
    const [modeloReserva, setModeloReserva] = useState("");
    const [serieReserva, setSerieReserva] = useState(0);
    const [dataFabricacaoReserva, setDataFabricacaoReserva] = useState("");
//Informacoes Harness
    const [fabricanteHarness, setFabricanteHarness] = useState("");
    const [modeloHarness, setModeloHarness] = useState("");
    const [serieHarness, setSerieHarness] = useState(0);
    const [dataFabricacaoHarness, setDataFabricacaoHarness] = useState("");
//Informacoes DAA
    const [fabricanteDaa, setFabricanteDaa] = useState("");
    const [modeloDaa, setModeloDaa] = useState("");
    const [serieDaa, setSerieDaa] = useState(0);
    const [dataFabricacaoDaa, setDataFabricacaoDaa] = useState("");
//informaçoes Caderneta
//Linha 1
    const [data1, setData1] = useState("");
    const [local1, setLocal1] = useState("");
    const [rigger1, setRigger1] = useState("");
    const [servico1, setServico1] = useState("");
    const [assinatura1, setAssinatura1] = useState("");
//Linha 2
    const [data2, setData2] = useState("");
    const [local2, setLocal2] = useState("");
    const [rigger2, setRigger2] = useState("");
    const [servico2, setServico2] = useState("");
    const [assinatura2, setAssinatura2] = useState("");
//Linha 3
    const [data3, setData3] = useState("");
    const [local3, setLocal3] = useState("");
    const [rigger3, setRigger3] = useState("");
    const [servico3, setServico3] = useState("");
    const [assinatura3, setAssinatura3] = useState("");

//Funcao imprimir em branco
const componentRef = useRef();

const ImprimirBranco = useReactToPrint({content: () => componentRef.current})

//Função imprimir preenchido
const ImprimirReserva = () => {
        console.log("imprimiu preenchido")
        window.print(); 
}


    return(
        <>
      <Header />
    <div className="main_div">
    <section className='cadernetaReserva'> 

      <h2>CADERNETA DO RESERVA </h2>
      <div className='tablereserva' ref={componentRef}> 
        <div className="container">
            <label>Nome Proprietário: </label><input type="text" maxLength='50px' onChange={(e) => setProprietario(e.target.value)} /> <br />
            <label> Telefone Contato: </label><input type="text" maxLength='50px' onChange={(e) => setTelefone(e.target.value)}/> <br />
            <p> <strong>MANTENHA-SE NAS LIMITAÇÕES DO RESERVA </strong></p>
            <label> Tamanho do reserva: </label><input type="text" maxLength='50px' onChange={(e) => setTamanhoReserva(e.target.value)}/> <br />
            <label> Peso máximo do reserva: </label><input type="text" maxLength='50px' onChange={(e) => setPesoMaximo(e.target.value)}/> <br />
            <label> Velocidade máxima de comando: </label><input type="text" maxLength='50px' onChange={(e) => setVelocidadeMaxima(e.target.value)}/>
        </div>
        
        <div className="table1">
        <table>
          <tbody>
          <tr>
            <th> Fabricante do reserva </th>
            <th> Modelo do reserva </th>
            <th> No. de série do reserva </th>
            <th> Data de fabricação do reserva </th>
          </tr>
          
          <tr>
            <td> <input type="text" className='FabricanteReserva' placeholder='Fabricante Reserva' maxLength='5' onChange={(e) => setFabricanteReserva(e.target.value)}/> </td>
            <td> <input type="text" className='ModeloReserva' placeholder='Modelo Reserva' maxLength='30' onChange={(e) => setModeloReserva(e.target.value)}/> </td>
            <td> <input type="text" className='NoSerieReserva' placeholder='No de serie' maxLength='6' onChange={(e) => setSerieReserva(e.target.value)}/> </td>
            <td> <input type="date" className='DataFabricacaoReserva' placeholder='Data de fabricação' maxLength='10' onChange={(e) => setDataFabricacaoReserva(e.target.value)}/> </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className='table2'>
        <table>
          <tbody>
          <tr>
            <th> Fabricante do Harness</th>
            <th> Modelo do Harness </th>
            <th> Número de série Harness </th>
            <th> Data fabricação Harness </th>
          </tr>

          <tr>
          <td> <input type="text" className='FabricanteHarness' placeholder='Fabricante Harness' maxLength='5' onChange={(e) => setFabricanteHarness(e.target.value)}/> </td>
            <td> <input type="text" className='ModeloHarness' placeholder='Modelo Harness' maxLength='30' onChange={(e) => setModeloHarness(e.target.value)}/> </td>
            <td> <input type="text" className='NoSerieHarness' placeholder='No de serie' maxLength='6' onChange={(e) => setSerieHarness(e.target.value)}/> </td>
            <td> <input type="date" className='DataFabricacaoHarness' placeholder='Data de fabricação' maxLength='10' onChange={(e) => setDataFabricacaoHarness(e.target.value)}/> </td>          </tr>
        </tbody>
        </table>
      </div>

      <div className='table3'>
        <table>
          <tbody>
          <tr>
            <th> Fabricante do DAA </th>
            <th> Modelo do DAA </th>
            <th> Número de série DAA </th>
            <th> Data fabricação DAA </th>
          </tr>
          
          <tr>
          <td> <input type="text" className='FabricanteDaa' placeholder='Fabricante DAA' maxLength='5' onChange={(e) => setFabricanteDaa(e.target.value)}/> </td>
            <td> <input type="text" className='ModeloDaa' placeholder='Modelo DAA' maxLength='30' onChange={(e) => setModeloDaa(e.target.value)}/> </td>
            <td> <input type="text" className='NoSerieDaa' placeholder='No de serie DAA' maxLength='6' onChange={(e) => setSerieDaa(e.target.value)}/> </td>
            <td> <input type="date" className='DataFabricacaoDaa' placeholder='Data de fabricação' maxLength='10' onChange={(e) => setDataFabricacaoDaa(e.target.value)}/> </td>          </tr>
        </tbody>
        </table>
      </div>

      <div className='table4'>
        <table>
          <tbody>
          <tr>
            <th> Data </th>
            <th> Local </th>
            <th> Rigger </th>
            <th> Serviço </th>
            <th> Assinatura Rigger </th>           
          </tr>
          
          <tr>
          <td> <input type="date" placeholder='Data' maxLength='5' onChange={(e) => setData1(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Local' maxLength='30' onChange={(e) => setLocal1(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Rigger' maxLength='20' onChange={(e) => setRigger1(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Serviço' maxLength='20' onChange={(e) => setServico1(e.target.value)}/> </td>          
            <td> <input type="text" placeholder='Assinatura' maxLength='20' onChange={(e) => setAssinatura1(e.target.value)}/> </td>          
          </tr>

          <tr>
          <td> <input type="date" placeholder='Data' maxLength='5' onChange={(e) => setData2(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Local' maxLength='30' onChange={(e) => setLocal2(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Rigger' maxLength='20' onChange={(e) => setRigger2(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Serviço' maxLength='20' onChange={(e) => setServico2(e.target.value)}/> </td>          
            <td> <input type="text" placeholder='Assinatura' maxLength='20' onChange={(e) => setAssinatura2(e.target.value)}/> </td>          
          </tr>

          <tr>
          <td> <input type="date" placeholder='Data' maxLength='5' onChange={(e) => setData3(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Local' maxLength='30' onChange={(e) => setLocal3(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Rigger' maxLength='20' onChange={(e) => setRigger3(e.target.value)}/> </td>
            <td> <input type="text" placeholder='Serviço' maxLength='20' onChange={(e) => setServico3(e.target.value)}/> </td>          
            <td> <input type="text" placeholder='Assinatura' maxLength='20' onChange={(e) => setAssinatura3(e.target.value)}/> </td>          
          </tr>
        </tbody>
        </table>
        </div>
      </div>
      
      <div className='btn_reserva'>   
        <button onClick={ImprimirReserva}> Imprimir caderneta do reserva Preenchida</button>    
        <button onClick={ImprimirBranco}> Imprimir caderneta em branco </button>
      </div>

    </section>
    </div>  
    <Footer />
        </>
    )
  }

export default Reserva