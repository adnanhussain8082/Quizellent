const question = [
    {
        'que': "Who was the first President of the United States?",
        'a': "George Washington",
        'b': "Thomas Jefferson",
        'c': "John Adams",
        'd': "James Madison",
        'correct': "b",
        },
        
        {
        'que': "In which year did the Titanic sink?",
        'a': "1912",
        'b': "1905",
        'c': "1920",
        'd': "1931",
        'correct': "c",
        },
        
        {
        'que': "What event marked the beginning of World War II?",
        'a': "Invasion of Poland",
        'b': "Attack on Pearl Harbor",
        'c': "D-Day",
        'd': "Atomic bombings of Hiroshima and Nagasaki",
        'correct': "d",
        },
        
        {
        'que': "Who was the ancient Egyptian queen known for her alliance with Mark Antony?",
        'a': "Cleopatra",
        'b': "Nefertiti",
        'c': "Hatshepsut",
        'd': "Isis",
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
    <a href="index1.html"><button class="TryAgain"><h6>Try Again</h6></button></a>
    <a href="index.html"><button class="home"><h6>Home</h6></button></a>
    `;
};

// Initial call
loadQuestion();
