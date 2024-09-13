//Rubber duck//
function problem() {
    const newProblem = document.getElementById("newProblem").value;
    const newText = document.getElementById("message");
    newText.textContent = newProblem;
    const now = new Date();
    newText.title = now.toLocaleString();
}

document.getElementById("submitProblem").addEventListener("click", function(){
problem();
})