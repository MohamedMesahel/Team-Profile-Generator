// Requiring Manager Module
const Manager = require('../lib/manager');

// Create Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Role getRole()
test('gets role of employee', () => {
    const manager = new Manager('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');

    expect(manager.getRole()).toEqual("Manager");
});