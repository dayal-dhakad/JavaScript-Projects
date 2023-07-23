const questions = [
    {
        'que' : 'Which of the following is a markup language?',
        'a': 'CSS',
        'b': 'HTML',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'b'
    },
    {
        'que' : 'CSS stands for?',
        'a': 'CSS',
        'b': 'HTML',
        'c':'Cascading styles sheet',
        'd':'PHP',
        'correct':'c'
    },
    {
        'que' : 'Javascript is a _____ language?',
        'a': 'CSS',
        'b': 'HTML',
        'c':'JavaScript',
        'd':'Programming',
        'correct':'d'
    }
  
]

let index = 0; 
let total = questions.length;
let correct = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll('.options');

const loadQuestion = () => {
    if(index === total){
        return endQuiz() 
    }
     reset();
     const data = questions[index];
     quesBox.innerText  = `${index+1}) ${data.que}`;
     optionsInput[0].nextElementSibling.innerText = data.a;
     optionsInput[1].nextElementSibling.innerText = data.b;
     optionsInput[2].nextElementSibling.innerText = data.c;
     optionsInput[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = ()=>{
    const data = questions[index];
    const answer = getAnswer()
    if(answer === data.correct){
        correct++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let ans ;
    optionsInput.forEach(
        (input)=>{
            if(input.checked){
                ans =  input.value
                
            }
            
        }
        
    )
    return ans;
}

const reset = () =>{
    optionsInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center;">
    <h3> Your Response is Submitted Successfully </h3>
    <h2> ${correct} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();

