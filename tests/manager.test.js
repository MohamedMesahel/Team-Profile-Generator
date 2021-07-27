// Requiring Manager Module
const Manager = require('../lib/manager');

// Create Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Zizo', 86, 'zoz_2015@yahoo.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Role getRole()
test('gets role of employee', () => {
    const manager = new Manager('Zizo', 90, 'zoz_2015@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
});