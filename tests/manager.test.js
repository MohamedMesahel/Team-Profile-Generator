// using Manager constructor 
const Manager = require('../lib/manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('', 86, '', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('', 86, '');

    expect(manager.getRole()).toEqual("Manager");
});