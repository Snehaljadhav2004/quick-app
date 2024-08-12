function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'Structured Query Language',
        q2: 'Cross-Site Scripting',
        q3: 'Cross-Site Request Forgery'
    };

    // Check answers
    const formData = new FormData(quizForm);
    for (let [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    // Display result
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
}
