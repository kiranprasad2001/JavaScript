
/*This program takes user input for hours slept by day of the week and compares these to user-provided ideal sleep hours
Weekly sleep debt or surplus is returned in the case that sleep is more or less than ideal */

// Calculate number of hours you slept in a day for the week
// Calculate the ideal number or hours user thinks he requries for a week
// Compare both the numbers and return the value.
//If he is sleeping more than required, inform the same
//If he is sleeping less than required, inform the same

function sleepHours (day) {
var hours = prompt('How many hours did you sleep on '+day+' ?');
return Number(hours);
}
function actualHours () {
 var result = sleepHours('Sunday')
 +sleepHours('Monday')
 +sleepHours('Tuesday')
 +sleepHours('Wednesday')
 +sleepHours('Thursday')
 +sleepHours('Friday')
 +sleepHours('Saturday');
 return result;
}
function idealHours () {
var idealUser = prompt('How many hours do you think are ideal per night?');
 return idealUser*7;
}
function debtCalculate () {
 var ideal = idealHours();
 var slept = actualHours();
 debt1 = ideal-slept;
 debt2 = slept-ideal;
 
 if (ideal === slept) {
     output = 'you slept properly. Keep it up';
 } else if (ideal > slept) {
     output = `you night owl!. you need to sleep more by ${debt1} hours in a week`;
 } else {
     output = `Try not to be a lazy peezy. You overslept by ${debt2} hours in a week`;
 }
}

debtCalculate();
console.log(output);
