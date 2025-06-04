import React from "react"
import Header from  '../MainComponents/header.jsx'
import Footer from '../MainComponents/footer.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import {Link} from "react-router-dom"
import { useState } from "react"
import SimuladosArray from "./SimuladosArray.jsx"


function Simulados() {

const [question, setQuestion] = useState("Clique no botão para gerar uma pergunta aleatória sobre paraquedismo.")
const [answer, setAnswer] = useState("")
const [enableAnswer, setEnableAnswer] = useState(false)
let index = 0

const simulado = [{
        materia: "Equipamento",
        question: "Quais são os 3 punhos do paraquedas, onde se localizam e para que cada um 	deles serve ?",
        answer: "1) Punho comando do principal: atrás lado direito, comando do principal. 2) Punho desconector do principal: frente lado direito, desconectar o principal. 3) Punho comando do reserva: frente lado esquerdo, comandar o reserva"
    },{
        materia: "Equipamento",
        question: " Explique qual a função do slider na sequência de abertura.",
        answer: "Reduzir a velocidade de abertura do velame"
    },{
        materia: "Equipamento",
        question: "Descreva o funcionamento do sistema Stevens:",
        answer: "Forma um link separável entre o tirante principal e o pino (ou cabo) do reserva, assim quando o velame principal é desconectado ele aciona o reserva, se o RSL estiver conectado."
    },{
        materia: "Equipamento",
        question: "O DAA aciona qual dos 2 velames e em que altura? Descreva o seu 	funcionamento.",
        answer: " Aciona o reserva, entre 1050 e 1200 ft (depende do fabricante). DAA: mede velocidade e altura, aciona o reserva (cortando o loop) se 	estiver em velocidade alta na altura programada."
    },{
        materia: "Equipamento",
        question: " Supondo que o punho de acionamento do principal não foi acionado, o RSL irá funcionar ao desconectar o principal?",
        answer: "Não, 	pois o tirante permanece alojado, sem puxar a fita do RSL."
    },{
        materia: "Equipamento",
        question: "Em qual parte do velame as linhas de freio se conectam?",
        answer: "Pontas laterais da cauda do velame"
    },{
        materia: "Aeronave",
        question: "Qual será sua posição em relação ao solo ao sair da aeronave? Explique o 	motivo.",
        answer: "Perpendicular ao solo, visando apresentar posição selada ao vento relativo"
    },{
        materia: "Aeronave",
        question: "De quem você recebe ordens no caso de uma pane na aeronave",
        answer: "Do instrutor"
    },{
        materia: "Aeronave",
        question: "Por que é importante proteger os punhos estando próximos ou dentro da aeronave?",
        answer: "Mantem eles nos devidos lugares e evita abertura acidental ou prematura"
    },{
        materia: "QuedaLivre",
        question: "Na Box Position, onde encontra-se o CG (centro de gravidade)?",
        answer: "Quadril."
    },{
        materia: "QuedaLivre",
        question: "Porque é necessária a posição selada, simétrica e relaxada em queda livre?",
        answer: "Para manter a estabilidade"
    },{
        materia: "QuedaLivre",
        question: "Supondo que um paraquedista saia de uma aeronave a 10 mil pés e comande seu paraquedas a 6 mil pés, quantos segundos de queda livre terá em média?",
        answer: "10 Segundos saída + 18 segundos QL = 28 seg. Estima-se 10 segundos de subterminal, e após isso 6 segundos a cada mil pés."
    },{
        materia: "QuedaLivre",  
        question: "Descreva a posição do corpo no momento do comando",
        answer: "Posição selada, braço direito levado ao punho escorregando pela lateral do 	corpo, braço esquerdo compensando o movimento esticado em frente a cabeça."
    },{
        materia: "QuedaLivre",
        question: "No momento do comando do paraquedas inicia-se uma contagem de 5 segundos, explique o motivo",
        answer: "Tempo de abertura do velame principal"
    },{
        materia: "SequenciaNivel1",
        question: "Descreva resumidamente e com palavras chave a sequência do seu salto.",
        answer: "Nivel 1) Saída: Mão esq, pé esq, mão direita, pé direito. Check dentro, ok, check fora, ok, respira. Referência, em cima, em baixo, sela (passo para o lado). Círculo de consciência: Referência, altura, check JM esquerda,  ok, check JM direita, ok, referência. Exercício: (N1): Simulação, altura, acima de 7000ft, 2ª Simulação, altura, acima de 7000ft, 3ª Simulação, altura, acima de 7000ft. Free time: Referência, referência, altura. Comando: wave off e comando entre 6.000 e 5.500ft."
    },{
        materia: "SequenciaNivel1",
        question: "Qual o motivo do sinal waveoff?",
        answer: "Informar outros paraquedistas sobre o comando"
    },{
        materia: "SequenciaNivel1",
        question: "Descreva a posição do corpo no momento do comando:",
        answer: "Posição selada, braço direito até o punho escorregando pelo lado do corpo, braço esquerdo compensando o movimento esticado em frente a cabeça."
    },{
        materia: "Navegacao",
        question: "18. Descreva o cheque visual e funcional.",
        answer: "Visual: Velame retangular, células infladas, linhas esticadas e desembaraçadas, 	slider baixo. Funcional: Flare por 3 segundos, olha, curva de 90º a esquerda, olha, curva de 90º a direita"
    },{
        materia: "Navegacao",
        question: "Qual a direção ideal de pouso em relação ao vento?",
        answer: "Vento de nariz"
    },{
        materia: "Navegacao",
        question: "Para onde deve-se ir (caso já não esteja) imediatamente após os cheques de velame?",
        answer: "Area de espera"
    },{
        materia: "Navegacao",
        question: "Estando abaixo de 1000 ft já no circuito, quantos graus de curvas pode-se fazer?",
        answer: "Curvas de no máximo 90 graus."
    },{
        materia: "Navegacao",
        question: "Estando abaixo de 300 ft, quantos graus de curvas pode-se fazer?",
        answer: "Curvas de no máximo 45 graus."
    },{
        materia: "Navegacao",
        question: "Posso passar em cima de obstáculos estando abaixo de 1000 ft?",
        answer: "NÃO."
    },{
        materia: "Navegacao",
        question: " ?Explique como é feito o pouso, descrevendo a altura do flare.",
        answer: "Vento de nariz, flare inicia entre 2 e 4 metros a meio freio, , mãos devem estar na altura da cintura ao tocar o solo"
    },{
        materia: "Navegacao",
        question: "Qual a posição das mãos no momento do flare total? ",
        answer: "Na altura da cintura."
    },{
        materia: "Navegacao",
        question: "Se você receber algum comando de rádio divergente às regras de segurança em navegação e pouso, deve-se obedecer prontamente?",
        answer: "NÃO. Existe a chance de haver interferência no rádio ou o instrutor confundir o velame. Você deve garantir sempre a sua segurança."
    },{
        materia: "Navegacao",
        question: "Quais as prioridades no pouso?",
        answer: "1) Pousar em uma área limpa, livre de obstáculos. 2) Pousar com vento de nariz, e voando uma linha reta. 3) Fazer flare pelo menos até a metade (reduzir velocidade de vôo). 4) Se necessário, fazer rolamento"
    },{
        materia: "Navegacao",
        question: "Qual o propósito do rolamento no pouso?",
        answer: "Proteger em caso de pousos fortes, dissipando a energia do impacto e evitando lesões."
    },{
        materia: "Navegacao",
        question: "Qual é a melhor forma de evitar uma colisão de velames quando está fazendo uma curva?",
        answer: "Olhar antes na direção da curva, manter consciência da localização de outros durante a navegação."
    },{
        materia: "Navegacao",
        question: "Descreva o procedimento para pouso em linhas de alta tensão",
        answer: "Evite essas áreas antes enquanto estiver descendo, curva mínima necessária para evitar os fios (curva rasa), pouse paralelamente aos fios, pouso a meio freio, rolamento. Tente tocar um fio de cada vez, aguarde resgate e a confirmação que a energia estará desligada."
    },{ 
        materia: "Emergencia",
        question: "Qual a ação mais importante de um salto?",
        answer: "Comandar (abrir) o paraquedas."
    },{ 
        materia: "Emergencia",
        question: "Em caso de pane de aeronave, o que fazer? 1) De 0 a 1.500ft. 2) de 1.500ft a 3.500ft. 3) acima de 3.500ft. 4) Acima da altura de comando.",
        answer: "1) De 0 a 1500 ft: Permanecer na aeronave, exceto pane estrutural ou fogo. 2) De 1500 a 3500 ft: Sair e acionar o reserva. 3) Acima 	de 3500 ft: Sair e acionar o principal. 4) Sair acompanhado de instrutor e comandar na altura prevista. (OBS: Seguir prontamente ás orientações do JM)"
    },{ 
        materia: "Emergencia",
        question: "Se perceber que alguma parte do seu equipamento abriu, estando dentro da aeronave, o que fazer?",
        answer: "Afastar-se da porta, desequipar, voltar ao solo com a aeronave."
    },{ 
        materia: "Emergencia",
        question: "Se no momento da saída, parte do seu equipamento abriu e expôs-se ao vento relativo, o que fazer?",
        answer: "Sair imediatamente da aeronave."
    },{ 
        materia: "Emergencia",
        question: "Qual a diferença entre panes e anormalidades?",
        answer: "Anormalidades são situações que a princípio eu resolvo ou convivo, desde que passe no check visual e funcional. Panes não são navegáveis, requerem procedimento de emergência."
    },{ 
        materia: "Emergencia",
        question: "O que fazer em caso de uma abertura fora de sequencia (ferradura)?",
        answer: "Comandar o paraquedas principal."
    },{ 
        materia: "Emergencia",
        question: "Descreva o procedimento de emergência.",
        answer: "Olha a bananinha vermelha, pega com as duas mão. Olha o punho de metal, puxa a bananinha, pega e puxa o punho de metal. Sela."
    },{ 
        materia: "Emergencia",
        question: "Cite 2 exemplos de pane e qual procedimento?",
        answer: "Bag lock: procedimento de emergência. Line Over: procedimento de emergência. Procedimento de Emergência."
    },{ 
        materia: "Emergencia",
        question: "Em qual momento é identificado uma pane e o que deverá ser feito imediatamente?",
        answer: "No check visual ou funcional, procedimento de emergência."
    },{ 
        materia: "Emergencia",
        question: "Cite as anormalidades.",
        answer: "1) Anormalidade especial: Twist (a primeira coisa a se resolver, mantendo os batoques alojados. 2) Anormalidades que a princípio podemos resolver: Até duas células desinfladas, slider alto (até a metade das linhas), um freio solto. 3) Anormalidades que a principio podemos conviver: Até uma linha arrebentada, o pilotinho passando pelo borde de ataque, um rasgo pequeno."
    },{ 
        materia: "Emergencia",
        question: "Sabendo que em todos os caso de anormalidades, deve-se fazer o cheque 	funcional, seja para resolver ou conviver com a situação, exceto uma. Qual?",
        answer: "Twist."
    },{ 
        materia: "Emergencia",
        question: "Em caso de twist de baixa velocidade, o que fazer",
        answer: "Manter os batoques alojados, separar os tirantes com as mãos,	chutando para o lado contrário do giro."
    },{ 
        materia: "Emergencia",
        question: "Até que altura deve ser tomado a decisão de fazer um procedimento de emergência?",
        answer: "2.500 ft"
    },{ 
        materia: "Emergencia",
        question: "Quais são as formas de evitar dois velames abertos?",
        answer: "Check de equipamento, cuidado com a movimentação após equipado, sempre protegendo punhos e pinos, comandar na altura, treinar procedimento de emergência para executá-lo corretamente."
    },{ 
        materia: "Emergencia",
        question: "O que fazer em caso de 2 velames abertos, um na frente do outro?",
        answer: "BIPLANO: manter os batoques alojados, navegar pelos tirantes de trás do paraquedas da frente, curvas suaves, reta Boeing para pouso, rolamento."
    },{ 
        materia: "Emergencia",
        question: "O que fazer em caso de 2 velames abertos, lado a lado?",
        answer: "SIDE BY SIDE: manter os batoques alojados, navegar pelos tirantes de 	traseiros internos, curvas suaves, reta Boeing para pouso, rolamento."
    },{ 
        materia: "Emergencia",
        question: "O que fazer em caso de 1 velame inflado e outro fechado?",
        answer: "Recolher o velame desinflado com cuidado, coloca-lo entre as pernas e navegar o velame inflado."
    },{ 
        materia: "Emergencia",
        question: "O que fazer em caso de downplane?",
        answer: "DOWN PLANE: liberar RSL e Procedimento de emergência (desconectar o principal)"
    },{ 
        materia: "Emergencia",
        question: "Descreva como agir, caso esteja com dificuldades em ouvir os comandos de rádio.",
        answer: "Executar navegação briefada: identificar área de espera, esperar na área identificada. Planejar ponto ABC de acordo com o vento observado no momento e executar."
    },{ 
        materia: "Emergencia",
        question: "Até qual altura no máximo é tomada a decisão de localizar uma área alternativa para pouso?",
        answer: "2.000 ft."
    },{ 
        materia: "Emergencia",
        question: "Explique como é feito um pouso fora da área ou sem rádio:",
        answer: "Identificar área de pouso livre de obstáculos (o mais livre possível). Identificar vento, planejar navegação para esta nova área. Fazer rolamento ao tocar o solo."
    },{ 
        materia: "Emergencia",
        question: "O que fazer estando em rota de colisão FRONTAL com outro paraquedista?",
        answer: "Curva 90º a direita."
    },{ 
        materia: "Emergencia",
        question: "Em qual momento da navegação devemos estar atento, olhando tanto para os 	lados, quanto para baixo antes de fazer uma curva?",
        answer: "TODOS os momentos. O TEMPO TODO!"
    },{ 
        materia: "Emergencia",
        question: "Já na reta final para pouso, percebe-se que está indo em direção a um obstáculo, o que fazer?",
        answer: "Fazer suaves correções, pousando paralelamente ao obstáculo."
    },{ 
        materia: "Emergencia",
        question: "Estatisticamente, qual o maior motivo de contusões e acidentes durante o pouso?",
        answer: "Curva Baixa."
    },{
    materia: "Navegacao",    
    question: " ?",
        answer: "Resposta) "
    },{ 
        materia: "",
        question: " ?",
        answer: "Resposta) "
    },{
        materia: "Equipamento",
        question: "Como você procede para checar o paraquedas que vai utilizar? Qual instrumento deve ser verificado se está ligado, antes de você se equipar?",
        answer: "1) DAA: ligado, a quanto tempo, modo correto. 2) Caderneta do reserva: data dobragem, tamanho, teste de tensão, dobrador. 3) Sistema 3 argolas: montado corretamente, livre de tensão, cabo flexível alojado na hard house. 4) RSL: conectado na argola correta, fita alojada, chegada no cabo de aço ou pino do reserva. 5) Punho desconector: cabos flexíveis correndo e com folga suficiente, bem alojado no velcro, não está torcido. 6) Punho reserva: cabo correndo, bolinha de aço na ponta bem preso (de 2 a 5 dedos de comprimento), bem alojado no velcro, acessível. 7) Tirantes: estado geral das costuras. 8) Fivelas: todas montadas corretamente. 9) Pino do reserva: pelo menos 1 dedo para baixo do loop, loop íntegro, lacre dobrador. 10) Pino do principal: colocado até o final, loop íntegro, bridle livre. 11) Bridle: bem alojada. 12) Pilotinho: tecido bem alojado, punho acessível, bock em bom estado."
    },{
        materia: "Equipamento",
        question: "Descreva o funcionamento do DAA e do RSL.",
        answer: "1) DAA: mede velocidade e altura, aciona o reserva (cortando o loop) se estiver em velocidade nas alturas abaixo: Student 1050 a 1200 ft (depende da marca); Pro - 750 ft; RSL: ao desconectar o paraquedas principal, ele aciona o reserva através da fita do RSL"
    },{
        materia: "Equipamento",
        question: "Quantas linhas do grupo A tem um velame 9 células?",
        answer: "10."
    },{
        materia: "Equipamento",
        question: "Em qual parte do velame as linhas de freio se conectam?",
        answer: "Ponta lateral da cauda do velame"
    },{
        materia: "Equipamento",
        question: "Quais linhas passam pelo ilhós traseiro do slider?",
        answer: "Grupo C e D, e linhas de freio."
    },{
        materia: "Equipamento",
        question: "Onde a bridle do principal conecta no velame?",
        answer: "No centro no topo"
    },{
        materia: "Equipamento",
        question: "O que aconteceria se o tirante do principal no qual estiver preso o RSL arrebentar?",
        answer: "1) O reserva será acionado com o outro tirante do principal conectado ao container. 2)Inspeção e manutenção; dobragem correta, linhas justas, abertura estável, tudo para se prevenir de abertura fortes."
    },{
        materia: "Equipamento",
        question: "Por que é ruim deixar um paraquedas no sol?",
        answer: "Raios ultravioletas degenera o nylon."
    },{
        materia: "Equipamento",
        question: "Qual dano pode ser ocasionado por deixar um paraquedas dentro de um carro por um período prolongado no verão?",
        answer: "Vida mais curta da bateria do DAA, degradação das borrachas de dobragem."
    },{
        materia: "Equipamento",
        question: "O que acontece com as abas rígidas quando são usadas frequentemente?",
        answer: "Distorcem."
    },{
        materia: "Equipamento",
        question: "Por que os cabos flexíveis do sistema 3 argolas devem ser limpos periodicamente?",
        answer: "Depósito de sujeira e óleo podem entupir o conduite."
    },{
        materia: "QuedaLivre",
        question: "Como você planeja o seu salto? O que deve ser levado em consideração?",
        answer: "Planejar saída, exercícios de queda livre, altura de separação e comando, navegação e pouso. Deve ser considerado: tipo de salto, experiência, quantidade de paraquedistas, tamanho do velame, área de pouso prevista, direção do vento, etc."
    },{
        materia: "QuedaLivre",
        question: "Qual o tempo mínimo que devemos dar entre um grupo e outro, ao saltar, para garantir a segurança de todos? Que outros fatores devem ser levados em consideração?",
        answer: "Ideal é observar a peça a pelo menos um angulo de 45 graus da porta. Geralmente, ao menos 5 segundos, podendo variar significativamente. Se a aeronave está de vento de nariz preciso dar mais tempo. Fatores: vento de camada no lançamento, tipo de salto, quantidade de paraquedistas em cada grupo, altura de comando, carga alar, etc."
    },{
        materia: "QuedaLivre",
        question: "Descreva como você planeja seu ponto de saída da aeronave.",
        answer: "Identificando o vento de solo e de camada, e identificando qual seria a minha área de espera ideal."
    },{
        materia: "QuedaLivre",
        question: "Você vai comandar seu paraquedas principal e não encontra o punho. Qual é o seu procedimento?",
        answer: "Tentar mais uma vez tateando pelo equipamento, se não conseguir, procedimento de emergência."
    },{
        materia: "QuedaLivre",
        question: "Qual é a altura mínima de comando para paraquedistas portadores da categoria A?",
        answer: "4.500ft (Norma ABRA)"
    },{
        materia: "QuedaLivre",
        question: "Em uma abertura fora de seqüência do paraquedas principal, qual é o seu primeiro procedimento?",
        answer: "Comandar o pilotinho (principal)."
    },{
        materia: "QuedaLivre",
        question: "Como evitar aberturas prematuras em queda livre?",
        answer: "1) Checando o equipamento. 2) Tomando cuidado com a movimentação após equipado (em solo e na aeronave. 3) Protegendo punhos e pinos."
     },{
        materia: "QuedaLivre",
        question: "Em queda livre você percebe que está longe da área. Você:",
        answer: "Comanda na altura briefada e, se necessário, pousa em área alternativa."
    },{
        materia: "QuedaLivre",
        question: "O que acontece com a razão de queda livre quando o paraquedista executa looping e outras manobras de free fly?",
        answer: "Aumenta a velocidade de queda livre."
    },{
        materia: "QuedaLivre",
        question: "O que pode resultar se o paraquedista executar movimento acima, estando embaixo de uma formação em queda livre?",
        answer: "Colisão com a formação, efeito funil."
    },{
        materia: "QuedaLivre",
        question: "Qual é a ação correta se está com velames entrelaçados com outro paraquedista abaixo de 1000 ft?",
        answer: "Acionamento do reserva."
    },{
        materia: "Navegacao",
        question: "Se você não tem certeza que o velame principal está bom, qual é a altura mínima para DECIDIR fazer o procedimento de emergência?",
        answer: "2.500 ft."
    },{
        materia: "Navegacao",
        question: "Você procura localizar outros velames abertos após seu comando? SIM Como você procede para conseguir separação vertical entre os pára-quedistas que estão na mesma altura que você?",
        answer: "1) Observar quem tem a tendência de afundar mais. 2) Se eu tiver afundando, faço curvas para perder altura, sempre olhando o espaço aéreo com atenção. 3) Se eu estiver flutuando, seguro a meio freio para permitir separação."
    },{
        materia: "Navegacao",
        question: "Ao comandar seu pára-quedas principal, você percebe outro pára-quedista em rota de colisão que não está te vendo. Como você evita esta colisão? (os freios ainda estão feitos).",
        answer: "Se for colisão frontal, curva de 90º a direita com os tirantes traseiros."
    },{
        materia: "Navegacao",
        question: "Em que momentos da navegação existe perigo de colisões?",
        answer: "TODOS OS MOMENTOS"
    },{
        materia: "Navegacao",
        question: "Como você pode evitar a ocorrência de dois velames inflados? Descreva os procedimentos caso isso ocorra.",
        answer: "Sim, checando equipamento, tomando cuidado com a movimentação após equipado (protegendo punhos e pinos do paraquedas), comandando na altura. 1) BIPLANO: manter os batoques alojados, navegar pelos tirantes de trás do paraquedas da frente, curvas suaves, reta Boeing para pouso, rolamento. 2) SIDE BY SIDE: manter os batoques alojados, navegar pelos tirantes de traseiros internos, curvas suaves, reta Boeing para pouso, rolamento. 3) DOWN PLANE:  desativar RSL antes, Desconectar princcipal (PE)."
    },{
        materia: "Navegacao",
        question: "Descreva uma Curva Rasa (Flat Turn), feita próximo ao solo. Quais são as vantagens?",
        answer: "A Curva rasa é feita trazendo o paraquedas a meio freio, e fazendo curvas suaves e abertas (soltando ou puxando um pouco o batoque de um dos lados), recuperando o vôo a meio freio. Serve para desviar de obstáculos próximo ao solo sem entrar no arco de recuperação."
    },{
        materia: "Navegacao",
        question: "Quem tem preferência durante a navegação?",
        answer: "Quem está abaixo."
    },{
        materia: "Navegacao",
        question: "Você se encontra a 2500 pés com o velame aberto e percebe outro paraquedista no mesmo nível. O que fazer?",
        answer: "Analisar quem tem tendência de afundar mais e só então tomar uma decisão de acordo (afundar ou segurar)."
    },{
        materia: "Navegacao",
        question: "Você comandou seu paraquedas e não tem certeza que vai chegar na área. Você:",
        answer: "Decide pousar em área alternativa somente quando tem certeza de que não vai chegar; começa a procurar uma alternativa e DECIDE acima de 2000 pés."
    },{
        materia: "Navegacao",
        question: "Ao olhar para a biruta, com o velame aberto, você percebe que não tem vento. Como pousar? (Assinale todas as alternativas corretas)",
        answer: "1) Em função do vento que predominou o dia todo, se você for o primeiro a pousar. 2) Em qualquer direção, afinal cada um está pousando de um jeito. 3) Na mesma direção que pousou o primeiro paraquedista. 4) No sentido longitudinal da área pois tem mais espaço e seu velame estará cobrindo maior espaço pela falta de vento, se você for o primeiro a pousar. 5) Se tiver seta, na direção da seta."
    },{
        materia: "Navegacao",
        question: "O que o velame faz imediatamente após uma curva?",
        answer: "Mergulha (Arco de recuperção)."
    },{
        materia: "Navegacao",
        question: "Quais as prioridades no pouso?",
        answer: "1) Pousar em uma área limpa, livre de obstáculo. 2) Pousar voando uma linha reta. 3) Fazer flare (reduzir velocidade de vôo) - pelo menos meio flare. 4) Se necessário, fazer rolamento."
    },{
        materia: "Navegacao",
        question: "Qual é o propósito do flare no pouso?",
        answer: "Converter velocidade horizontal em lift."
    },{
        materia: "Navegacao",
        question: "Descreva o procedimento para um pouso forçado (rolamento).",
        answer: "Pés e joelhos juntos, mãos e cotovelos próximos ao corpo, rolamento 5 pontos."
    },{
        materia: "Navegacao",
        question: "Descreva os três pontos no momento do pouso, referindo-se ao vôo do velame em relação ao vento.",
        answer: "Perna do vento (A para B): Vento de cauda, base (B para C): vento de través, reta final (C para alvo): vento de nariz."
    },{
        materia: "Navegacao",
        question: "Qual o propósito do rolamento no pouso?",
        answer: "Proteger em caso de pousos fortes."
    },{
        materia: "Navegacao",
        question: "Como o vento forte altera o padrão de navegação, em relação a um dia calmo?",
        answer: "Diminuir distancia da reta final e base, aumentar distancia da perna do vento (cauda), planejar ponto de entrada A mais longo."
    },{
        materia: "Navegacao",
        question: "Em dia de vento forte moderado, quão longe você espera encontrar turbulência de um obstáculo?",
        answer: "10-20 vezes a altura do obstáculo."
    },{
        materia: "Navegacao",
        question: "Qual o melhor procedimento quando se esta voando em uma área turbulenta?",
        answer: "Manter o velame voando em linha reta em vôo total (ou conforme orientação do fabricante)."
    },{
        materia: "Navegacao",
        question: "Quais condições de tempo e direção do vento causa maior turbulência na área de pouso que você utiliza?",
        answer: "Boituva: Hangares, construção e Rodovia Castelo branco."
    },{
        materia: "Navegacao",
        question: "Qual é a melhor forma de evitar uma colisão de velames quando esta fazendo uma curva?",
        answer: "Olhar antes na direção da curva."
    },{
        materia: "Navegacao",
        question: "Qual o jeito mais rápido e seguro de mudar a direção do velame imediatamente após a abertura?",
        answer: "Curva de tirantes traseiros com os freios feitos."
    },{
        materia: "Navegacao",
        question: "Descreva o procedimento para pouso em vento forte.",
        answer: "Fique a favor do vento em relação aos obstáculos, entre de vento de nariz antes, desconectar RSL, pousar com rolamento, após toque no solo puxar um batoque completamente, desconectar o principal se necessário."
    },{
        materia: "Navegacao",
        question: "Qual o maior risco para um paraquedista quando o mesmo esta navegando pelo padrão de aproximação?",
        answer: "Outros velames."
    },{
        materia: "Navegacao",
        question: "Qual a melhor forma de se evitar colisão de velames?",
        answer: "Olhar e manter-se longe de outros paraquedistas navegando."
    },{
        materia: "Navegacao",
        question: "Qual o melhor jeito de mudar a direção do velame enquanto conserva altitude?",
        answer: "Curva rasa (flat turn)."
    },{
        materia: "Navegacao",
        question: "Descreva a diferença de fazer o flare a partir do meio freio e do vôo total.",
        answer: "Fazer o flare do meio freio requer um puxão mais rápido, o tempo freado é mais curto e o velame entra em stall antes."
    },{
        materia: "Navegacao",
        question: "Como o meio freio afeta a performance do velame?",
        answer: "Razão de descida menor, muda glide."
    },{
        materia: "Navegacao",
        question: "Descreva o procedimento para pouso em linhas de alta tensão.",
        answer: "Evite essas áreas antes enquanto estiver descendo, curva mínima necessária para evitar os fios (curva rasa), pouse paralelamente aos fios, pouso a meio freio, rolamento. Tente tocar um fio de cada vez, aguarde resgate e a confirmação que a energia estará desligada."
    },{
        materia: "Navegacao",
        question: "Descreva seu procedimento para pouso em árvore.",
        answer: "Vento de nariz, preparar para o rolamento, paraquedas a meio freio, proteger rosto e tronco, aguardar resgate."
    },{
        materia: "Navegacao",
        question: "Como a velocidade de vôo, em relação ao solo e a razão de descida altera se estiver voando em altitudes maiores?",
        answer: "Quanto mais alto, mais rápido o vôo."
    },{
        materia: "Navegacao",
        question: "Se você percebeu que começou uma curva e esta muito baixo, qual deve ser sua primeira ação?",
        answer: "Neutralizar a curva e deixar o velame em cima de sua cabeça"
    },{
        materia: "Navegacao",
        question: "Qual o efeito de puxar os tirantes dianteiros no seu velame?",
        answer: "Aumento dramático da razão de descida"
    },{
        materia: "Navegacao",
        question: "Quando estiver fazendo manobras usando os tirantes dianteiros, o que você deve fazer com os batoques?",
        answer: "Mantenha-os nas mãos"
    },{
        materia: "Navegacao",
        question: "Quais são os resultados possíveis de uma curva baixa (próxima ao solo)?",
        answer: "Lesões sérias e morte."
    },{
        materia: "Navegacao",
        question: "Descreva seu procedimento para pouso na água",
        answer: "Inflar o dispositivo de flutuação, desconectar tirante de peito e RSL, preparar para rolamento, vento de nariz, segurar a respiração, disconectar após molhar os pés, tirar tirantes de perna, nadar com vento de nariz. Se sob o velame, mergulhe profundamente e nade para longe saindo de baixo do velame."
    },{
        materia: "Aeronave",
        question: "Se acontecer uma pane na aeronave, como você irá proceder?",
        answer: "1) Ate 1500 ft: volta na aeronave (exceção pane estrutural e fogo). 2) De 1500 a 3500: salta e aciona o reserva. 3) Acima de 3500 ft: salta e aciona o principal."
    },{
        materia: "Aeronave",
        question: "Qual é altura mínima para saltar em uma emergência na aeronave? Até que altura (mínima) comandaria 	o principal?",
        answer: "1) Altura mínima para saltar: 1500ft (exceção pane estrutural ou fogo). 2) Altura de comando do principal 3500ft."
    },{
        materia: "Aeronave",
        question: "Descreva como evitar a hélice ao aproximar da aeronave.",
        answer: "Aproximar aeronave de asa fixa pela cauda"
    },{
        materia: "Aeronave",
        question: "Quem é responsável por colocar o cinto de segurança a bordo da aeronave? Quando o cinto precisa ser afivelado?",
        answer: "O paraquedista e o piloto. Em movimento no solo (taxi), decolagem e pouso."
    },{
        materia: "Aeronave",
        question: "De quem você recebe ordens no caso de uma pane na aeronave?",
        answer: "Do instrutor ou do piloto."
    },{
        materia: "Aeronave",
        question: "Por que é importante sair na luz verde?",
        answer: "Para sair no local correto em relação ao solo."
    },{
        materia: "Aeronave",
        question: "De onde vem o vento logo ao sair da aeronave?",
        answer: "De frente."
    },{
        materia: "Aeronave",
        question: "Por que é importante proteger os punhos estando próximos ou dentro da aeronave?",
        answer: "Mantem eles nos devidos lugares e evita abertura acidental ou prematura."
    },{
        materia: "Aeronave",
        question: "O que o paraquedista deve observar antes de se posicionar para sair da aeronave?",
        answer: "Nuvens, outras aeronaves, separação de grupos, PS."
    },{
        materia: "Aeronave",
        question: "Em uma aeronave com a porta no fundo, o que os paraquediostas devem fazer para manter o balanceamento da aeronave?",
        answer: "Manter-se na frente da aeronave, e só aproximar da porta quando for a vez de seu grupo sair."
    },{
        materia: "Aeronave",
        question: "Qual é a velocidade de solo de uma aeronave ao lançar se a velocidade do ar está a 90 nós, voando a com vento de nariz de 50 nos?",
        answer: "40 nós."
    },{
        materia: "Aeronave",
        question: "Como os paraquedistas podem garantir separação adequada de grupos ao sair de uma aeronave?",
        answer: "Observando separação de acordo com o posicionamento em relação ao solo."
    },{
        materia: "Aeronave",
        question: "Quando se esta fazendo salto de deslocamento em um avião grande, por que é importante se deslocar perpendicular a reta de lançamento?",
        answer: "Quando se esta fazendo salto de deslocamento em um avião grande, por que é importante se deslocar perpendicular a reta de lançamento?."
    },{
        materia: "Emergencia",
        question: "Como você iria resolver um pilotinho estagnado?",
        answer: "Alterar a posição do corpo para mudar o fluxo do ar nas costas"
    },{
        materia: "Emergencia",
        question: "Como você resolveria as seguintes situações: twist, slider alto e células das pontas desinfladas?",
        answer: "1) Manter batoques alojados, separar tirantes e chutar na direção oposta a 	torção, consciente da altura (acima de 2500ft). 2) Após desfazer twist, fazer flare por 3 segundos. Determinar navegabilidade (check funcional) acima de 2500 ft."
    },{
        materia: "Emergencia",
        question: "Qual é a ação apropriada se está abaixo de 1000 ft sem um paraquedas navegável?",
        answer: "Imediatamente acionar paraquedas reserva."
    },{
        materia: "Emergencia",
        question: "Se o pilotinho passar pelo bordo de ataque do velame, como você sabe se é uma anormalidade ou uma pane?",
        answer: "Check funcional, se está controlável posso vir com o velame para pouso."
    },{
        materia: "Emergencia",
        question: "O que fazer em caso de uma abertura fora de sequencia?",
        answer: "Comandar o paraquedas principal. Se após duas tentativas não consegui, procedimento de emergência."
    },{
        materia: "Emergencia",
        question: "Se parte do velame enroscou no corpo do paraquedista ou em outra parte do equipamento, o que fazer",
        answer: "Procedimento de emergencia."
    },{
        materia: "Emergencia",
        question: "O que fazer em caso de uma bag lock?",
        answer: "Procedimento de emergencia."
    },{
        materia: "Emergencia",
        question: "Qual é a primeira coisa a se fazer após uma colisão que os paraquedas ficaram entrelaçados?",
        answer: "Checar altitude, estabelecer comunicação."
    },{
        materia: "Seguranca",
        question: "Que parâmetros você usaria para escolher o velame principal que vai saltar?",
        answer: "Carga alar, experiência, características do velame."
    },{
        materia: "Seguranca",
        question: "Um paraquedista portador da categoria A, só pode realizar Trabalho Relativo com paraquedistas de que categoria? Em que condições? Quem tem que autorizar esse salto?",
        answer: "Categoria C, autorizado por um instrutor ou RTA."
    },{
        materia: "Seguranca",
        question: "Até que categoria é obrigatório o uso de proteção para a cabeça?",
        answer: "Até categoria A (a partir de B pode saltar sem capacete)."
    },{
        materia: "Seguranca",
        question: "Quais documentos devem ser apresentados para que um paraquedista possa saltar?",
        answer: "Caderneta de saltos assinada, associação a entidade em dia."
    },{
        materia: "Seguranca",
        question: "Qual é o tempo máximo que um paraquedista portador da categoria A pode ficar sem saltar, sem ter que se submeter a uma readaptação? Como é feita a readaptação?",
        answer: "1) 90 dias. 2) Reciclagem teórica mais salto acompanhado de instrutor (quantidade de saltos dependendo da avaliação do instrutor)."
    },{
        materia: "Seguranca",
        question: "Descreva o procedimento de emergência",
        answer: "Olha a bananinha vermelha, pega com as duas mãos. Olha o punho de metal, puxa a bananinha, pega e puxa o punho de metal. Sela. "
    },{
        materia: "Seguranca",
        question: "O que você utilizaria (ou utiliza) para tornar seu esporte mais seguro?",
        answer: "a) DAA (Dispositivo de Abertura Automática, como Cypres) b) Pro-Dytter ou Pro-Track (altímetro sonoro) c) Checar o altímetro durante a queda livre d) Usar capacete e) 3 checks de equipamento: - antes de se equipar, antes de embarcar, antes de sair do avião f) Dobragem do reserva em dia g) Saltar com velames compatíveis com meu peso e experiência"
    },{
        materia: "Seguranca",
        question: "Você está planejando viajar e pretende saltar em outra área de salto. Como proceder para se familiarizar com as normas e procedimentos do local?",
        answer: "Procurar RTA local para briefing"
    },{
        materia: "Seguranca",
        question: "Calcule sua carga alar.",
        answer: "(Peso Equipado * 2,2)/ Tamanho do velame em ft2."
    },{
        materia: "Seguranca",
        question: "Qual é ação mais importante de um salto?",
        answer: "Comandar o paraquedas."
    },{
        materia: "Seguranca",
        question: "Qual é a velocidade máxima de vento para cat AI e A?",
        answer: "10 mph para redondo / 14 mph para velame retangular"
    },{
        materia: "Seguranca",
        question: "O que é melhor, comandar na altura briefada, ou cair mais baixo visando recuperar estabilidade antes do comando?",
        answer: "Comandar na altura combinada, independentemente da estabilidade."
    },{
        materia: "Seguranca",
        question: "Qual o propósito de sinalizar antes de comandar?",
        answer: "Avisar os outros paraquedistas."
    },{
        materia: "Seguranca",
        question: "Como você sabe se o reserva foi dobrado por um dobrador certificado em menos de 180 dias?",
        answer: "Informação encontrada na caderneta do reserva."
    },{
        materia: "Seguranca",
        question: "Quem pode dobrar um paraquedas principal?",
        answer: "Rigger, pessoa que está saltando com o paraquedas, pessoa sob a supervisão de um rigger."
    },{
        materia: "Seguranca",
        question: "De quanto em quanto tempo é necessário dobrar o velame principal e o reserva?",
        answer: "Obrigatório a cada 365 dias - recomendado a cada 180 dias (ABRA)."
    },{
        materia: "Seguranca",
        question: "Quem é responsável por manter a aeronave em condições seguras de vôo?",
        answer: "O piloto."
    },{
        materia: "Seguranca",
        question: "Acima de qual altura os paraquedistas de uma aeronave não pressurizada precisam respirar oxigênio com sistema suplementar?",
        answer: "15.000 ft."
    },{
        materia: "Seguranca",
        question: "Quem pode dar manutenção para um velame principal?",
        answer: "Rigger certificado"
    },{
        materia: "",
        question: "Descreva como evitar a hélice ao aproximar da aeronave?",
        answer: "Resposta: aproxime-se de aeronave de asa fixa pela cauda."
    },{
        materia: "",
        question: "Quem é responsável pelo uso de cinto de segurança na aeronave?",
        answer: "Resposta: O piloto e o paraquedista."
    },{
        materia: "",
        question: "Quando os cintos devem estar afivelados?",
        answer: "Resposta: deslocamento no solo, decolagem (até 1500ft) e pouso."
    },{
        materia: "",
        question: "De onde vem o vento no primeiro instante que abandonamos a aeronave?",
        answer: "Resposta: De frente"
    },{
        materia: "",
        question: "Por que os paraquedistas aprendem primeiro a voar estável, face-ao-solo?",
        answer: "Resposta: por ser a melhor posição para o comando."
    },{
        materia: "",
        question: "O que um velame faz imediatamente após uma curva?",
        answer: "Resposta: mergulha (Arco de recuperação)."
    },{
        materia: "",
        question: "Quais são suas prioridades de pouso?",
        answer: "Resposta: pousar em linha reta (sem curvas), e em uma área livre de obstáculos. Flare ao menos até o meio-freio."
    },{
        materia: "",
        question: "Descreva o procedimento para um pouso com impacto.",
        answer: "Resposta:pés e joelhos juntos, mãos e cotovelos para dentro, rolamento."
    },{
        materia: "",
        question: "Qual a altitude máxima para alunos executarem o procedimento de emergência?",
        answer: "Resposta: 2.500ft."
    },{
        materia: "",
        question: "Como você lidaria com as seguintes situações: twist nas linhas, slider alto e células das pontas desinfladas.",
        answer: "Resposta: a. Mantendo os batoques alojados, abra os tirantes para fora (ou traga o twist da linha para os tirantes), chute na direção contrária à torção, atenção para a altitude de 2.500ft. b. Faça o flare, mantendo a atenção para altura de 2.500ft. c. Se na duvida, determine controlabilidade do velame para curvas e flare até 2500ft."
    },{
        materia: "",
        question: "Se o pilotinho passar pelo bordo de ataque, como você sabe se é uma anormalidade ou pane?",
        answer: "Resposta: Através do cheque funcional."
    },{
        materia: "",
        question: "Se na abertura, parte do velame fica enrolada no corpo ou equipamento do paraquedista. Qual o procedimento correto?",
        answer: "Resposta: Procedimento de emergência."
    },{
        materia: "",
        question: "Se você tiver uma bag lock, qual o procedimento correto?",
        answer: "Resposta: Procedimento de emergência"
    },{
        materia: "",
        question: "Descreva os três pontos da aproximação para pouso no que se refere à navegação em relação ao vento.",
        answer: "Resposta: Perna do vento: Vento de cauda, Base: Vento de través, Final: vento de nariz."
    },{
        materia: "",
        question: "Qual o procedimento correto para recuperar de uma instabilidade em queda livre?",
        answer: "Resposta: cheque de altitude, selar, apoiar as pernas, relaxar."
    },{
        materia: "",
        question: "Qual o propósito do rolamento, e por que essa manobra é importante?",
        answer: "Resposta: protege em casos de pouso forçado, e todos os paraquedistas tem pousos com impacto em algum momento."
    },{
        materia: "",
        question: "Como o vento forte interfere na navegação?",
        answer: "Resposta: diminui o deslocamento na final, diminui o deslocamento na base, aumenta o deslocamento na perna do vento (ponto A para B), alterando a localização do ponto A. "
    },{
        materia: "",
        question: "Por que é importante proteger os punhos do seu paraquedas quando estiver próximo à uma aeronave acionada?",
        answer: "Resposta: mantem os punhos no lugar, e previne uma abertura prematura e acidental."
    },{
        materia: "",
        question: "Descreva quais ações você toma antes de saltar com um equipamento.",
        answer: "Resposta: cheque de cima para baixo, de frente para trás."
    },{
        materia: "",
        question: "Como você sabe que o paraquedas reserva foi dobrado por um dobrador certificado nos últimos 180 dias?",
        answer: "Resposta: Caderneta do reserva."
    },{
        materia: "",
        question: "Qual a sua carga alar com o paraquedas que você usará no seu próximo salto? (Demonstre o cálculo, para o principal e o reserva).",
        answer: "Resposta: (peso equipado x 2,2)/Tamanho do velame em ft2"
    },{
        materia: "",
        question: "Para uma altura de comando prevista em 4.000ft, quanto tempo em média terá de queda livre um paraquedista que sair da aeronave a 6.000ft?",
        answer: "Resposta: 16 segundos (dez segundos de subterminal e 6 segundos de terminal)."
    },{
        materia: "",
        question: "Qual a melhor forma de evitar colisão na navegação?",
        answer: "Resposta: Olhar o espaço aéreo antes de fazer a curva."
    },{
        materia: "",
        question: "Qual é a maneira mais segura e mais rápida de mudar a direção do velame logo após a abertura?",
        answer: "Resposta: curvas de tirante traseiro com os freios feitos."
    },{
        materia: "",
        question: "Descreva o seu procedimento para pouso em telhado.",
        answer: "Resposta: desconectar o RSL, ofereça os pés para o impacto, desconectar o paraquedas principal, aguardar resgate."
    },{
        materia: "",
        question: "O que o paraquedista deve observar antes de sair da aeronave?",
        answer: "Resposta USPA :Nuvens e outras aeronaves. Resposta ABRA: nuvens, ponto de saída, separação de grupo."
    },{
        materia: "",
        question: "O que acontece com a velocidade de queda livre quando o paraquedista executa manobras como loopings e barrels?",
        answer: "Resposta: aumento da velocidade"
    },{
        materia: "",
        question: "Qual a melhor maneira de se recuperar de um stall, retomando o voo total do paraquedas?",
        answer: "Resposta: suavemente levantar os batoques."
    },{
        materia: "",
        question: "A qual parte do velame estão conectadas as linhas de freio?",
        answer: "Resposta: na cauda."
    },{
        materia: "",
        question: "Em qual ponto a bridle é ancorada no velame?",
        answer: "Resposta: no meio do extradorso (5° link)"
    },{
        materia: "",
        question: "Quem pode dobrar seu paraquedas principal?",
        answer: "Resposta: o proprio paraquedista, um rigger, alguem sob supervisão de um rigger."
    },{
        materia: "",
        question: "A cada quanto tempo é necessário redobrar um paraquedas (reserva ou principal)?",
        answer: "Resposta: obrigatorio a cada 365 dias e recomendado a cada 180 dias (ABRA)."
    },{
        materia: "",
        question: "Quem é responsável pela aeronave?",
        answer: "Resposta: o piloto."
    },{
        materia: "",
        question: "Em aeronaves com a porta na parte traseira, o que os paraquedistas devem fazer para manter o balanceamento da aeronave durante a saída?",
        answer: "Resposta: manter-se na parte da frente da aeronave até que seja a vez da saída do grupo."
    },{
        materia: "",
        question: "Como funciona o RSL?",
        answer: "Resposta: forma uma ligação inseparável entre o tirante do principal e o pino do reserva (ou cabo), assim ao desconectar o velame principal, o reserva é acionado."
    },{
        materia: "",
        question: "Como você pode evitar a ocorrência de dois velames inflados? ",
        answer: "Resposta: a. comando na altura correta evita disparo de DAA; b. decidir e executar o procedimento de emergência com altura suficiente; c. manter e operar corretamente o pilotinho, especialmente se colapsável; d. proteger o equipamento antes da saída protege punhos e pinos; e. manobrar o velame docilmente apos altura de disparo do DAA."
    },{
        materia: "",
        question: "Qual a melhor ação a se tomar nas situações de dois velames abertos?",
        answer: "1) BIPLANO: manter os batoques alojados, navegar pelos tirantes de trás do paraquedas da frente, curvas suaves, reta Boeing para pouso, rolamento. 2) SIDE BY SIDE: manter os batoques alojados, navegar pelos tirantes de traseiros internos, curvas suaves, reta Boeing para pouso, rolamento. 3) DOWN PLANE: desconectar RSL antes, Desconectar principal (PE). 4) Um inflado e outro desinflado: recolher com cuidado o velame desinflado, deixá-lo no meio das pernas"
    },{
        materia: "",
        question: "Como corrigir o heading durante um track?",
        answer: "Respostas: afunde um ombro sutilmente em direção da curva."
    },{
        materia: "",
        question: "Por que é importante se deslocar perpendicular a reta de lançamento quando executando um track jump?",
        answer: "Respostas: para evitar os outros grupos antes e depois."
    },{
        materia: "",
        question: "Como os paraquedistas podem garantir a separação de grupos na saída da aeronave?",
        answer: "Respostas: considerar a separação de acordo com a localização do grupo em relação ao solo."
    },{
        materia: "",
        question: "Como você sabe se o RSL está montado corretamente?",
        answer: "Respostas: checar o caminho da fita desde a argola no tirante até a ancoragem no pino ou cabo do reserva."
    },{
        materia: "",
        question: "Qual a altura mínima de comando para paraquedistas categoria B?",
        answer: "Categoria B - 3500ft."
    },{
        materia: "",
        question: "Qual o máximo de vento permitido para a sua categoria?",
        answer: "28 km."
    },{
        materia: "",
        question: "Descreva seu procedimento para pouso em fios de alta tensão.",
        answer: "Resposta: evitar a area antecipadamente durante a navegação, minimo de curvas e curva rasa se necessário, pouse no sentido paralelos aos fios, tente tocar um fio por vez, aguarde resgate especializado."
    },{
        materia: "",
        question: "O que a sua categoria te permite fazer?",
        answer: "Saltar de balão, noturno, com pouso previsto em água. Usar cameras, saltar com outros categorias B."
    },{
        materia: "",
        question: "O que você precisa fazer para poder saltar estando acima do limite de dias sem saltos? Qual o limite para sua categoria?",
        answer: "Acima de 180 dias,  reciclagem e pelo menos um salto acompanhado de instrutor"
    },{
        materia: "",
        question: "Como é feito o controle de direcionamento quando se está se aproximando de outro paraquedista em queda livre a fim de realizar um grip?",
        answer: "Respostas: pernas"
    },{
        materia: "",
        question: "Qual a altura de separação mínima para grupos de até 5 pára-quedistas ou menos?",
        answer: "Respostas: 1500ft acima da altura de comando planejada."
    },{
        materia: "",
        question: "Quais são os principais perigos de uma curva de batoque muito próxima ao solo?",
        answer: "Respostas: twist nas linhas, colisão com outros paraquedistas, colisão no solo."
    },{
        materia: "",
        question: "Qual a primeira coisa a se fazer após uma colisão com outros paraquedista e com entrelaçamento dos velames?",
        answer: "Respostas: checar altitude, estabelecer comunicação."
    },{
        materia: "",
        question: "Por que é uma boa ideia alojar os batoques após o pouso?",
        answer: "Respostas: protege o velcro (que pode também danificar outros componentes) e previne torções nas linhas."
    },{
        materia: "",
        question: "Quem pode oferecer manutenção para o sistema do paraquedas principal?",
        answer: "Respostas: Um rigger."
    },{
        materia: "",
        question: "O que acontece com o velcro após uso prolongado do equipamento?",
        answer: "Respostas: perde aderência."
    },{
        materia: "",
        question: "O que acontece com as abas após uso prolongado do equipamento?",
        answer: "Respostas: distorção das abas"
    },{
        materia: "",
        question: "Por que é importante manter o DAA de acordo com as recomendações do fabricante?",
        answer: "Respostas: para melhorar suas chances de funcionar corretamente; para ajudar a prevenir ativações prematuras de DAA; para cumprir a norma."
    },{
        materia: "",
        question: "O que fazer se houver uma colisão de velames com entrelaçamento, abaixo de 1000ft?",
        answer: "Respostas: comandar o paraquedas reserva."
    },{
        materia: "",
        question: "Descreva seu procedimento para pouso em árvores.",
        answer: "Respostas: Pousar de vento de nariz, prepare para pouso em rolamento, flare até meio freio, proteja o rosto e as axilas, aguarde resgate."
    },{
        materia: "",
        question: "Qual o risco de usar o loop de fechamento do principal folgado?",
        answer: "Respostas: abertura prematura"
    },{
        materia: "",
        question: "Se perceber que iniciou uma curva com o velame mas está muito próximo ao solo, o que fazer?",
        answer: "Respostas: neutralizar a curva e manter o velame sobre sua cabeça."
    },{
        materia: "",
        question: "Quais são os resultados possíveis de uma curva baixa?",
        answer: "Respostas: lesões graves ou morte."
    },{
        materia: "",
        question: "Descreva o procedimento para pouso em água.",
        answer: "Respostas: inflar o dispositivo flutuador, desafivelar tirante de peito e desconectar RSL, vento de nariz, flare, prender a respiração, desconectar o velame principal ao sentir os pes molhados, remover tirantes de pernas, nadar fora do velame (para direção do vento de nariz). Se estiver abaixo do velame, mergulhar fundo e emergir fora do velame."
    },{
        materia: "",
        question: "Onde a bridle do principal conecta no velame?",
        answer: "Resposta: No centro no topo."
    },{
        materia: "",
        question: "O que acontece com as abas rígidas quando são usadas frequentemente?",
        answer: "Resposta: Distorcem."
    },{
        materia: "",
        question: "Por que os cabos flexíveis do sistema 3 argolas devem ser limpos periodicamente?",
        answer: "Resposta: Deposito de sujeira e óleo podem entupir o conduite."
    },{
        materia: "",
        question: "Como você planeja o seu salto? O que deve ser levado em consideração?",
        answer: "Resposta: Planejar saída, exercícios de queda livre, altura de separação e comando, navegação e pouso. Deve ser considerado: tipo de salto, experiência, quantidade de paraquedistas, tamanho do velame, área de pouso prevista, direção do vento, etc."
    },{
        materia: "",
        question: "De quem você pega orientação em caso de emergência na aeronave?",
        answer: "Resposta: Meu instrutor, ou o instrutor mais experiente a bordo."
    },{
        materia: "",
        question: "Por que é importante sair no tempo certo da contagem?",
        answer: "Resposta: Para que todos saiam no mesmo tempo e em um bom Ponto de Saída."
    },{
        materia: "",
        question: "Qual é o propósito do flare no pouso?",
        answer: "Resposta: converter movimento a frente em sustentação."
    },{
        materia: "",
        question: "Como você resolve um pilotinho estagnado?",
        answer: "Resposta: modifico a posição do corpo para alterar o fluxo de ar nas minhas costas."
    },{
        materia: "",
        question: "Qual é a ação apropriada se estiver abaixo de 1000ft com um paraquedas que não é possível pousar?",
        answer: "Resposta: Imediatamente acione o reserva."
    },{
        materia: "",
        question: "Qual o procedimento correto para uma Abertura Fora de Sequencia (AFS)?",
        answer: "Resposta: até duas tentativas de comando ou dois segundos buscando o punho do principal. Se não for possível, faça o procedimento de emergência."
    },{
        materia: "",
        question: "Qual o comprimento da pista no aeroporto que você salta?",
        answer: "Boituva: 700x30mts (SDOI)."
    },{
        materia: "",
        question: "Em queda livre estável (face-ao-solo), quanto tempo em média demora para percorrer 1.000ft?",
        answer: "Resposta: 5.5 segundos"
    },{
        materia: "",
        question: "O que é melhor, comandar o paraquedas instável, ou recuperar a estabilidade antes do comando mesmo que ele seja mais baixo do que a altura planejada?",
        answer: "Resposta: Comandar na altura prevista, independente da estabilidade."
    },{
        materia: "",
        question: "Em um vento moderado, a qual distância de um obstáculo você espera sentir turbulência?",
        answer: "Resposta: 10 a 20 vezes o tamanho do obstáculo."
    },{
        materia: "",
        question: "Qual o melhor procedimento a se adotar quando você sente turbulência na navegação?",
        answer: "Resposta: mantenha o velame voando em linha reta e a voo total (com os braços altos) / ou conforme orientação do fabricante."
    },{
        materia: "",
        question: "Como você sabe se o container do reserva foi aberto após a data constando na caderneta?",
        answer: "Resposta: o selo do dobrador no pino de fechamento do reserva."
    },{
        materia: "",
        question: "Se o vento de solo está soprando do oeste para o leste, qual a sua direção de voo quando estiver indo do ponto A para o B (perna do vento)?",
        answer: "Resposta: Leste."
    },{
        materia: "",
        question: "Como você manobra um paraquedas que tenha uma linha de freio arrebentada?",
        answer: "Resposta: pelos tirantes traseiros"
    },{
        materia: "",
        question: "Como você se prepararia para pousar sem utilizar a linha dos freios?",
        answer: "Resposta: treinando em outras ocasiões, durante a navegação, o flare com o tirante traseiro."
    },{
        materia: "",
        question: "Quem é responsável por observar as condições meteorológicas antes do salto?",
        answer: "Resposta: o paraquedista e o piloto"
    },{
        materia: "",
        question: "Descreva um stall?",
        answer: "Resposta: estado estável de redução do planeio e aumento da taxa de descida."
    },{
        materia: "",
        question: "Quando ocorre um stall de velame?",
        answer: "Resposta: no final de um flare."
    },{
        materia: "",
        question: "Descreva seu procedimento para pousar em vento forte.",
        answer: "Resposta: fique longe de obstáculos (especialmente se estiver atrás deles), desconectar o RSL, pousar em rolamento, e se necessário, após o pouso desconecte o paraquedas principal."
    },{
        materia: "",
        question: "Quantas linhas no grupo A tem um velame de nove células?",
        answer: "Resposta: dez."
    },{
        materia: "",
        question: "Que grupos de linhas saem dos tirantes traseiros?",
        answer: "Resposta: grupo C, D e linhas de freio."
    },{
        materia: "",
        question: "Quem é responsável pela condição de voo da aeronave?",
        answer: "Resposta: o piloto."
    },{
        materia: "",
        question: "A partir de qual altitude é necessário uso de oxigênio suplementar pelos paraquedistas?",
        answer: "Resposta: 15.000ft."
    },{
        materia: "",
        question: "O que aconteceria se o tirante do lado do RSL for desconectado?",
        answer: "Resposta: O velame reserva é acionado com o principal ainda conectado no outro tirante."
    },{
        materia: "",
        question: "Qual a melhor forma de manter a integridade dos tirantes do paraquedas principal?",
        answer: "Resposta: inspeção e manutenção preventiva, dobragem correta, alojamento do loop, e comando estável (ajudam a prevenir aberturas fortes)."
    },{
        materia: "",
        question: "Qual a melhor forma de alterar a direção de um paraquedas perdendo o mínimo de altura possível?Resposta: curva rasa (flat turn).",
        answer: ""
    },{
        materia: "",
        question: "O que acontece com o uso agressivo dos batoques no flare?",
        answer: "Resposta: stall"
    },{
        materia: "",
        question: "Como voo a meio freio afeta o voo de velame?",
        answer: "Resposta: descida mais lenta, muda o angulo de ataque do paraquedas."
    },{
        materia: "",
        question: "O que é o glide do velame?",
        answer: "Resposta: O ângulo em que o pára-quedas desce em direção ao seu ponto de aterrissagem projetado."
    },{
        materia: "",
        question: "Como determinar o seu glide?",
        answer: "Resposta: Olhe em frente para encontrar o ponto no chão que parece não se movimentar (subir ou descer)."
    },{
        materia: "",
        question: "Como o vento influencia seu glide?",
        answer: "Respostas: O glide se tornará mais íngreme à medida que o vento diminui ao voar com vento de cauda. O glide se tornará mais íngreme à medida que a velocidade do vento aumenta ao voar contra o vento (vento de nariz)."
    },{
        materia: "",
        question: "Qual a velocidade em relação ao solo, se a aeronave está voando a 90 nós, e está com um vento de nariz de 50 nós.",
        answer: "Respostas: 40 nós."
    },{
        materia: "",
        question: "Qual a altura mínima de comando para paraquedistas categoria C?",
        answer: "Categoria C - aberto a 2500ft"
    },{
        materia: "",
        question: "Qual o máximo de vento permitido para categoria C?",
        answer: "32 km"
    },{
        materia: "",
        question: "Se um paraquedista sair da aeronave, e em queda livre por um minuto, com um vento que sopra do oeste a 30 km/hr. 1) Quanto ele irá deslocar em relação ao ponto de saída? 2) Para que direção?",
        answer: "1) ½ (meio) quilômetro. 2) Leste."
    },{
        materia: "",
        question: "O que a sua categoria te permite fazer?",
        answer: "Filmar tandem, saltar com cat A, Wingsuit"
    },{
        materia: "",
        question: "O que você precisa fazer para poder saltar estando acima do limite de dias sem saltos? Qual o limite para sua categoria",
        answer: "Acima de 18 meses,  reciclagem e pelo menos um salto acompanhado de instrutor."
    },{
        materia: "",
        question: "Qual o perigo de fazer uma curva de batoques agressiva?",
        answer: "Respostas: provocar um twist das linhas."
    },{
        materia: "",
        question: "O que um velame faz após uma curva de batoque?",
        answer: "Respostas: mergulha (Arco de recuperação)."
    },{
        materia: "",
        question: "Por que é uma ideia ruim arrastar o container no momento da dobragem?",
        answer: "Respostas: desgaste desnecessário do sistema três argolas e do loop."
    },{
        materia: "",
        question: "Por que é ruim manter seu paraquedas no sol?",
        answer: "Respostas: Raios ultravioletas agridem o nylon."
    },{
        materia: "",
        question: "Quais danos podem ocorrer de manter um equipamento no carro por tempo prolongado durante o verão?",
        answer: "Respostas: reduz a vida útil da bateria do DAA, degradação de componentes"
    },{
        materia: "",
        question: "O que indica uma nuvem do tipo Cumulus Nimbus?",
        answer: "Respostas: tempestades com raios na proximidade, rajadas de vento repentinas.."
    },{
        materia: "",
        question: "Qual o maior perigo para a aeronave e os paraquedistas quando está se aproximando uma frente (meteorológica)?",
        answer: "Respostas: rápidas e violentas alterações no vento e nas rajadas."
    },{
        materia: "",
        question: "Por que é necessário limpar periodicamente os cabos flexíveis?",
        answer: "Respostas: poeira e óleo podem ficar depositados no conduite."
    },{
        materia: "",
        question: "Qual efeito tem puxar o tirante frontal do velame?",
        answer: "Respostas: aumenta drasticamente o ângulo de ataque (taxa de descida do velame)."
    },{
        materia: "",
        question: "Quando estiver fazendo manobras com os tirantes, o que fazer com os batoques?",
        answer: "Respostas: mantenha os batoques nas mão."
    }]

const nextQuestion = () => {
    index = Math.floor(Math.random() * simulado.length)
    setQuestion(simulado[index].question)
    setAnswer(simulado[index].answer)
    setEnableAnswer(false)
}
const verifyAnswer = () => {
    if(index = 0) {
        setAnswer("Faça uma pergunta.")    
    } else {
        setEnableAnswer(true)
    }
}

    return(
        <>
        <Header />
        <div className="main_div">
        <p id="question"> {question} </p>
        <p id="answer"> {enableAnswer? answer:""}</p>
        <button className="button" id="verifyBtn" onClick={verifyAnswer}> Verificar resposta </button>
        <button className="button" id="nextBtn" onClick={nextQuestion}> Gere uma pergunta! </button>
    </div>
        <Footer />
        </>
    )
}

export default Simulados