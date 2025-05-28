import React from "react"
import Header from  '../MainComponents/header.jsx'
import Footer from '../MainComponents/footer.jsx'
import {Link} from "react-router-dom"
import { useState } from "react"
import FichaProgA from "../../files/fichaProgA.pdf"
import FichaProgB from "../../files/fichaProgB.pdf"
import FichaProgC from "../../files/fichaProgC.pdf"
import FichaProgD from "../../files/fichaProgD.pdf"

function FichasProgressao() {

    const [question, setQuestion] = useState("Clique no botão para gerar uma pergunta aleatória sobre paraquedismo.")
    const [answer, setAnswer] = useState("")
    const [enableAnswer, setEnableAnswer] = useState(false)
    const [opcaoFicha, setOpcaoFicha] = useState("")

    let quizz = []

const fichaA = [{
        materia: "Equipamento",
        question: "Briefing sobre cálculo de carga alar",
        answer: "Carga alar é a relação entre o peso total do paraquedista (incluindo equipamentos) e a área da vela do paraquedas. Ela influencia diretamente o desempenho do paraquedas, como a velocidade de descida e a manobrabilidade. A carga alar é calculada dividindo-se o peso total (em libras) pela área da vela (em pés quadrados). A fórmula é: Carga Alar = Peso Total (lbs) / Área da Vela (ft²). Por exemplo, um paraquedista com 170 libras saltando com uma vela de 170 ft² terá uma carga alar de 1.0."
    },{
        materia: "Aeronave",
        question: "Demonstrou compreensão sobre necessidade de cinto de segurança e capacete para decolar",
        answer: "O uso do cinto de segurança e do capacete durante a decolagem é fundamental para garantir a segurança do paraquedista. O cinto de segurança evita que o ocupante seja projetado dentro da aeronave em caso de turbulência, manobras bruscas ou imprevistos durante a corrida de decolagem. Já o capacete protege contra possíveis impactos dentro da aeronave, como colisões com partes da estrutura, equipamentos ou outros ocupantes, especialmente em situações de emergência ou movimentações repentinas. Esses equipamentos são medidas preventivas simples, mas essenciais para minimizar riscos antes do salto propriamente dito."
    },{
        materia: "Aeronave",
        question: "Demonstrou compreensão sobre padrões de decolagem e lançamento das aeronaves",
        answer: "Os padrões de decolagem e lançamento das aeronaves no paraquedismo seguem procedimentos específicos para garantir a segurança de todos a bordo e a eficiência da operação. Durante a decolagem, a aeronave deve seguir uma rota pré-estabelecida, evitando áreas povoadas e respeitando as altitudes mínimas até atingir a zona de lançamento. O piloto mantém comunicação constante com o controle de tráfego aéreo (quando aplicável) e segue um plano de voo coordenado com o centro de paraquedismo. No momento do lançamento, a aeronave deve estar estabilizada em velocidade e altitude adequadas, contra o vento, e posicionada corretamente sobre a área de salto. O piloto e os paraquedistas devem trabalhar em conjunto para garantir uma saída segura, respeitando as ordens de salto e evitando interferências no espaço aéreo. Esses padrões são essenciais para a segurança dos saltos e o bom funcionamento das operações aéreas."
    },{
        materia: "Aeronave",
        question: "Briefing sobre vento de camada",
        answer: "1) O vento de camada é o vento presente nas altitudes intermediárias entre o solo e a altitude de lançamento. Ele pode ter direção e intensidade diferentes do vento no solo, influenciando diretamente a trajetória do voo do paraquedista e a navegação até a zona de pouso. Durante o salto, o paraquedista atravessa diferentes camadas de vento. Compreender como essas camadas se comportam é essencial para planejar a navegação, especialmente no voo sob velame. Por exemplo, ventos de camada mais fortes podem desviar significativamente o paraquedista da rota prevista, exigindo correções de trajetória. A leitura do vento de camada é geralmente feita por meio de balões meteorológicos, informações de estações meteorológicas locais, ou observando saltos anteriores. É fundamental considerar esses dados durante o planejamento do salto para escolher corretamente o ponto de saída da aeronave e garantir um pouso seguro e dentro da área destinada. 2) Resumo: Vento de camada = vento entre o solo e a altitude de salto; Pode diferir do vento no solo; Afeta a navegação e o local de pouso; Deve ser analisado no briefing antes do salto."
    },{
        materia: "Aeronave",
        question: "Briefing sobre peso e balanceamento, efeito nos comandos quando há paraquedistas do lado de fora da aeronave, reta de lançamento, ponto de saída e radiocomunicação",
        answer: "1) Peso e Balanceamento: É fundamental garantir que a aeronave esteja devidamente balanceada antes e durante o voo. O posicionamento dos paraquedistas deve ser distribuído conforme as orientações do piloto, para evitar deslocamento excessivo do centro de gravidade da aeronave, o que pode comprometer a estabilidade e a segurança do voo. Movimentos bruscos dentro da cabine ou concentração de peso em uma área só (como todos paraquedistas sentados no fundo) devem ser evitados. 2) Efeito nos Comandos com Paraquedistas do Lado de Fora: Quando paraquedistas estão posicionados fora da aeronave (na porta ou na asa, por exemplo), isso afeta significativamente a aerodinâmica e o controle da aeronave, especialmente o comando de leme e profundor. O piloto pode sentir dificuldade em manter a atitude de voo estável, e por isso, a permanência nessa posição deve ser breve. A saída deve ocorrer de forma coordenada, rápida e segura, conforme o sinal do piloto. 3) Reta de Lançamento: A reta de lançamento é o momento em que a aeronave voa em linha reta, nivelada e estável, na direção planejada para a saída dos paraquedistas. Essa fase deve ocorrer com antecedência suficiente antes do ponto de saída, permitindo a estabilização do avião e a preparação dos ocupantes. É crucial que a aeronave esteja no rumo certo, geralmente contra o vento, e mantendo uma velocidade e altitude constantes. 4) Ponto de Saída: O ponto de saída é o local exato sobre o terreno onde os paraquedistas iniciam a saída da aeronave. Ele é calculado com base na direção e velocidade do vento (incluindo vento de camada), no tipo de salto e na experiência dos paraquedistas. Um ponto de saída bem definido garante que todos alcancem a zona de pouso com segurança e evita derivações para áreas inadequadas ou perigosas. 5) Radiocomunicação: A comunicação por rádio entre piloto, coordenador de salto e, quando aplicável, o controle de tráfego aéreo, é essencial para a segurança da operação. Durante o voo, o piloto deve manter comunicação clara sobre a altitude, local da aeronave e momento da liberação. Após o salto, o rádio pode ser usado para coordenar emergências, alertar sobre problemas no tráfego aéreo ou orientar correções."
    },{
        materia: "Navegacao",
        question: "Demonstrou capacidade de rolamento em um pouso",
        answer: "Rolamento de Cinco Pontos no Paraquedismo: O rolamento de cinco pontos, também conhecido como queda amortecida com rolagem, é uma técnica fundamental utilizada para absorver o impacto ao pousar de paraquedas, especialmente em situações de pouso fora da área prevista ou em terrenos irregulares. Essa técnica ajuda a dissipar a energia do impacto por meio de uma sequência controlada de contato com o solo, reduzindo o risco de lesões nas pernas, tornozelos, joelhos e coluna. É essencial especialmente para iniciantes ou em pousos de emergência. Os cinco pontos de contato, na ordem correta, são: Ponta dos pés, Panturrilha, Coxa, Quadril, Ombro oposto. A rolagem deve ser realizada sempre na direção lateral, nunca para frente ou para trás. O objetivo é transformar a energia da queda vertical em movimento horizontal, usando o corpo de forma eficiente e segura.Importante: Mantenha os pés e joelhos juntos no momento do toque no solo; O corpo deve estar relaxado, mas pronto para reagir; A cabeça deve ser protegida com o queixo próximo ao peito; A rolagem deve ser fluida, contínua e na direção do ombro oposto ao pé que tocou primeiro o chão; Essa técnica é treinada repetidamente no solo (em colchonetes) durante a instrução de paraquedismo e deve ser praticada regularmente para garantir uma execução eficiente em situações reais."
    },{
        materia: "Navegacao",
        question: "Briefing e execução de curva rasa (flat turn)",
        answer: "A curva rasa, ou flat turn, é uma técnica utilizada sob velame para mudar de direção sem perder muita altitude. Ela é essencial para evitar obstáculos, corrigir o trajeto na aproximação para o pouso ou manobrar com segurança em baixas altitudes. Essa manobra é especialmente importante em emergências, quando o paraquedista precisa desviar de árvores, construções ou outros perigos, mas não tem altura suficiente para fazer uma curva acentuada ou completa. EXECUÇÕ DA CURVA RASA (Flat Turn): 1)Altitude: Verifique sua altitude antes de iniciar a curva. A flat turn deve ser feita com consciência situacional, especialmente abaixo de 1.000 pés, onde decisões precisam ser mais conservadoras. 2) Comando Simultâneo: Puxe levemente os dois comandos para baixo (entrada simétrica), reduzindo ligeiramente a velocidade vertical. Isso aumenta a sustentação do velame e reduz a taxa de queda. 3) Início da Curva: Com os dois comandos ainda levemente puxados, aplique um pouco mais de comando no lado da direção desejada\ (por exemplo, mais no direito para virar à direita), mantendo o outro levemente pressionado. 4) Controle e Suavidade: Mantenha a pressão moderada e constante – o objetivo é curvar suavemente, com **mínima perda de altitude**. Evite puxar apenas um comando com força, pois isso gera uma curva acentuada com grande perda de altura. 5) Finalização: Retorne os comandos à posição neutra lentamente, recuperando a trajetória reta com estabilidade. PONTOS-CHAVE:1) Nunca faça curvas acentuadas em baixa altitude.2) Use a flat turn para **evitar obstáculos ou realinhar o pouso** de forma segura. 3) Treine a manobra em altitudes mais altas para entender sua resposta e perda mínima de altura. 4) Mantenha calma e controle: a precisão da curva depende da sensibilidade no uso dos comandos. 5)A curva rasa é uma habilidade crítica que todo paraquedista deve dominar para ampliar a segurança e a capacidade de reação em situações inesperadas perto do solo."
    },{
        materia: "Navegacao",
        question: "Briefing e execução de curvas de tirantes (traseiro - freios feitos e desfeitos)",
        answer: "As curvas com tirantes traseiros são manobras realizadas puxando um dos tirantes traseiros do velame, em vez de usar os comandos convencionais (freios). Essa técnica é usada para pequenas correções de direção, especialmente em situações onde se quer preservar altitude, manter a performance do velame ou durante o pouso em cenários avançados. Elas podem ser feitas com os freios desfeitos (comandos soltos) ou até mesmo com os freios feitos (batoques alojados). Execução de Curva com Tirantes Traseiros: 1) Pré-requisitos e segurança: Altitude suficiente (acima de 2.500 pés para treinamento); Condições do velame normais e abertas corretamente; Comandos totalmente soltos ou apenas segurando, sem aplicar pressão (freios “feitos”, mas braços relaxados). 2) Início da curva: Identifique a direção desejada (ex: direita); Alcance com uma ou ambas as mãos os tirantes traseiros do velame; Puxe levemente e progressivamente o tirante traseiro do lado desejado (direito para virar à direita); A curva será **ampla, suave e com perda mínima de altitude**, mantendo maior velocidade horizontal em comparação com curvas com comandos. 3) Controle e finalização: Mantenha a tração conforme a necessidade de correção; Para parar a curva, **libere suavemente o tirante traseiro**, retornando o velame à linha reta; Sempre observe a resposta do velame e ajuste a força de tração conforme necessário. Importante: Evite curvas bruscas com tirantes traseiros próximos ao solo, a menos que esteja treinado e em cenário controlado; Sempre monitore o tráfego ao seu redor ao manobrar sob velame; Pratique essas curvas em altitude segura para ganhar confiança e controle. Essa técnica é uma ferramenta avançada para manobras eficientes e deve ser incorporada ao conjunto de habilidades de todo paraquedista progressivamente."
    },{
        materia: "Navegacao",
        question: "Briefing e execução de navegação a meio freio",
        answer: "A navegação a meio freio é uma técnica utilizada sob velame para reduzir a velocidade de deslocamento horizontal e vertical do paraquedista, proporcionando um voo mais lento e estável. É especialmente útil em situações como: Ajuste fino do trajeto até a área de pouso; Redução da taxa de afundamento para aumentar o tempo de voo; Condições de vento fraco ou navegação em áreas restritas. Essa técnica deve ser feita com consciência situacional e altitude suficiente, pois a aplicação de freio altera o desempenho do velame. EXECUÇÃO: 1) Altitude Segura: Aplique essa técnica **acima de 1.000 pés** durante a navegação intermediária, nunca muito próximo ao solo. 2) Ponto de Início: Com o velame estabilizado e em voo reto, **puxe ambos os comandos simultaneamente e de forma leve**, até aproximadamente **25% a 50% do curso total** – essa é a zona de meio freio. 3) Sensação e Ajuste: Você notará uma **redução na velocidade de deslocamento horizontal** e uma **queda mais lenta**. O velame ficará mais gordo e com maior sustentação, o que ajuda a manter-se no ar por mais tempo. 4) Manutenção: Mantenha essa posição com **pressão constante e controlada**. Evite movimentos bruscos para não desestabilizar o velame. 5) Correção de Direção: Para manobrar enquanto navega a meio freio, aplique **levemente mais freio em um dos lados**, mantendo o outro constante. Isso permite pequenas curvas com mínima perda de altura. 6) Saída da Navegação: Quando quiser retomar o voo em velocidade normal, **libere os comandos suavemente e de forma simétrica** até a posição neutra. PONTOS DE ATENÇÃO: A navegação a meio freio **não deve ser usada no pouso final** – retorne ao voo normal e realize a arremetida final com os freios de forma progressiva; Em velames elípticos ou de alta performance, a resposta pode ser mais sensível – pratique com cautela; Ideal para momentos de espera (como holding) ou ajustes em ventos fracos. Essa técnica é uma ferramenta essencial para uma navegação precisa e eficiente sob velame, aumentando o controle e a segurança durante a aproximação para o pouso."
    },{
        materia: "Navegacao",
        question: "Simulação de pane de freio",
        answer: "Após o check visual, estando acima de 2.500ft e em uma boa área de espera, solte um freio e observe a reação do velame. Tente compensar o giro usando os tirantes. Prossiga soltando o outro freio e fazendo o check funcional."
    },{
        materia: "Navegacao",
        question: "Briefing sobre como identificar áreas turbulentas",
        answer: "Observe áreas que esquentam mais que outras: telhados de metal, asfalto, etc."
    }]

const fichaB = [{
        materia: "Aeronave",
        question: "Demonstrou habilidade em planejar a saída da aeronave considerando o PS, peso e balanceamento, reta de lançamento, tipo de salto, etc.",
        answer: "Página em construção"
    },{
        materia: "Aeronave",
        question: "Demonstrou habilidade em prever vento de camada e ajustar o PS",
        answer: "Página em construção: Vento de Camada e PS"
    },{
        materia: "Aeronave",
        question: "Recebeu instrução de organizar uma decolagem",
        answer: "Página em construção: Load Organizer"
    },{
        materia: "QuedaLivre",
        question: "Demonstrou habilidade em saídas estáveis de floater e mergulho",
        answer: "Página em construção: Floater e mergulho"
    },{
        materia: "QuedaLivre",
        question: "Demonstrou habilidade em curvas no eixo (perna)",
        answer: "Página em construção: Curvas no eixo"
    },{
        materia: "QuedaLivre",
        question: "Briefing para uso de câmera",
        answer: "Página em construção: Uso de camera"
    },{
        materia: "Navegacao",
        question: "Demonstrou capacidade de rolamento em um pouso",
        answer: "Rolamento de Cinco Pontos no Paraquedismo: O rolamento de cinco pontos, também conhecido como queda amortecida com rolagem, é uma técnica fundamental utilizada para absorver o impacto ao pousar de paraquedas, especialmente em situações de pouso fora da área prevista ou em terrenos irregulares. Essa técnica ajuda a dissipar a energia do impacto por meio de uma sequência controlada de contato com o solo, reduzindo o risco de lesões nas pernas, tornozelos, joelhos e coluna. É essencial especialmente para iniciantes ou em pousos de emergência. Os cinco pontos de contato, na ordem correta, são: Ponta dos pés, Panturrilha, Coxa, Quadril, Ombro oposto. A rolagem deve ser realizada sempre na direção lateral, nunca para frente ou para trás. O objetivo é transformar a energia da queda vertical em movimento horizontal, usando o corpo de forma eficiente e segura.Importante: Mantenha os pés e joelhos juntos no momento do toque no solo; O corpo deve estar relaxado, mas pronto para reagir; A cabeça deve ser protegida com o queixo próximo ao peito; A rolagem deve ser fluida, contínua e na direção do ombro oposto ao pé que tocou primeiro o chão; Essa técnica é treinada repetidamente no solo (em colchonetes) durante a instrução de paraquedismo e deve ser praticada regularmente para garantir uma execução eficiente em situações reais."
    },{
        materia: "Navegacao",
        question: "Demonstração de curva rasa (Flat Turn) em uma navegação (ponto A, B e C)",
        answer: "A curva rasa, ou flat turn, é uma técnica utilizada sob velame para mudar de direção sem perder muita altitude. Ela é essencial para evitar obstáculos, corrigir o trajeto na aproximação para o pouso ou manobrar com segurança em baixas altitudes. Essa manobra é especialmente importante em emergências, quando o paraquedista precisa desviar de árvores, construções ou outros perigos, mas não tem altura suficiente para fazer uma curva acentuada ou completa. EXECUÇÕ DA CURVA RASA (Flat Turn): 1)Altitude: Verifique sua altitude antes de iniciar a curva. A flat turn deve ser feita com consciência situacional, especialmente abaixo de 1.000 pés, onde decisões precisam ser mais conservadoras. 2) Comando Simultâneo: Puxe levemente os dois comandos para baixo (entrada simétrica), reduzindo ligeiramente a velocidade vertical. Isso aumenta a sustentação do velame e reduz a taxa de queda. 3) Início da Curva: Com os dois comandos ainda levemente puxados, aplique um pouco mais de comando no lado da direção desejada\ (por exemplo, mais no direito para virar à direita), mantendo o outro levemente pressionado. 4) Controle e Suavidade: Mantenha a pressão moderada e constante – o objetivo é curvar suavemente, com **mínima perda de altitude**. Evite puxar apenas um comando com força, pois isso gera uma curva acentuada com grande perda de altura. 5) Finalização: Retorne os comandos à posição neutra lentamente, recuperando a trajetória reta com estabilidade. PONTOS-CHAVE:1) Nunca faça curvas acentuadas em baixa altitude.2) Use a flat turn para **evitar obstáculos ou realinhar o pouso** de forma segura. 3) Treine a manobra em altitudes mais altas para entender sua resposta e perda mínima de altura. 4) Mantenha calma e controle: a precisão da curva depende da sensibilidade no uso dos comandos. 5)A curva rasa é uma habilidade crítica que todo paraquedista deve dominar para ampliar a segurança e a capacidade de reação em situações inesperadas perto do solo."
    }]

    const fichaC = [{
        materia: "Aeronave",
        question: "Recebeu instrução e demonstrou capacidade de organizar uma decolagem",
        answer: "Página em construção: Load Organizer"
    },{
        materia: "Navegacao",
        question: "Realizou curso de Pilotagem de Velame",
        answer: "Página em construção: Pilotagem de Velame"
    },{
        materia: "Navegacao",
        question: "Realizou treinamento de pouso em água",
        answer: "Página em construção: Pouso em Água"
    }]


        switch(opcaoFicha) {
            case "Alunos AI para A":
                quizz = fichaA;
            break
    
            case "Categoria A para B":
                quizz = fichaB;
            break
    
            case "Categoria B para C":
                quizz = fichaC;
            break
            
            case "Coach":
                quizz = fichaCoach;
            break
    
            default: "Selecione uma opção:";
            break
        }
    
    const [index, setIndex] = useState(0)
    
    const nextQuestion = () => {
        setIndex(index+1)
        setQuestion(quizz[index].question)
        setAnswer(quizz[index].answer)
        setEnableAnswer(false)
    }
    const verifyAnswer = () => {
            setEnableAnswer(true)
    }

    return(
        <>
        <Header />
        <div className="main_div">
        <h1> Fichas de Progressao</h1>
        <p> Veja aqui os Briefings das Fichas de Progressão da ua Categoria.</p>
            <label> Selecione sua Categoria </label>
        <select id="CategoriaSimulado" value={opcaoFicha} onChange={(e) => setOpcaoFicha(e.target.value)}>
            <option>Selecione uma opção:</option>
            <option>Alunos AI para A</option>
            <option>Categoria A para B</option>
            <option>Categoria B para C</option>
            {/* <option>Coach</option> */}
        </select>
            
        <p id="question"> {question} </p>
        <p id="answer"> {enableAnswer? answer:""}</p>
        <button className="button" id="verifyBtn" onClick={verifyAnswer}> Verificar resposta </button>
        <button className="button" id="nextBtn" onClick={nextQuestion}> Gere uma pergunta! </button>
        </div>

        <div className="main_div">
            <h2> Veja aqui as Fichas de Progressão por Categoria. </h2>
            <Link to= "/FichaProgA" target="_blank"><button id="fichaA">Categoria AI para A</button></Link>
            <Link to= "/FichaProgB" target="_blank"><button id="fichaB">Categoria A para B</button></Link>
            <Link to= "/FichaProgC" target="_blank"><button id="FichaC">Categoria B para C</button></Link>
            <Link to= "/FichaProgD" target="_blank"><button id="FichaD">Categoria C para D</button></Link>
        </div>
        <Footer />
        </>
    )
}

export default FichasProgressao