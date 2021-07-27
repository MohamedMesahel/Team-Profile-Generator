// Use the generated `generateHTML` to `writefile`
const generateHTML = require('./dist/generateHTML');

// Connecting team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Provide team array
const teamArray = [];
// The user for manager information using `manager questions`
// Then use their ansers to decise what to do next 
const addManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please Provide the manager name of this team?',
            validate: nameInput => {if (nameInput) {return true;} else {console.log("Please enter the manager's name!");
            return false;
             }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {if (isNaN(nameInput)) {console.log("Please enter the manager's ID!") 
            return false;} else {return true;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                return true;
                } else {console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => { if (isNaN(nameInput)) {console.log('Please enter an office number!')
                return false;
                } else { return true;}
            }
        }
    ])
// Then using manager input to creat manger `HTML card`
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            console.log(manager);
        })
};
// Then ask the user to `addEmployee`
const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput => { if (nameInput) { return true;  } 
            else {  console.log("Please enter an employee's name!");   return false;}
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => { if (isNaN(nameInput)) {console.log("Please enter the employee's ID!")
                return false;
                } else { return true;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else { console.log('Please enter an email!')
                    return false;}
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => { if (nameInput) { return true;
                } else {console.log("Please enter the employee's github username!")}
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => { if (nameInput) {
                 return true;
                } else {console.log("Please enter the intern's school!")}
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            // Then collect employee data to generate employees cards

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};


// Function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // If there is an error 
        if (err) {
            console.log(err);
            return;
        // When the profile has been created 
        } else {
            console.log("Your team profile cards have been successfully created at index.html!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });