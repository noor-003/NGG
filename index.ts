#! /usr/bin/env node

import inquirer from "inquirer"

//comp will generate a rand num
//const randomNumber = 13;

const randomNumber = Math.floor(Math.random() * 10 +1 );
console.log("Welcome To My Number Guessing Game");

//use input for guessing num
//compare user input with comp. generated num & show result
const answers = await inquirer.prompt([
    {
    name: "userGuess",
    type: "number",
    message: "Please guess a number between 1-10: ",
    }
]);

//console.log(answers);

if(answers.userGuess == randomNumber)
{
    console.log("Congratulations! You Guessed the right number.");
}
else
{
    console.log("Oops! You Guessed the wrong number. \nThe Actual Number is: " + randomNumber);
}