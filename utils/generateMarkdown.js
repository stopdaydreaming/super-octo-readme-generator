const { mit, gnu, apache } = require('./licenses');

const renderLicenseBadge = (license) => {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }  else {
    return ``;
  }
}

const renderLicenseLink = (license) => {
  if (license === "None"){
    return ``;
  } else {
    return `[License](#license)`;
  }
}

const renderLicenseSection = (license) => {
  if(license === "MIT License") {
    return mit;
  } else if (license === "GNU GPL v3"){
    return gnu;
  } else if (license === "Apache License 2.0"){
    return apache;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

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
