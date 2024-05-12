const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

function verificarScore() {
    // Supondo que você tenha uma variável chamada "score" que contenha o valor do score
    var score = 700; // Exemplo, substitua isso pelo seu valor real de score

    // Verifica se o score é maior que 700
    if (score > 700) {
        // Redireciona para uma nova página HTML
        window.location.href = <a href="./game2.html">Ir para o Game 2</a>;
    } else {
        alert("Seu score não atende aos requisitos para acessar a nova página.");
    }
}