const question = [
    {
        question: "   HTML ka full form kya hota hai ? ",
        options: [
            "1. Hyper Text Markup Language",
            "2. High Text Machine Language",
            "3. Home Tool Markup Language",
            "4. Hyper Tool Markup Language"
        ],
        answer: 0
    }
];
let currentQuestion = 0;
    let score = 0;
function loadQuestion(){
    let q = question[currentQuestion];
    document.getElementById("question1").innerText = q.question;
    let p = currentQuestion+1;
    document.getElementById("question1").innerText = (currentQuestion+1)+" . "+q.question;
    document.getElementById("option1").innerText=q.options[0];
    document.getElementById("option2").innerText = q.options[1];
    document.getElementById("option3").innerText = q.options[2];
    document.getElementById("option4").innerText = q.options[3];
}
let selectAnswer = -1;
function selectAns(index){
selectAnswer = index;
if(selectAnswer == question[currentQuestion].answer){
    score++;
}
}
function nextQuestion(){
    if(selectAnswer == question[currentQuestion].answer){
        score++;
    }
}
loadQuestion();
