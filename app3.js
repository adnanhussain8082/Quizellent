const question = [
    {
        'que': "What is the smallest unit of matter?",
        'a': "Atom",
        'b': "Molecule",
        'c': "Cell",
        'd': "Particle",
        'correct': "a",
        },
        
        {
        'que': "Who is credited with the development of the theory of general relativity?",
        'a': "Isaac Newton",
        'b': "Albert Einstein",
        'c': "Galileo Galilei",
        'd': "Stephen Hawking",
        'correct': "b",
        },
        
        {
        'que': "Which planet is known as the 'Red Planet'?",
        'a': "Venus",
        'b': "Mars",
        'c': "Jupiter",
        'd': "Saturn",
        'correct': "b",
        },
        
        {
        'que': "What is the process by which green plants make their own food using sunlight?",
        'a': "Photosynthesis",
        'b': "Respiration",
        'c': "Fermentation",
        'd': "Transpiration",
        'correct': "a",
        }
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        endQuiz();
    }
    reset();
    const data = question[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    const box = document.getElementById("box");
    box.innerHTML = `
    <div Style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    <a href="index3.html"><button class="TryAgain"><h6>Try Again</h6></button></a>
    <a href="index.html"><button class="home"><h6>Home</h6></button></a>
    `;
};

// Initial call
loadQuestion();
