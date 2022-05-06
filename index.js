const fs = require("fs");
const inquirer = require("inquirer");

const managerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
    },
  ]);
};
managerQuestions();
