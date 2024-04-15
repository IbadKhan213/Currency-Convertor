#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Currency Convertor");

const currency:any = {
    USD:1,       // Base Currency 
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280

}

const userAmount = await inquirer.prompt([
    {
        type:"list",
        name:"from",
        message:"Enter from Currency : ",
        choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        type:"list",
        name:"to",
        message:"Enter to Currency : ",
        choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your Amount : ",
    }
])

let fromAmount = currency[userAmount.from];
let toAmount = currency[userAmount.to];
let amount = userAmount.amount ;
let baseAmount = amount / fromAmount ;    // suppose convert PKR to USD 
               // 1500 / 280    
let convertedAmount = baseAmount * toAmount ;

console.log(convertedAmount);



