//declare the game objects
var TinkerStation = function() {
  this.playerTurn = 1;
  this.p1Score = 0;
  this.p2Score = 0;

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
  }, {
    question: "How far can you walk into the woods?",
    answer: "Half way",
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


  //It should return an integer that is the number of questions in a game
  this.totalQuestions = function numberOfQuestions() {
    return this.questions.length;
  };


  //It should return an integer that is the zero-based index of the current question in the quiz
  this.currQn = function currentQuestion() {
    //randomize question and get index
    var currQnIdx = Math.floor(Math.random() * this.questions.length);

    return currQnIdx;
  };


  //It should return an integer that is the zero-based index the correct answer for the current question
  this.correctAns = function correctAnswer() {
    var answer = this.questions[this.currQn()].answer;

    return answer;
  };


  //It should return an integer that is the number of choices for the current question
  this.noOfOptions = function numberOfAnswers() {
    return this.questions[this.currQn()].options.length;
  };


  //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
  this.playerChoice = function playTurn(choice) {
    if (choice == this.correctAns) {
      if (this.playerTurn == 1) {
        this.p1Score++; //player 1 score points
      } else {
        this.p2Score++; //player 2 score points
      }
      return true;
    } else {
      return false;
    }
  };


  //It should return a true or false if the quiz is over.
  this.checkGameOver = function isGameOver() {
    if (this.totalQuestions === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  //It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
  this.checkWinner = function whoWon() {
    //checks which player win or draw
    if (this.p1Score > this.p2Score) {
      return 1;
    }
    else if(this.p2Score > this.p1Score) {
      return 2;
    }
    else {
      return 3;
    }
    //checks if game is not over
    if (this.checkGameOver === false) {
      return 0;
    }
  };

  //It should restart the game so it can be played again.
  this.reset = function restart() {
    location.reload();      //reload page
  };

};

function mouseClicked() {
  //generate question

}


$(document).ready(function() {
  console.log('Dom ready');

  //start game
  var game = new TinkerStation();
  //retrieve question text
  var question = game.questions[game.currQn()].question;
  //retrieve options array
  var currOptions = game.questions[game.currQn()].options;
  //console.log(game.totalQuestions());
  console.log(game.questions[game.currQn()].question);
  console.log('The current question index is ' +game.currQn());
  //console.log(game.correctAns());
  //console.log(game.noOfOptions());

  $('h3').text(question);
  //generate question and options

  //In the case of an array, the callback is passed an array index and a corresponding array value each time. The value can also be accessed through the this keyword
  $('button').each(function(optionsIndex) {
    $(this).text(currOptions[optionsIndex]);
  });


  //adding buttons
  $('button').on('click', function() {
    console.log('clicked');

    //generate question

  });


});
