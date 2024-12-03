const question = [
    {
        'que': "Who is known as the 'Iron Lady' and served as the Prime Minister of the United Kingdom from 1979 to 1990?",
        'a': "Margaret Thatcher",
        'b': "Angela Merkel",
        'c': "Theresa May",
        'd': "Jacinda Ardern",
        'correct': "a",
        },
        
        {
        'que': "In which year did the fall of the Berlin Wall occur, symbolizing the end of the Cold War?",
        'a': "1989",
        'b': "1991",
        'c': "1985",
        'd': "1995",
        'correct': "b",
        },
        
        {
        'que': "Which country's political system is known as a parliamentary democracy with a constitutional monarchy?",
        'a': "United Kingdom",
        'b': "France",
        'c': "Germany",
        'd': "Japan",
        'correct': "c",
        },
        
        {
        'que': "Who was the first President of the United States to be impeached by the House of Representatives?",
        'a': "Andrew Johnson",
        'b': "Bill Clinton",
        'c': "Richard Nixon",
        'd': "Donald Trump",
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
    <a href="index2.html"><button class="TryAgain"><h6>Try Again</h6></button></a>
    <a href="index.html"><button class="home"><h6>Home</h6></button></a>
    `;
};

// Initial call
loadQuestion();
