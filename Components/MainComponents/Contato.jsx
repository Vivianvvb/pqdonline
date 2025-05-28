import React from "react"
import Header from  '../MainComponents/header.jsx'
import Footer from '../MainComponents/footer.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import {Link} from "react-router-dom"
import { useReactToPrint } from 'react-to-print'
import {useRef} from 'react'

function Contato() {


    return(
        <>
        <Header />
        <h2> Contato</h2>
        <p> Quer falar com o time da Paraquedistas Online?</p>
        <p>Envie e-mail para: comercial@setordois.com </p>
        <Footer />
        </>
    )
}

export default Contato