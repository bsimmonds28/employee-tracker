const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('Initialization', () => {
      it('should create an object with first name, last name, and role', () => {
        const employee = new Employee('Jane', 'Doe', 'Engineer');

        expect(employee.getFirstName()).toBe('Jane');
        expect(employee.getLastName()).toBe('Doe');
        expect(employee.getRole()).toBe('Engineer');
      });
    });
  });
