function saudar() {
    var nome = document.getElementById("nameInput").value;
    if (nome) {
        alert("Olá, " + nome + "! Feliz Páscoa!");
    } else {
        alert("Por favor, insira seu nome.");
    }
}
