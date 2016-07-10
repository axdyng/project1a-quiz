//declare game constructor
var TinkerStation = function() {
  //this.totalQuestions = totalQuestions;
  this.playerTurn = 1;
  this.p1Score = null;
  this.p2Score = null;

  //quiz questions
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
  }, {
    question: "How far can you walk into the woods?",
    answer: "Half way in",
    options: ["Deep in", "Half way in", "Ain't gonna walk in"],
  }, {
    question: "Who among them is the youngest ruler?",
    answer: "Puyi The Last Emperor",
    options: ["Alexander The Great", "Puyi The Last Emperor", "Augustus Caesar"],
  }, {
    question: "'Nephelococcygia' is the practice of doing what?",
    answer: "Finding shapes in clouds",
    options: ["Breaking glass with your voice", "Finding shapes in clouds", "Sleeping with you eyes open"],
  }, {
    question: "Which insect shorted out a computer and inspired the term 'computer bug'?",
    answer: "Moth",
    options: ["Moth", "Flying Roach", "Fly" ],
  }];

};

//declare game functions
TinkerStation.prototype.numberOfQuestions = function() {
  //It should return an integer that is the number of questions in a game
  return this.questions.length;
};

TinkerStation.prototype.currentQuestion = function() {
  //It should return an integer that is the zero-based index of the current question in the quiz
  this.currQnIdx = Math.floor(Math.random() * this.questions.length);
  return this.currQnIdx;
};

TinkerStation.prototype.correctAnswer = function() {
  //It should return an integer that is the zero-based index the correct answer for the current question
  this.correctAns = this.questions[this.currQnIdx].answer;
  return this.correctAns;
};

TinkerStation.prototype.numberOfAnswers = function() {
  //It should return an integer that is the number of choices for the current question
  return this.questions[this.currQnIdx].options.length;
};

TinkerStation.prototype.playTurn = function(choice) {
  //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
  
};








$(document).ready(function() {
  console.log('Dom Ready');

  var game = new TinkerStation();
  var currQnSet = game.questions[game.currentQuestion()];
  $('h3').text(currQnSet.question);   //show question

  $('button').each(function(optionIndex) {
    $(this).text(currQnSet.options[optionIndex]);   //show options in each button
  });


});
