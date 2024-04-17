#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt({
    type: "input",
    name: "paragraph",
    message: "Enter your paraghaph to count words"
});
const paraInput = userInput.paragraph;
// for counting letters in paragraph
const letterWithoutSpace = paraInput.replace(/\s/g, "");
const latterCount = letterWithoutSpace.length;
// console.log(lattercount);
// for counting words 
const wordArry = paraInput.split(" ");
const wordcount = wordArry.length;
console.log(`Total letters in your para are ${latterCount} and total
words are ${wordcount}`);
