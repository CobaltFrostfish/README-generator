const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) => 
`# ${answers.project}
[![License: MIT](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

## Contributer info
* Contributor GitHub: ${answers.userName}
* Contributor Email: ${answers.address}

## Description
${answers.briefProject}

### Depndencies to be run:
${answers.dependencies}

### Prompt to run tests:
${answers.tests}

### Using this repo:
${answers.usage}

### How to contribute to this repo:
${answers.contributing}


`;


    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'userName',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'address',
            }, {
                type: 'input',
                message: 'What is your project tile?',
                name: 'project',
            }, {
                type: 'input',
                message: 'Please provide a description of your project?',
                name: 'briefProject'
            }, {
                type: 'list',
                name: 'license',
                message: 'What license should your project have?',
                choices: [
                    'MIT',
                    'Apache2.0',
                    'GPL3.0',
                    'BSD3',
                    'None',
                ]
            }, {
                type: 'input',
                message: 'What should be run to install dependencies?',
                name: 'dependencies'
            }, {
                type: 'input',
                message: 'What command should be run to run tests?',
                name: 'tests'
            }, {
                type: 'input',
                message: 'What does your user need to know about using this repo?',
                name: 'usage'
            }, {
                type: 'input',
                message: 'What does user need to know about contributing to repo?',
                name: 'contributing'
            },
        ])

        .then((answers) => {
            let readmeContent = generateReadme(answers);
            console.log(readmeContent)

            fs.writeFile('genREADME.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README!')
            );
        });