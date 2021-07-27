// Requiring Employee Module 
const Employee = require("./employee");

// Add an Engineer constructor & extends Employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
     // Calling employee constructor 
        super(name, id, email);

        this.github = github;
    }

    // Returning Github account from input 
    getGithub() {
        return this.github;
    }

    // Adding employee role to engineer
    getRole() {
        return "Engineer";
    }
}

// Export Engineer Module
module.exports = Engineer;