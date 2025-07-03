const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma criatura de oura dimenssão Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa criatura pode fazer pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar sua shikai no dia a dia seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta criatura chamada holow , uma seifadora de almas te ajuda com essas criaturas No fim de um treinamento ela pede que você treine para você ser o futuro da ociedade das almas. Qual atitude você toma?",
        alternativas: [
            {
                texto: "sua respota e sim, você treina todos os dias para combrater o holow e sert o futuro das sociedades das almas e salvar o rei das almas para ter um futuro melhor na socieda das almas.",
                afirmacao: "Conseguiu utilizar a shikai para o bem maior ."
            },
            {
                texto: "treine para ser o mais forte e protejer karakura.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para para combater o mal."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do seu treinamento você libera sua bankai tensa zanguetsu com isso oque você vai fazer?",
        alternativas: [
            {
                texto: "você combate o mal  derota o sosuke aizen o ex capitão das 13 divissoes da corte.",
                afirmacao: "novos golpe são liberado com seu treinamento como getsuga tenshou ."
            },
            {
                texto: " me preocupo com os ceifadores de alma que morreram no proseso.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de bravos ceifadores."
            }
        ]
    },
    {
        enunciado: "Ao final da guerra dos mil anos reta agora continuar ou parar de ser um shinigami?",
        alternativas: [
            {
                texto: "você então decide dar um tempo de ser um ceifador de almas.",
                afirmacao: " mais você fica em duvida pois metade da sociedade das almas não sabe usar uma bankai."
            },
            {
                texto: "criar um mundo melhor para todos os seres vivos",
                afirmacao: "agora a sociedade das almas é um lugar magnifico e o palacio do rei das almas é um lugar seguro"
            }
        ]
    },
    {
        enunciado: "você vem um holow oque você faz? ",
        alternativas: [
            {
                texto: "eu arebento a fuça desse holow pois sou ichigo kuroaki.",
                afirmacao: "você atualmente é a pessoa mais forte de toda realidade."
            },
            {
                texto: "mais ainda tem o sosuke aizen oque você faz?.",
                afirmacao: "eu acabo com ele também porque ou ichigo kurosaqui uma mistura de shinigami, quincy, fullbring, e humano. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
