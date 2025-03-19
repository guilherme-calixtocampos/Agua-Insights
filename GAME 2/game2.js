const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Aonde é encontrado o maior número de água doce do mundo?',
        choice1: 'Mares e oceanos',
        choice2: 'Rios, lagos e nascentes',
        choice3: 'Supermercados',
        choice4: 'Marte',
        answer: 2,
    },
    {
        question:"Uma dessas quatro ações evita o disperdício de água. Marque a alternativa correta:",
        choice1: "Lavar a calçada com a mangueira",
        choice2: "Demorar 20 minutos no banho",
        choice3: "Escovar os dentes com a torneira aberta",
        choice4: "Utilizar a água da chuva para lavar o quintal",
        answer: 4,
    },
    {
        question: "Qual dessas ações causa a poluição da água:",
        choice1: "Filtrar a água antes de beber",
        choice2: "Jogar óleo utilizado no ralo da pia",
        choice3: "Reutilizar a água da máquina de lavar",
        choice4: "Fechar a torneira enquanto escova os dentes",
        answer: 2,
    },
    {
        question: "'A água é um elemento essencial para manter a vida e o equilíbrio no Planeta Terra'. Sobre esta afirmação é correto afirmar que:",
        choice1: "A água é um elemento muito abundante e podemos utilizá-la sem preocupação que nunca ira acabar",
        choice2: "Podemos ingerir a água do mar sem nenhum risco",
        choice3: "A maior parte da água do mundo pode ser tratada e reutilizada, por isso podemos usar sem medo",
        choice4: "Apenas 3% da água do planeta é própria para consumo, por isso devemos nos policiar quanto ao nosso consumo",
        answer: 4,
    },
    {
        question: 'Quais são os principais usos da água em uma residência?',
        choice1: 'Lazer e entretenimento',
        choice2: 'Agricultura e indústria',
        choice3: 'Higiene pessoal e limpeza',
        choice4: 'Todas as opções acima',
        answer: 3,
    },
    {
        question:"Quais são as principais causas da escassez de água em algumas regiões do mundo?",
        choice1: "Aquecimento global",
        choice2: "Uso inadequado dos recursos hídricos",
        choice3: "Crescimento populacional",
        choice4: "Todas as opções acima",
        answer: 4,
    },
    {
        question: "Qual é o impacto do desperdício de água na agricultura?",
        choice1: "Aumento da produtividade",
        choice2: " Redução da fertilidade do solo",
        choice3: "Escassez de alimentos",
        choice4: "Desenvolvimento sustentável",
        answer: 2,
    },
    {
        question: "O que podemos fazer para economizar água em nossas casas?",
        choice1: "Deixar as torneiras fechadas enquanto escovamos os dentes",
        choice2: "Utilizar máquinas de lavar louça e roupa sempre que possível",
        choice3: "Tomar banhos demorados",
        choice4: "Todas as opções acima",
        answer: 1,
    },
    {
        question: "Quais são alguns dos impactos da escassez de água nas comunidades locais e globais?",
        choice1: "Aumento da fome e da pobreza",
        choice2: "Conflitos por recursos hídricos",
        choice3: "Prejuízos para a saúde devido à falta de água potável",
        choice4: "Todas as opções acima",
        answer: 4,
    },
    {
        question: "Além das ações individuais, quais são algumas estratégias de gestão que podem ajudar a enfrentar a escassez de água?",
        choice1: "Implementação de tecnologias de reuso de água",
        choice2: "Melhoria da infraestrutura de distribuição de água",
        choice3: "Promoção de práticas agrícolas sustentáveis, como irrigação por gotejamento",
        choice4: "Todas as opções acima",
        answer: 4,
    
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end2.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()