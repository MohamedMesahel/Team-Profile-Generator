// Requiring Employee Module
const Employee = require('./employee');

// Add an Intern constructor & extends Employee constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
    // Calling employee constructor
        super(name, id, email);

        this.school = school;
    }

    // Returning School from input 
    getSchool() {
        return this.school;
    }

    // Adding intern role to employee
    getRole() {
        return "Intern";
    }
}

// Export Intern Module
module.exports = Intern;