#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 9999;
// Print Welcome Message
console.log(chalk.yellow("\n \tWELCOME  TO   CODE   WITH  AMMAR   ATM   MACHINE\n "));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Enter Your Pin Code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Pin is Correct , Login Successfully !!!"));
    // console.log (`Current Account Balance is ${myBalance})
    let operaterAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select Operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operaterAns.operation === "Withdraw Amount") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMehthod",
                type: "list",
                message: "Select a Withdrawl Mehthod",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (WithdrawAns.WithdrawMehthod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance !!!"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw Successfully !!!`);
                console.log(chalk.bgBlueBright `(Your Remaining Balance is) ${myBalance}`);
            }
        }
        else if (WithdrawAns.WithdrawMehthod === "Enter Amount") {
            let operaterAns = await inquirer.prompt([
                {
                    name: "operation",
                    message: (chalk.blue("Please Select Option")),
                    type: "list",
                    choices: ["Withdraw", "Check Balance"]
                }
            ]);
            if (operaterAns.operation === "Withdraw") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        message: (chalk.blue("Enter The Amount to Withdraw")),
                        type: "number"
                    }
                ]);
                if (amountAns.amount > myBalance) {
                    console.log(chalk.red("Insufficient Balance !!!"));
                }
                else {
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} Withdraw Successfully !!!`);
                    console.log(`You Remaining Balance is: ${myBalance}`);
                }
            }
        }
    }
    else if (operaterAns.operation === "Check Balance") {
        console.log(chalk.green.bold(`Your Acoount  Balance is: ${myBalance}`));
    }
    else {
        console.log(chalk.red("Pin is Incorrect ,Please Try Again !!!"));
    }
}
;
