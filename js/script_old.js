// numberOfQuestions()
//
// It should return an integer that is the number of questions in a game
// currentQuestion()
//
// It should return an integer that is the zero-based index of the current question in the quiz
// correctAnswer()
//
// It should return an integer that is the zero-based index the correct answer for the currrent question
// numberOfAnswers()
//
// It should return an integer that is the number of choices for the current question
// playTurn(choice)
//
// It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
// isGameOver()
//
// It should return a true or false if the quiz is over.
// whoWon()
//
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
// restart()


$(document).ready(function() {

  console.log('dom ready');

  var turn = 1;

  var Questions = function() {

    this.setQns = function(questionArr) {
      return questionArr;
    };

    this.setOptions = function(options) {
      return options;
    };

  };

  var questions = [ "What is so fragile that sound can destroy it?",
                    "Which of the following creates a new element?",
                    "totalVolume = 100ml, currentVolume = 50ml. Which of the following is true?"
                  ];

  var answers = [ "Silence",
                  "$('<newelement>')",
                  "One cup full"
                ];

  function numberOfQuestions() {
    //return the number of questions
    return questions.length;
  }
//console.log(numberOfQuestions());
  function currentQuestion() {
    //randomize array index and get the question
    var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    var currQuestionIdx = questions.indexOf(currentQuestion);

    //show question in html
    $('h3').text(currentQuestion);

    function correctAnswer()  {
      //return the answer index if it is currentQuestion
      if(currQuestionIdx === 0) {
        //console.log('sadsaa ' + answers.indexOf("Silence"));
        return answers.indexOf("Silence");
      }
      else if(currQuestionIdx == 1) {
        //console.log('answer 1');
        return answers.indexOf("$('<newelement>')");
      }
      else if (currQuestionIdx == 2) {
        //console.log('answer 2');
        return answers.indexOf('One cup full');
      }
      return correctAnswer();
    }
    return currQuestionIdx;
  }
  currentQuestion();

  function numberOfAnswers() {
    //console.log(currQuestionIdx);
  }
  numberOfAnswers();



});
