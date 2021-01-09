const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
      "GNU GPL v3",
      "MIT License"
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
    type: "list",
    choices: [
        "Please contact the author to write tests.",
        "No tests at this time."
      ],
    message: "Testing Instructions:",
    name: "tests"
  },
  {
    type: "input",
    message: "Github User Name:",
    name: "github"
  },
  {
    type: "input",
    message: "Contact Email:",
    name: "email"
  }
];

const writeToFile = (file, data) => {
  fs.writeFile(file, generateMarkdown(data), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file generated");
    }
  });
};

const init = () => {
  inquirer.prompt(questions).then(response => {
    console.log(response);
    writeToFile("GENERATED_README.MD", response);
  });
};

init();
