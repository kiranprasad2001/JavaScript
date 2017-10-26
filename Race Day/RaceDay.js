/*
This project requirement is as follows:
Take in the runners age, registration status and give them a race number and time depending on the conditions and print it to the console.log
*/

var regStatus = false;
var runnerAge = 15;
let runNumber = Math.floor(Math.random()*1000);
let runnerTask = '';

if (regStatus === false) {
  runNumber+= 1000;
}

if (regStatus === true && runnerAge >= 18) {
  runnerTask = `your runner number is ${runNumber} and Your race is scheduled at 9:30 AM today`;
} else if (regStatus === true || runnerAge >= 18) {
  runnerTask = `your runner number is ${runNumber} and Your race is scheduled at Noon today`;
} else if (regStatus === false && runnerAge < 18) {
  runnerTask = `your runner number is ${runNumber} and Your race is scheduled at 5:30 PM today`;
} else {
  runnerTask = `contact registration help desk`;
}

console.log(runnerTask);
