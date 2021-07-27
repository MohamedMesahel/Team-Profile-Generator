// Add an employee constructor 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // Returning Name input
    getName() {
        return this.name;
    }

    // Returning ID input
    getId() {
        return this.id;
    }

    // Returning Email input
    getEmail() {
        return this.email;
    }

    // Returning Employee type 
    getRole() {
        return 'Employee';
    }
};

// Export Employee Module 
module.exports = Employee;