#! /usr/bin/env node
import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
//print welcome message
console.log("welcome to Rabia Atif - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct,login successfully!");
    // console.log(`"Current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["withdraw Amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your reamaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is Incorrect, Try Again!");
}
