
/*Initializing magicBall variable - This is generated as a random number from 0 to 7.
This will provide 8 variations in output */
let magicBall = Math.floor((Math.random()*7));

//Initializing fourtuneBall variable - This is used to provide a result for the random number generated for magicBall
let fortuneBall = '';

switch (magicBall) {
  case 0:
    fortuneBall = 'YOU ARE destined for great things';
    break;
  case 1:
    fortuneBall = 'Oh! boy you have such a dark path ahead!!!';
    break;
    case 2:
    fortuneBall = 'a day is yet to come when you will rise and shine';
    break;
    case 3:
    fortuneBall = 'I am sorry. run run run';
    break;
    case 4:
    fortuneBall = 'you are the loser in your team';
    break;
    case 5:
    fortuneBall = 'your true love is within your circle';
    break;
    case 6:
    fortuneBall = 'YOU ARE FUCKED UP';
    break;
    case 7:
    fortuneBall = 'get ready for a roller coaster ride in your life';
    break;
}

console.log (`the number you got is ${magicBall}
Result: ${fortuneBall}`);