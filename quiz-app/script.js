const quizData = [
    {
        question: 'How old is Shannu?',
        a: '10',
        b: '20',
        c: '24',
        d: '30',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Which built-in method combines the text of two strings and returns a new string?',
        a: 'append()',
        b: 'concat()',
        c: 'attach()',
        d: 'None of the above.',
        correct: 'b'
    },
    {
        question: 'Which built-in method returns the string representation of the number\'s value?',
        a: 'toValue()',
        b: 'toNumber()',
        c: 'toString()',
        d: 'None of the above.',
        correct: 'c'
    },
    {
        question: 'Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
        a: 'pop()',
        b: 'push()',
        c: 'join()',
        d: 'map()',
        correct: 'b'
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit_btn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submit_btn.addEventListener('click', () => {
    
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick = 'location.reload()'>Reload</button>`
        }
    }

    
})