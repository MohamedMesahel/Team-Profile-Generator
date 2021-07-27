// Requiring Engineer Module
const Engineer = require('../lib/engineer');

// Create Engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(engineer.github).toEqual(expect.any(String));
});

// Gets Github account from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Mohamed', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Mohamed', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(engineer.getRole()).toEqual("Engineer");
});