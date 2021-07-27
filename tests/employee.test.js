// Requiring Employee Module
const Employee = require('../lib/employee');

// Create employee object 
test('creates an employee object', () => {
    const employee = new Employee('Zizo', 86, 'zoz_2015@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// ID from getId() 
test('Employee Name', () => {
    const employee = new Employee('Zizo', 86, 'zoz_2015@yahoo.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// ID from getId() 
test('Employee ID', () => {
    const employee = new Employee('Zizo', 86, 'zoz_2015@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Emails from getEmail()
test('Employee Email', () => {
    const employee = new Employee('Zizo', 86, 'zoz_2015@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Role from getRole()
test('Role of Employee', () => {
    const employee = new Employee('Zizo', 86, 'zoz_2015@yahoo.com');

    expect(employee.getRole()).toEqual("Employee");
});

