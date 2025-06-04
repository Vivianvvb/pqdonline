import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import './index.css';
//Main Components
import App from './App.jsx';

import Contato from './Components/MainComponents/Contato.jsx'

//Ferramentas
import Vento from "./Components/Ferramentas/Vento.jsx"
import CargaAlar from "./Components/Ferramentas/CargaAlar.jsx";
import Reserva from "./Components/Ferramentas/Reserva.jsx"
import Caderneta from "./Components/Ferramentas/Caderneta.jsx"
//Estude Aqui
import EstudeAqui from './Components/EstudeAqui/EstudeAqui.jsx'
import Provas from './Components/EstudeAqui/Provas.jsx'
import DicasCanais from './Components/EstudeAqui/DicasCanais.jsx'
import FichasProgressao from './Components/EstudeAqui/FichasProgressao.jsx'
import Simulados from './Components/EstudeAqui/Simulados.jsx'
import SimuladosArray from './Components/EstudeAqui/SimuladosArray.jsx';
//Provas
import ProvaAff from "./files/ProvaAff.pdf"
import ProvaCatA from "./files/ProvaCatA.pdf"
import ProvaCatB from "./files/ProvaCatB.pdf"
import ProvaCatC from "./files/ProvaCatC.pdf"
import ProvaCatD from "./files/ProvaCatD.pdf"
//Provas
import FichaProgA from "./files/fichaProgA.pdf"
import FichaProgB from "./files/fichaProgB.pdf"
import FichaProgC from "./files/fichaProgC.pdf"
import FichaProgD from "./files/fichaProgD.pdf"
//renderização dos componentes
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter basename="/pqdonline/">

  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contato" element={<Contato />} />

      <Route path="/CargaAlar" element={<CargaAlar />} />
      <Route path="/Vento" element={<Vento />} />
      <Route path="/Reserva" element={<Reserva />} /> 
      <Route path="/Caderneta" element={<Caderneta />} />  

      <Route path="/EstudeAqui" element={<EstudeAqui />} />  
      <Route path="/Provas" element={<Provas />} />  
      <Route path="/DicasCanais" element={<DicasCanais />} />  
      <Route path="/FichasProgressao" element={<FichasProgressao />} />  
      <Route path="/Simulados" element={<Simulados />} />    
      <Route path="/SimuladosArray" element={<SimuladosArray />} /> 

      <Route path="/ProvaCatA" element={<ProvaCatA />} /> 
      <Route path="/ProvaCatB" element={<ProvaCatB />} /> 
      <Route path="/ProvaCatC" element={<ProvaCatC />} /> 
      <Route path="/ProvaCatD" element={<ProvaCatD />} /> 
      <Route path="/ProvAff" element={<ProvaAff />} />    

      <Route path="/FichaProgA" element={<FichaProgA />} /> 
      <Route path="/FichaProgB" element={<FichaProgB />} /> 
      <Route path="/FichaProgC" element={<FichaProgC />} /> 
      <Route path="/FichaProgD" element={<FichaProgD />} /> 
  </Routes> 

  </BrowserRouter>  
  </StrictMode>,
);
