const question = [
    {
        'que': "Who wrote the play 'Romeo and Juliet'?",
        'a': "William Shakespeare",
        'b': "Jane Austen",
        'c': "Charles Dickens",
        'd': "F. Scott Fitzgerald",
        'correct': "a",
        },
        
        {
        'que': "Which novel features the character Jay Gatsby and explores the American Dream?",
        'a': "The Great Gatsby",
        'b': "To Kill a Mockingbird",
        'c': "1984",
        'd': "Pride and Prejudice",
        'correct': "a",
        },
        
        {
        'que': "In 'To Kill a Mockingbird,' who is the mysterious neighbor that the children are fascinated by?",
        'a': "Boo Radley",
        'b': "Atticus Finch",
        'c': "Tom Robinson",
        'd': "Mayella Ewell",
        'correct': "a",
        },
        
        {
        'que': "Which ancient Greek epic poem tells the story of the Trojan War and the adventures of Odysseus?",
        'a': "The Iliad",
        'b': "The Odyssey",
        'c': "The Aeneid",
        'd': "The Epic of Gilgamesh",
        'correct': "b",
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
    <a href="index4.html"><button class="TryAgain"><h6>Try Again</h6></button></a>
    <a href="index.html"><button class="home"><h6>Home</h6></button></a>
    `;
};

// Initial call
loadQuestion();
