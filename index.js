const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');

const questions = [
    inquirer
        .prompt([
            {
                type: "input",
                message: "What text will be on your logo?",
                name: "logoText",
                //Makes sure there are only 3 characters
                validate: function (logoText) {
                    if (logoText.length < 4) {
                        return true;} else {console.log(`\n\nPlease enter no more than three characters\n`)
                    }
                }
            },
            {
                type: "input",
                message: "What color will the text be?",
                name: "textColor"
            },
            {
                type: "list",
                message: "What shape will be behind your text?",
                name: "logoShape",
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: "input",
                message: "What will the color of this shape be?",
                name: "shapeColor"
            }
        ])
        .then((res) => {

            var data= `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shapes.renderLogo(res)}

            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${res.textColor}">${res.logoText}</text>

            </svg>`
            writeToFile("./examples/logo.svg", data);

            
        }
        )
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error("An error has occurred.", err) : console.log(`Generated logo.svg`)
    );
}
