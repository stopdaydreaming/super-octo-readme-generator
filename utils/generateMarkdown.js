const { mit, gnu, apache } = require('./licenses');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  license === "No License" ? `` : `[License](#License)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if(license === "MIT License") {
    return mit;
  } else if (license === "GNU General Public License"){
    return gnu;
  } else if (license === "Apache License"){
    return apache
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  ${data.contents}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
