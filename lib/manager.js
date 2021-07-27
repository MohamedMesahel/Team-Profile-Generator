// Requiring Employee Module
const Employee = require('./employee');

// Add Manager constructor & extends Employee constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // Calling employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Adding Manager role to employee
    getRole() {
        return "Manager";
    }
}

// Export Manager Module
module.exports = Manager;