const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Company = require("./lib/Company");
const generateHTML = require("./generateHTML");


let company = new Company()

const allQuest = 
[{
    name: "name",
    type: "input",
    message: "Add an employee name:", 
},
{
    name: "id",
    type: "number",
    message: "Add an employee ID:", 
},
{
    name: "email",
    type: "input",
    message: "Add an employee email:", 
    // validate: 
}]

function askManager() {
    inquirer.prompt(allQuest.concat(
    {
        name: "office",
        type: "number",
        message: "Add an office number:", 
    })).then(answers => {
        console.log(`Name: ${answers.name}`)
        console.log(`ID: ${answers.id}`)
        console.log(`Email: ${answers.email}`)
        console.log(`Office #: ${answers.office}`)
        company.addManager(answers.name, answers.id, answers.email, answers.office)
        company.print()
        empChoice()
    })

}

function askEngineer() {
    inquirer.prompt(allQuest.concat(
    {
        name: "git",
        type: "input",
        message: "Add GitHub name:", 
    })).then(answers => {
        console.log(`Name: ${answers.name}`)
        console.log(`ID: ${answers.id}`)
        console.log(`Email: ${answers.email}`)
        console.log(`GitHub link: ${answers.git}`)
        company.addEngineer(answers.name, answers.id, answers.email, answers.git)
        company.print()
        empChoice()
    })     
}

function askIntern() {
    inquirer.prompt(allQuest.concat(
    {
        name: "school",
        type: "input",
        message: "Add intern's school:", 
    })).then(answers => {
        console.log(`Name: ${answers.name}`)
        console.log(`ID: ${answers.id}`)
        console.log(`Email: ${answers.email}`)
        console.log(`Office #: ${answers.school}`)
        company.addIntern(answers.name, answers.id, answers.email, answers.school)
        company.print()
        empChoice()
    })     
}

function empChoice(){
    inquirer.prompt([
    {
        name: "choice",
        type: "list",
        choices: ["Add an engineer", "Add an intern", "Finish"], 
    }
]).then(answers => {
        console.log(`You chose to input a ${answers.choice}`)
        switch (answers.choice) {
            case "Add an engineer":
                askEngineer();
                break;
            case "Add an intern":
                askIntern();
                break;
            case "Finish":
                createHtml();
                break;
            }
    })
}

function createHtml() {
    fs.writeFile('./Develop/index.html', generateHTML(company.allEmployees), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

askManager()

