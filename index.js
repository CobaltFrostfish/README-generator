const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) =>
`#title
${answers.title}`;

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'GitHub username?',
                name: 'userName',
            },
            {
                type: 'input',
                message: 'What is you email address?',
                name: 'address',
            }, {
                type: 'input',
                message: 'What is your project tile?',
                name: 'project',
            }, {
                type: 'input',
                message: 'What is a brief description of your project?',
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
            const readmeContent = generateReadme(answers);

            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        });