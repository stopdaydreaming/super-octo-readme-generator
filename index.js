// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: "editor",
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
        type: "list",
        message: "Choose a License:",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Testing:",
        name: "testing"
    },
    {
        type: "input",
        message: "Questions:",
        name: "questions"
    },
    {
        type: "input",
        message: "Reporting Issues:",
        name: "issues"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("function intialized");
}

// Function call to initialize app
init();
