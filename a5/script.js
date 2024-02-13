function checkAnswer(event, question) {
    if (event.key == "Enter") {
        var correctAnswer;
        var questionID;
        var col;
        switch (question) {
            case "question1":
                correctAnswer="academic instructional center west wing";
                questionID = "q1";
                col = "first";
                break;
            case "question2":
                correctAnswer="klipsun";
                questionID = "q2";
                col = "second";
                break;
            case "question3":
                correctAnswer="vik muniz";
                questionID = "q3";
                col = "third";
                break;
            case "question4":
                correctAnswer="5";
                questionID = "q4";
                col = "fourth";
                break;
            default:
                break;
        }
        var input = document.getElementById(questionID);
        var guess = input.value.toLowerCase();
        var colPos = document.getElementById(col);
        if(correctAnswer == guess) {
            colPos.classList.add("found");
        }
        input.value = "";
    }
}