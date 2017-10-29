/*Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:
	a. User makes a choice
	b. Computer makes a choice
	c. A compare function will determine who wins */

// Initializing variables for user and computer choice	
var userChoice = prompt('Select rock, paper or Scissors');
var computerChoice = Math.floor(Math.random()*2);

// Assigning a value to computerchoice depending on the random number generated.
switch (computerChoice){
    case 0:
        computerChoice === 'rock';
        break;
    case 1:
        computerChoice === 'paper';
        break;
    case 2:
        computerChoice === 'scissors';
        break;
}

// A function block to execute the comparison of both the userChoice and computerChoice.
function compare (choice1,choice2) {
    if (choice1 === choice2) {
        return 'The result is a tie';
    } else if (choice1 === 'rock') {
        if (choice2 === 'paper') {
            return 'Paper wins';
        } else {
            return 'rock wins';
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'scissors') {
            return 'scissors wins';
        } else {
            return 'paper wins';
        }
    } else if (choice1 === 'scissors') {
        if (choice2 === 'rock') {
            return 'rock wins';
        } else {
            return 'scissors wins';
        }
    }
}

console.log(compare(userChoice,computerChoice));
