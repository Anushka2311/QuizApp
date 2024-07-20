const questions= [
{
  question: "Select the valid statement?",
  answers: [
    { text: "char[] ch=new char(5)" , correct: false},
    { text: "char[] ch=new char[5]" , correct: true},
    { text: "char[] ch=new char()" , correct: false},
    { text: "char[] ch=new char[]" , correct: false},
  ]
},

{
    question: "Select the valid statement to declare and intialize an array",
    answers: [
      { text: "int[] A = {1,2,3}" , correct: true},
      { text: "int[] A = {}" , correct: false},
      { text: "int[] A = (1,2,3)" , correct: false},
      { text: "int[][] A = {1,2,3}" , correct: false},
    ]

},


{
    question: "What is the entry point of a program in Java?",
    answers: [
      { text: "main() class" , correct: false},
      { text: "The first line of code" , correct: false},
      { text: "Last line of code" , correct: false},
      { text: "main() method" , correct: true},
    ]

},

{
     question: "Arrays in java are?",
     answers: [
      { text: "Object refrences" , correct: false},
      { text: "objects" , correct: true},
      { text: "Primitive data type" , correct: false},
      { text: "None" , correct: false},
    ]

},

{
  question: "Which of these is a type of variable in Java?",
  answers: [
   { text: "Instance Variable" , correct: false},
   { text: "Local Variable" , correct: false},
   { text: "Static Variable" , correct: false},
   { text: "All of these" , correct: true},
 ]

},

{
  question: "What is type casting in Java ?" ,
  answers: [
   { text: "Casting variable to the class" , correct: false},
   { text: "Creating a new variable" , correct: false},
   { text: "It is converting type of a variable from one type to another" , correct: true},
   { text: "All of these" , correct: false },
 ]

},
{
  question: "Which of the following can be declared as final in java?",
  answers: [
   { text: "Class" , correct: false},
   { text: "Method" , correct: false},
   { text: "Variable" , correct: false},
   { text: "All of these" , correct: true},
 ]

},

{
  question: "WThe break statement in Java is used to ___.",
  answers: [
   { text: "Terminates from the loop immediately" , correct: true},
   { text: "Terminates from the program immediately" , correct: false},
   { text: "Skips the current iteration" , correct: false},
   { text: "All of these" , correct: false},
 ]

}




];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
}
else{
    selectedBtn.classList.add("incorrect");
}

Array.from(answerButtons.children).forEach(button=>{
  if(button.dataset.correct==="true"){
    button.classList.add("correct");
    

  }
  button.disabled=true;
});
 nextButton.style.display="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
    }
    else{
      showScore();
    }
  }

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
});



startQuiz();




