// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "title"
  },
  {
    type: "input",
    message: "Project Description:",
    name: "description"
  },
  {
    type: "input",
    message: "Table of Contents:",
    name: "contents"
  },
  {
    type: "input",
    message: "Installation Instructions:",
    name: "installation"
  },
  {
    type: "input",
    message: "Project Usage:",
    name: "usage"
  },
  {
    type: "input",
    message: "Collaborator Credits:",
    name: "credits"
  },
  {
    type: "list",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1"
    ],
    message: "Choose a License:",
    name: "license"
  },
  {
    type: "list",
    choices: [
      "Please contact the author to be added as a collaborator to this project and to discuss contribution guidelines.",
      "No contributions are being accepted at this time."
    ],
    message: "Contributing:",
    name: "contributing"
  },
  {
    type: "input",
    choices: [
        "Please contact the author to write tests.",
        "No tests at this time."
      ],
    message: "Testing Instructions:",
    name: "tests"
  }
];

// TODO: Create a function to write README file
const writeToFile = (file, data) => {
  fs.writeFile(file, generateMarkdown(data), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file generated");
    }
  });
};

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then(response => {
    console.log(response);
    writeToFile("GENERATED_README.MD", response);
  });
};

// Function call to initialize app
init();
