import React from "react"
import Header from  '../MainComponents/header.jsx'
import Footer from '../MainComponents/footer.jsx'
import {Link} from "react-router-dom"
import { useState } from "react"

function DicasCanais() {
    //Canal ABRA
    const [videoAbra1, setVideoAbra1] = useState('')
    const [videoAbra2, setVideoAbra2] = useState('')
    const [indexAbra1, setIndexAbra1] = useState(0)
    const [indexAbra2, setIndexAbra2] = useState(0)

    const listaVideoAbra = [{
        videoAbra: 'https://www.youtube.com/embed/zjLBUiWv09g'
    },{
        videoAbra: 'https://www.youtube.com/embed/FIhV0YIA-Vg&t=9s' 
    },{
        videoAbra: 'https://www.youtube.com/embed/Z9l-MC7aXDE&t=21s'
    },{
        videoAbra: 'https://www.youtube.com/embed/ZCCBSq3uJMc'
    },{
        videoAbra: 'https://www.youtube.com/embed/dmSmImD_YSQ'
    },{
        videoAbra: 'https://www.youtube.com/embed/Wb_FwCP7oRY&t=24s'
    },{
        videoAbra: 'https://www.youtube.com/embed/38OSQDziuTI'
    },{
        videoAbra: 'https://www.youtube.com/embed/vdzYo7qIGpM'
    },{
        videoAbra: 'https://www.youtube.com/embed/NYpt5r7NgFM'
    },{
        videoAbra: 'https://www.youtube.com/embed/6Iy-gTr5UDw'
    }]

    const nextVideoAbra = () => {
    setIndexAbra1(Math.floor(Math.random() * listaVideoAbra.length))
    setVideoAbra1(listaVideoAbra[indexAbra1].videoAbra)
    setIndexAbra2(indexAbra1 + 1)
    if(indexAbra2 < listaVideoAbra.length) {
        setIndexAbra2(indexAbra1 - 2)
    } 
    setVideoAbra2(listaVideoAbra[indexAbra2].videoAbra)
    }


    //Canal ABRA Convidados
    const [videoAbraConvidado1, setVideoAbraConvidado1] = useState('')
    const [videoAbraConvidado2, setVideoAbraConvidado2] = useState('')
    const [indexAbraConvidado1, setIndexAbraConvidado1] = useState(0)
    const [indexAbraConvidado2, setIndexAbraConvidado2] = useState(0)

    const listaVideoAbraConvidado = [{
        videoAbraConvidado: 'https://www.youtube.com/embed/FrQKnReOYzo'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/E2WGJiQ228M' 
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/1T65PaYztSk'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/mx3hm3GU-fA'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/06gVmWTfaE8'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/Du7qaawPjf4'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/KAj2pwEmLGA'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/by6J7Bqe7TQ'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/HhlT0eVYCYU'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/EKIXfspURFo'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/n5BEtUkHyuo'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/udUkJdH19ao'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/7BSl4wSl6Uo'
    },{
        videoAbraConvidado: 'https://www.youtube.com/embed/xyAmDcCB2hY'
    }]

    const nextVideoAbraConvidado = () => {
    setIndexAbraConvidado1(Math.floor(Math.random() * listaVideoAbraConvidado.length))
    setVideoAbraConvidado1(listaVideoAbraConvidado[indexAbraConvidado1].videoAbraConvidado)
    setIndexAbraConvidado2(indexAbraConvidado1 + 1)
    if(indexAbraConvidado2 < listaVideoAbraConvidado.length) {
        setIndexAbraConvidado2(indexAbraConvidado1 - 2)
    } 
    setVideoAbraConvidado2(listaVideoAbraConvidado[indexAbraConvidado2].videoAbraConvidado)
    }

    //Canal ABRA Safety
    const [videoAbraSafety1, setVideoAbraSafety1] = useState('')
    const [videoAbraSafety2, setVideoAbraSafety2] = useState('')
    const [indexAbraSafety1, setIndexAbraSafety1] = useState(0)
    const [indexAbraSafety2, setIndexAbraSafety2] = useState(0)

    const listaVideoAbraSafety = [{
        videoAbraSafety: 'https://www.youtube.com/embed/3NzdjSsD-ug&t=1984s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/fOCnI-nAoz4' 
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/PMgbF4IMUFA'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/X2pZCTqbt20&t=1571s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/LmM9ANA5ze4'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/oedPAbUcPTU'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/T6uGmmNqluo'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/QVpOhmiClmY&t=2081s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/Ts8-ZgSDl_s&t=150s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/Vh1sg7DpfAE&t=3958s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/LTCMBflNNv4&t=1579s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/e9ECqVKbx5U&t=4121s'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/-npbWdiPlw8'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/XY22V-ylBmM'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/9--NE6NiguI'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/tU6vUS5rzPk'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/WRjgATLvBzI'
    },{
        videoAbraSafety: 'https://www.youtube.com/embed/LG1fOse_pmE&t=12s'
    }]

    const nextVideoAbraSafety = () => {
    setIndexAbraSafety1(Math.floor(Math.random() * listaVideoAbraSafety.length))
    setVideoAbraSafety1(listaVideoAbraSafety[indexAbraSafety1].videoAbraSafety)
    setIndexAbraSafety2(indexAbraSafety1 + 1)
    if(indexAbraSafety2 < listaVideoAbraSafety.length) {
        setIndexAbraSafety2(indexAbraSafety1 - 2)
    } 
    setVideoAbraSafety2(listaVideoAbraSafety[indexAbraSafety2].videoAbraSafety)
    }

        //Canal APF
    const [videoApf1, setVideoApf1] = useState('')
    const [videoApf2, setVideoApf2] = useState('')
    const [indexApf1, setIndexApf1] = useState(0)
    const [indexApf2, setIndexApf2] = useState(0)

    const listaVideoApf = [{
        videoApf: 'https://www.youtube.com/embed/PTYsjH7DSVA&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=1'
    },{
        videoApf: 'https://www.youtube.com/embed/MZx3lN-lwok&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=2' 
    },{
        videoApf: 'https://www.youtube.com/embed/TsxYEbLNh_8&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=3'
    },{
        videoApf: 'https://www.youtube.com/embed/YD1we-F9-3c&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=4'
    },{
        videoApf: 'https://www.youtube.com/embed/gpZ_GeJ1rxk&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=5'
    },{
        videoApf: 'https://www.youtube.com/embed/UL87Ceo02L4&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=6'
    },{
        videoApf: 'https://www.youtube.com/embed/iBNf-HsD3Ms&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=7'
    },{
        videoApf: 'https://www.youtube.com/embed/S4x1ptlBF1Q&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=8'
    },{
        videoApf: 'https://www.youtube.com/embed/79TWUxK1q2o&list=PLHdmFp89rAHBsZwLtEzkZ8wWeRk7GCrTt&index=9'
    }]

    const nextVideoApf = () => {
    setIndexApf1(Math.floor(Math.random() * listaVideoApf.length))
    setVideoApf1(listaVideoApf[indexApf1].videoApf)
    setIndexApf2(indexApf1 + 1)
    if(indexApf2 < listaVideoApf.length) {
        setIndexApf2(indexApf1 - 2)
    } 
    setVideoApf2(listaVideoApf[indexApf2].videoApf)
    }

    return(
        <>
        <Header />
        
<section className='video-aulas'> 
    <h1> Vídeo-Aulas </h1>
    <p> Encontre aqui materiais extra de estudo e curiosidades, no formato de vídeos. Tudo está separado por tópicos, para facilitar sua busca. </p> <br/>

    <div className='main_div' id='btnVideoAulasRecomendados'>
        <h2> Os conteúdos mais recomendados estão aqui.</h2>
        <button> Canal Oficial ABRA </button> 
        <button> ABRA e convidados </button> 
        <button> ABRA Safety Meetings </button>
        <button> APF Cutaway </button>
        <p> Acesse agora para começas a aprender!</p>
        <br/>
    </div>
<br/>
    <div className='main_div' id='btnVideoAulas'>
        <h3> ACHE SEU CANAL EM ORDEM ALFABÉTICA.</h3>
        <Link to="https://www.youtube.com/@abraparaquedas6033" target="_blank"><button> ABRA - Canal Oficial </button> </Link>
        <Link to="https://www.youtube.com/@academiabrasileiradeparaqu3866" target="_blank"><button> ABRA e convidados </button></Link>
        <Link to="https://www.youtube.com/@abraparaquedas6033" target="_blank"><button> ABRA - Safety Meetings </button></Link>
        <Link to="https://www.youtube.com/@APFskydiver" target="_blank"><button> APF Cutaway </button></Link>
        <Link to="https://www.youtube.com/@blueskiesfundays2671" target="_blank"><button> Blue Skies - Fun Day </button></Link>
        <Link to="https://www.youtube.com/@Brian-Germain" target="_blank"><button> Brian Saint Germain </button></Link>
        <Link to="https://www.youtube.com/@TEEMsky" target="_blank"><button> Friday Freakout </button></Link>
        <Link to="https://www.youtube.com/@skyradical" target="_blank"><button> O homem aventura </button></Link>
        <Link to="https://www.youtube.com/playlist?list=PLLovuj_Rlcj0pbsY4-Pjems9jr69l6Vkc" target="_blank"><button> Pau na Máquina </button></Link>
        <Link to="https://www.youtube.com/@aeroesportebrasil2184" target="_blank"><button> Wind Up </button> </Link>
        <p> Ache aqui o melhor canal para você melhorar sua segurança e performance nos saltos!</p>
    </div>
<br/>
    <div className='main_div' id='canalABRA1'>
    <h2> CANAL DA ABRA </h2>  
        <p> Veja os melhores vídeos de instrução da Academia Brasileira de Paraquedismo. </p>
        <iframe width="420" height="315" src={videoAbra1}> </iframe> 
        <iframe width="420" height="315" src={videoAbra2}> </iframe> <br/>
        <button onClick={nextVideoAbra}> Veja mais Videos da ABRA </button>
        <Link to="https://www.youtube.com/@abraparaquedas6033"><button> Página - Canal ABRA Youtube </button></Link>
    </div>
<br/>
    <div className='main_div' id='canalABRA2'>
    <h3> CANAL DA ABRA - Convidados </h3>  
        <p> Veja os melhores vídeos com convidados, da Academia Brasileira de Paraquedismo. </p>
        <iframe width="300" height="200" src={videoAbraConvidado1}> </iframe>
        <iframe width="300" height="200" src={videoAbraConvidado2}> </iframe> <br/>
        <button onClick={nextVideoAbraConvidado}> Veja mais Videos de Convidades da ABRA </button>"
        <Link to="https://www.youtube.com/@academiabrasileiradeparaqu3866" target="_blank"><button> Página - Canal Convidados ABRA Youtube </button></Link>"
    </div>
<br/>
    <div className='main_div' id='canalABRA3'>
    <h3> CANAL DA ABRA - Safety Meetings </h3>  
        <p> Veja as Safety Meetings realizadas durante a Pandemia, com os melhores instrutores do Brasil. </p>
        <iframe width="300" height="200" src={videoAbraSafety1}> </iframe>
        <iframe width="300" height="200" src={videoAbraSafety2}> </iframe> <br/>
        <button onClick={nextVideoAbraSafety}> Veja mais Videos de Safety Meeting </button>
        <Link to="https://www.youtube.com/@abraparaquedas6033"><button> Página - Canal Meetings ABRA Youtube </button></Link>
    </div>
<br/>
    <div className="main_div" id='apf'>
    <h3> APF - CUTAWAY </h3>  
        <p> Veja o material da APF sobre Emergências. </p>
        <iframe width="300" height="200" src= {videoApf1}> </iframe>
        <iframe width="300" height="200" src={videoApf2}> </iframe> <br/>
       <button onClick={nextVideoApf}> Veja mais Videos de Safety Meeting </button>
        <Link to="https://www.youtube.com/@APFskydiver"><button> Página - Canal APF Youtube </button></Link>
    </div>

</section>
        <Footer />
        </>
    )
}

export default DicasCanais