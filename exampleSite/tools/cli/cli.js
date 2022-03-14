/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const inquirer = require('inquirer');
const {
    createComponent,
} = require('./commands/index.js');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                'create-component',
                'exit',
            ],
        },
    ])
    .then((answers) => {
        switch (answers.action) {
        case 'create-component':
            createComponent();
            break;

        default:
            console.log('exiting..');
        }
    });
