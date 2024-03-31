var enigmas;
var enigmaAtualIndex = 0;

function carregarEnigmas() {
    fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
        enigmas = data;
        apresentarEnigma();
    });
}

function apresentarEnigma() {
    document.getElementById("enigma").textContent = enigmas[enigmaAtualIndex].enigma;
    document.getElementById("enigma").style.display = "block";
    document.getElementById("respostaInput").style.display = "inline-block";
    document.getElementById("enviarResposta").style.display = "inline-block";
}

function verificarResposta() {
    var resposta = document.getElementById("respostaInput").value.toLowerCase();
    var respostaCorreta = enigmas[enigmaAtualIndex].resposta.toLowerCase();

    if (resposta === respostaCorreta) {
        alert("Resposta correta! Parabéns!");
        enigmaAtualIndex++;
        if (enigmaAtualIndex < enigmas.length) {
            document.getElementById("respostaInput").value = "";
            apresentarEnigma();
        } else {
            alert("Você é incrível. Seu tesouro poderá ser encontrado em " + enigmas[enigmas.length - 1].local);
        }
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}

function iniciarBrincadeira() {
    var params = new URLSearchParams(window.location.search);
    var nome = params.get('nome');
    document.getElementById("nome").textContent = nome;
    carregarEnigmas();
}
