// js/script.js
function submitQuiz() {
    // Sample quiz logic
    let score = 0;
    // Check radio buttons, e.g., if document.querySelector('input[name="q1"]:checked').value === 'a') score++;
    // For all 10 questions
    document.getElementById('quizResult').innerHTML = `Your score: ${score}/10`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.createTextNode(data + ' '));
    // Add logic for correct/incorrect in games
}