const highScoresList = document.querySelector('#highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high_score">${score.name} - ${score.score}</li>`
}).join('')