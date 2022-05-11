const fs = require("fs");
const inquirer = require("inquirer");

const generate = require("./src/template");

const employees = [];

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "ManagerOffice",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      employees.push(answers);
      addNewEmployee();
      generatePage();
    });
};

const addNewEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then((newEmployee = parseInt(newEmployee)) => {
      switch (newEmployee) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "No":
          generatePage();
          break;
      }
    });
};

const engineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      employees.push(answers);
    });
};

const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      employees.push(answers);
    });
};

managerQuestions();

// const generatePage = (fileName, employees) => {
//   fs.writeFile(fileName, generatePage(employeeData), (err) => {
//     if (err) throw new Error(err);
//     console.log("HTML page created");
//   });
// };

const generatePage = (employees) => {
  fs.writeFile("./dist/index.html", generate(employees), (err) => {
    if (err) throw new Error(err);
    console.log("Page Created");
  });
};

// .then(engineerQuestions)
// .then((getEmployees) => {
//   console.log(employees);
// });
