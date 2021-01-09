// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  `
  # ${data.title}

  ## Description 
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  ${data.contents}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  ${data.credits}
  
  ## License

  ${data.license}
  
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.testing}

  ## Questions
  
  ${data.testing}
  
  ## Issues
  
  ${data.testing}
  `;
}

module.exports = generateMarkdown;
