//Question 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93] //Array in question
console.log(ages[ages.length-1] - ages[0]); // 1a. Dynamically subtracting 
ages.push(37) // 1b new value was added

console.log(ages[ages.length-1] - ages[0]) // 

var total = 0
for (let i = 0; i <ages.length; i++) {
    total += ages[i];
}
console.log(total / ages.length); //1c a for loop to calculate the average age

// Question 2
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters = totalLetters + names[i].length; // 2a calculates the total letters
}
console.log(totalLetters / names.length); // 2a calculates the average here

var combinedNames = names[0];

for (let i = 1; i < names.length; i++) {
    combinedNames = combinedNames.concat(" ", names[i]);
}
    console.log(combinedNames); //2b loops through, concatenating the names 

//Question 3
var lastElement = names[names.length-1] // array.length - 1setting the array to a variable to make it easier to grab the element
console.log(lastElement); // Printing it to console to check that it works
// Question 4
console.log(lastElement[0]); //array[0] is how we get the first element. Printing it to the console to check my work

//Question 5
var nameLengths = []; 
for (let i = 0; i < names.length; i++) {   
    nameLengths[i] = names[i].length; //This loops through and stores all lengths of the names
}
// Question 6
combinedTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    combinedTotal = combinedTotal + nameLengths[i]; //Here we create a variable to store length of the names that we added together
}
console.log(combinedTotal);
// Question 7
function combinedWord(word, n) {
   var combined = word;
   for (let i =1; i < n; i++) { // Letting i = 1 causes it to start at 1 rather than 0, which will cause it to print 3 times not 4
       var combined = combined.concat(word); //the .concat() merges the strings together
   } return combined;
} console.log(combinedWord("Hello", 3));
// Question 8
function fullName(firstName, lastName) {
    return firstName + " " + lastName // the + adds to a string, allowing me to add the space between the first and last name
} console.log(fullName("Josh", "Gross"));
// Question 9
function numberTotal(array) {
    combinedNumber = 0;
    for (let i = 0; i <array.length; i++ ) {
        combinedNumber = combinedNumber + array[i];
    } if (combinedNumber > 100) {
        return true;
    } else {
        return false;
    }console.log(combinedNumber)
} 
// Question 10
function arrayAverage(array1) {
    totalOne = 0
    for (let i = 0; i < array1.length; i++) {
        totalOne = totalOne + array1[1];
    } return (totalOne / array1.length)
}
// Question 11
function averageArray(fill, blank) {
    if (averageArray(fill) > averageArray(blank)) {
        return true;
    } else {
        return false
    }
}
// Question 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket) > 10.50) {
        return true;
    } else {
        return false
    }
}
// Question 13
//This function works as a quick check on your remaining balance and if you are able to cover a purchase
function giftCardBalance(money, expense) {
    var newBalance = (money - expense);
    if (money > expense) {
        return "Go ahead and buy it you have " + newBalance + " left to spend."
    } else {
        return "You'll owe " + newBalance + " if you try to purchase this."
    } //Let's check this on the console
} console.log(giftCardBalance(5, 8));