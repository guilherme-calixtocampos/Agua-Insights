document.addEventListener('DOMContentLoaded', () => {
    const highScoresList = document.querySelector('#highScoresList');
    const highScoresRank = document.querySelector('#highScoresRank');
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    // Exibindo os high scores
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");

    // Função de verificação da pontuação
    function valueVerification(score, name) {
        if (score < 200) {
            highScoresRank.innerHTML = `Infelizmente você não atingiu a pontuação mínima para passar ao próximo módulo`;
        } else if (score >= 201 && score < 500) {
            highScoresRank.innerHTML = `Infelizmente você quase atingiu a pontuação mínima para passar ao próximo módulo`;
        } else {
            highScoresRank.innerHTML = `Felizmente você atingiu a pontuação mínima para passar ao próximo módulo`;
        }
    }

    // Acesse a pontuação mais recente armazenada
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    const mostRecentName = localStorage.getItem('mostRecentName');

    // Verifique a pontuação mais recente, se ela existir
    if (mostRecentScore !== null) {
        valueVerification(Number(mostRecentScore));
    }
});
