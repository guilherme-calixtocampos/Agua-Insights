document.addEventListener('DOMContentLoaded', () => {
    const username = document.querySelector('#username');
    const saveScoreBtn = document.querySelector('#saveScoreBtn');
    const finalScore = document.querySelector('#finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    const MAX_HIGH_SCORES = 5;

    finalScore.innerText = mostRecentScore;

    // Ativa ou desativa o botão conforme o campo de nome
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });

    // Função para salvar o score
    const saveHighScore = e => {
        e.preventDefault();  // Previne o comportamento padrão do formulário

        const mostRecentName = username.value;  // Pega o nome do campo

        const score = {
            score: mostRecentScore,
            name: mostRecentName
        };

        // Adiciona a pontuação ao array
        highScores.push(score);

        // Ordena os high scores
        highScores.sort((a, b) => b.score - a.score);

        // Limita o número de high scores a MAX_HIGH_SCORES
        highScores.splice(MAX_HIGH_SCORES);

        // Salva os high scores no localStorage
        localStorage.setItem('highScores', JSON.stringify(highScores));

        // Redireciona para a página de high scores
        window.location.assign('./highscores.html');
    };

    // Associa a função ao formulário
    const saveScoreForm = document.querySelector('#saveScoreForm');
    saveScoreForm.addEventListener('submit', saveHighScore);
});
