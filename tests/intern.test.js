// Requiring Intern Module 
const Intern = require('../lib/intern');

// Create Inten object  
test('creates an Intern object', () => {
    const intern = new Intern('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(intern.school).toEqual(expect.any(String));
});

// School from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Zizo', 86, 'zoz_2015@yahoo.com', 'MohamedMesahel');
    expect(intern.getRole()).toEqual("Intern");
});