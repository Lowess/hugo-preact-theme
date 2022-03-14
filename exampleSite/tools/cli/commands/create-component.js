const inquirer = require('inquirer');
const { generateFile } = require('../../generators/generate-file');
const { capitalize } = require('../../generators/helpers');

/**
 * Define questions for prompt.
 */
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the component",
    },
    {
        type: 'input',
        name: 'dir',
        message: "Destination directory relative to `assets/js/`",
    },
    {
        type: 'confirm',
        name: 'tests',
        default: true,
        message: "Create tests?",
    },
]

// Execute prompt
const createComponent = () => inquirer.prompt(questions).then((answers) => {

    const {name, dir, tests} = answers;

    const path = `./assets/js/${dir}/`;
    const fileName = `${capitalize(name)}.tsx`;
    const testsFileName = `${capitalize(name)}.test.tsx`;

    generateFile(
        './tools/generators/component/component_tsx',
        path,
        fileName,
        {
            capitalize,
            name: name
        }
    );

    if(tests) {
        generateFile(
            './tools/generators/component/component_tests_tsx',
            path,
            testsFileName,
            {
                capitalize,
                name: name
            }
        );
    }
});

module.exports = createComponent;