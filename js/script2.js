//declare the game objects
var tinkerStation = function() {
  var playerTurn = 1,
    p1Score = 0,
    p2Score = 0;

  //store questions, answers and options inside array
  this.questions = [{
    question: "Your opponent sends out a Flying Pokémon, which of the following types should you pick?",
    answer: "Electric Type",
    options: ["Psychic Type", "Fighting Type", "Electric Type"],
  }, {
    question: "Which Pokémon seems to always have a headache?",
    answer: "Psyduck",
    options: ["Psyduck", "Magikarp", "Ditto"],
  }, {
    question: "What is so fragile that sound can destroy it?",
    answer: "Silence",
    options: ["Love", "Aerogel", "Silence"],
  }, {
    question: "A cup can hold 300ml, the current volume is 150ml. Which of the following is true?",
    answer: "The cup is full",
    options: ["The cup is half-full", "The cup is full", "The cup is half-empty"],
  }, {
    question: "parseFloat('AA2') = ?",
    answer: "NaN",
    options: ["2", "112", "NaN"],
  }, {
    question: "Which of the following creates a new element in DOM?",
    answer: "$('<newelement>')",
    options: ["$<newelement>", "$('<newelement>')", "$('newelement')"],
  }];

  //It should return an integer that is the number of questions in a game
  this.totalQuestions = function numberOfQuestions() {
    return this.questions.length;
  };

  //It should return an integer that is the zero-based index of the current question in the quiz
  this.currQuestion = function currentQuestion() {
    //randomize question and get index
    // var randomizeQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    var currQuestionIdx = Math.floor(Math.random() * this.questions.length);

    return currQuestionIdx;
  };
  for (var newquestion in this.questions[this.currQuestion()]) {
    var showQuestion = $('h3');
    showQuestion.text(this.questions[this.currQuestion()].question);
  }


};



//It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer() {}

//It should return an integer that is the number of choices for the current question
function numberOfAnswers() {}

//It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
function playTurn(choice) {}

//It should return a true or false if the quiz is over.
function isGameOver() {}

//It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
function whoWon() {}

//It should restart the game so it can be played again.
function restart() {}


//put at bottom because all variables declared on top
$(document).ready(function() {
  console.log('Dom ready');

  //start game
  var game = new tinkerStation();
  console.log(game.totalQuestions());
  console.log(game.currQuestion());

  //get question text

});
