#! /usr/bin/env node

import inquirer from "inquirer" ;

const answer = await inquirer.prompt([{
    message: "Enter 1st Number", type: "number", name: "firstNumber"},
   {message: "Enter 2nd Number", type: "number", name: "secondNumber"},
   {
    message: "Select 1 of the operators", 
    type: "list", 
    name: "operator", 
    choices:["+", "-", "*", "/"],
},
]);

//conditional statement

if (answer.operator === "+"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operator === "-"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "*"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operator === "/"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else console.log("Please select valid operator")

