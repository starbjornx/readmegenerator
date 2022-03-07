const badge = [
  {
    name: "MIT",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    desc: "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.",
  },
  {
    name: "Apache 2.0",
    link: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    desc: "Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers.",
  },
  {
    name: "MPL 2.0",
    link: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    desc: "The MPL is a simple copyleft license. The MPL's 'file-level' copyleft is designed to encourage contributors to share modifications they make to your code, while still allowing them to combine your code with code under other licenses (open or proprietary) with minimal restrictions.",
  },
  {
    name: "Boost",
    link: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    desc: "The Boost license permits the creation of derivative works for any use with no legal requirement to release your source code.",
  },
  {
    name: "GPL v3",
    link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    desc: "Like the GPL v2, GPL 3 is a strong copyleft license, meaning that any copy or modification of the original code must also be released under the GPL v3. In other words, you can take the GPL 3'd code, add to it or make major changes, then distribute your version.",
  },
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(balogna) {
  for (let i = 0; i < badge.length; i++) {
    if (balogna.license == badge[i].name) {
      return balogna.license;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(ramen) {
  for (let i = 0; i < badge.length; i++) {
    if (ramen.license == badge[i].name) {
      return badge[i].link;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(ramen) {
  for (let i = 0; i < badge.length; i++) {
    if (ramen.license == badge[i].name) {
      return (
        renderLicenseBadge(ramen) +
        renderLicenseLink(ramen) +
        "\n" +
        badge[i].desc
      );
    } else {
      return "none";
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `   # ${response.title} ${renderLicenseLink(response)}
   ## Description
   ${response.description}
   ## Table of Contents
-[Installation](#installation)\n
-[Usage](#usage)\n
-[License](#license)\n
-[Credits](#credits)\n
-[Tests](#tests)\n
-[Questions](#questions)
   ## Installation
   ${response.install}
   ## Usage
   ${response.usage}
   ## License 
   ${renderLicenseSection(response)}
   ## Credits 
   ${response.credits}
   ## Tests 
   ${response.tests}
   ## Questions 
   ${response.questions}\n
   ## GitHub:[GitHub User](https://github.com/${response.gitHub})
`;
}

module.exports = generateMarkdown;
