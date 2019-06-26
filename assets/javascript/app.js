$(document).ready(function(){
// --- start game once user clicks "begin"---
$('#startBtn').on('click'.timeRemaining.gameTime)
})
//-----------set a timer
var gameTime = {
    timeRemaining: = 30

    startTimer: function(){
        $('#timer').html('Time Remaining ' + gameTime.timeRemaining);
        setInterval(gameTime.number, 1000);
        $('#start-page').hide();
        game.showQuestions();
    };
    
    // counting down
    number: function() {
        gameStart.timeRemaining--;
        $('#timer').html('Time Remaining ' + gameTime.timeRemaining);
        if (gameTime.timeRemaining === 0) {
            gameTime.stopTimer();
            $('#timer').empty();
        }
        

    }
    stopTimer: function () {
        clearInterval();
    },
}

//------------Trivia

var questions = [
    {
        question: 'In what movie did actor Val Kilmer coin the quote "Im your Huckleberry"?',
        answers: ['The Doors', 'Batman Forever', 'Tombstone', 'Top Gun'],
        correct: 'Tombstone'
    },
    {
        question: 'For what movie did Leonardo DiCaprio wins his first Oscar?',
        answers: ['Wolf of Wall Street', 'The Revenant', 'The Aviator', 'Shutter Island'],
        correct: 'The Revenant'
    },
    {
        question: "What was Harrison Ford's job before taking his role as Han Solo?",
        anmswers: ['Janitor', 'Web Developer', 'Machine Operator', 'Carpenter'],
        correct: 'Carpenter'
    }
]