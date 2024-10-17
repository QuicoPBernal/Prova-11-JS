const perguntas = [
    {
        pergunta: "Quem pintou a Mona Lisa?",
        opcoes: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        respostaCorreta: "Leonardo da Vinci"
    },
    {
        pergunta: "Qual o nome do famoso físico que desenvolveu a teoria da relatividade?",
        opcoes: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
        respostaCorreta: "Albert Einstein"
    },
    {
        pergunta: "Em qual país a Revolução Francesa aconteceu?",
        opcoes: ["Inglaterra", "Espanha", "França", "Itália"],
        respostaCorreta: "França"
    },
    {
        pergunta: "Quem foi o primeiro homem a pisar na Lua?",
        opcoes: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        respostaCorreta: "Neil Armstrong"
    }
];

const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const feedbackElement = document.getElementById("feedback");
const reloadButton = document.getElementById("reload");

let perguntaAtual = {};

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function exibirPergunta() {
    const indiceAleatorio = Math.floor(Math.random() * perguntas.length);
    perguntaAtual = perguntas[indiceAleatorio];

    perguntaElement.textContent = perguntaAtual.pergunta;

    const opcoesEmbaralhadas = embaralharArray([...perguntaAtual.opcoes]);
    for (let i = 0; i < opcoesEmbaralhadas.length; i++) {
        opcoesElement.children[i].textContent = opcoesEmbaralhadas[i];
        opcoesElement.children[i].onclick = () => verificarResposta(opcoesEmbaralhadas[i]);
    }

    feedbackElement.textContent = "";
    feedbackElement.classList.remove("correto");
    feedbackElement.classList.remove("incorreto");
    reloadButton.style.display = "none";
}

function verificarResposta(respostaSelecionada) {
    if (respostaSelecionada === perguntaAtual.respostaCorreta) {
        feedbackElement.textContent = "Acertou!!!";
        feedbackElement.classList.add("correto");
    } else {
        feedbackElement.textContent = `Resposta incorreta. A resposta correta é: ${perguntaAtual.respostaCorreta}`;
        feedbackElement.classList.add("incorreto");
    }
    reloadButton.style.display = "block";
}

reloadButton.addEventListener("click", exibirPergunta);

exibirPergunta();
