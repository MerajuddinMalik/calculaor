"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter The First Number:'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter The Second Number:'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Enter The Operator You Need:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);
var result;
switch (answers.operators) {
    case 'Add':
        result = answers.num1 + answers.num2;
        console.log("The Answer for Addition is :" + result);
        break;
    case 'Subtract':
        result = answers.num1 - answers.num2;
        console.log("The Answer for Subtraction is :" + result);
        break;
    case 'Multiply':
        result = answers.num1 * answers.num2;
        console.log("The Answer for Multiplication is :" + result);
        break;
    case 'Divide':
        result = answers.num1 / answers.num2;
        console.log("The Answer for Division is :" + result);
        break;
}
