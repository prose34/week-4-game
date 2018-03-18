// initialize variables
// get random number  between 19-120
// randomize value of crystal after each game assign to a new random number  1-12
// when user clicks on a crystal add its value to the user total. html too
// if user total = random number user wins and reset game. alert. add to wins. 
// if user total is greater than random number then reset the game. alert. add to losses








// start declaring global variables
let wins = 0;
let losses = 0;
let userScore = 0;

// generate the random number that the user will attempt to match. number is between 19-120.
let randomNumber = Math.floor(Math.random()*(120-19+1)) + 19;
$('#randomNumber').text(randomNumber);
console.log(randomNumber); 
// log the starting random number here

let gem1randomNumber = Math.floor(Math.random() * 12) + 1;
let gem2randomNumber = Math.floor(Math.random() * 12) + 1;
let gem3randomNumber = Math.floor(Math.random() * 12) + 1;
let gem4randomNumber = Math.floor(Math.random() * 12) + 1;

console.log(gem1randomNumber);
console.log(gem2randomNumber);
console.log(gem3randomNumber);
console.log(gem4randomNumber);
// log the starting random values of the gems

// this function will reset the user's gem-total/clicked score to 0
// it will generate new random numbers for the user to match and for each individual crystal
// log the new values if you want to cheat in the console
// this does not reset the wins/losses tracker
function reset () {

    userScore = 0;
    $('#userGameScore').text(userScore);

    randomNumber = Math.floor(Math.random()*(120-19+1)) + 19;
    $('#randomNumber').text(randomNumber);
    console.log(randomNumber);


    gem1randomNumber = Math.floor(Math.random() * 12) + 1;
    gem2randomNumber = Math.floor(Math.random() * 12) + 1;
    gem3randomNumber = Math.floor(Math.random() * 12) + 1;
    gem4randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log(gem1randomNumber);
    console.log(gem2randomNumber);
    console.log(gem3randomNumber);
    console.log(gem4randomNumber);

}

// this function is the logic to check and see if the user score matches the random number
// if you win, add to win count and reset the game
// if you lose add to the losses count and reset the game
function winCheck () {
    if (randomNumber === userScore) {
        alert("YOU WIN!");
        wins++;
        $('#wins').text(wins);
        reset();
    } else if (randomNumber < userScore) {
        alert("LOSER!")
        losses++
        $('#losses').text(losses);
        reset();
    }
}



// Below is the code for each button that will add the randomly generated number for each gem to the user's total
// you must add the jQuery here or else only the starting value inside the html will show

$('#diamond').click(function () {
    userScore += gem1randomNumber;
    $('#userGameScore').text(userScore);
    winCheck();

});

$('#emerald').click(function () {
    userScore += gem2randomNumber;
    $('#userGameScore').text(userScore);
    winCheck();

});

$('#ruby').click(function () {
    userScore += gem3randomNumber;
    $('#userGameScore').text(userScore);
    winCheck();

});

$("#shappire").click(function () {
    userScore += gem4randomNumber;
    $('#userGameScore').text(userScore);
    winCheck();

});




//use random number and say click here to get started

// i'd like to have a function that you can put in each .click reference to automatically track
// which object was clicked and add to the user score according to that. .data('clicked') may work
// try tracking for clicked objects