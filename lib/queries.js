const connection = require('../db/connection');

class Queries {
    constructor(connection) {
        this.connection = connection;
    }

    viewDepartments() {
        return this.connection.promise().query('SELECT * FROM department');
    }

    viewRoles() {
        return this.connection.promise().query(`SELECT role.title, role.id, department.dep_name, role.salary FROM role JOIN department ON role.department_id = department.id;`);
    }

    viewEmployees() {
        return this.connection.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dep_name, role.salary, employee.manager_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id;`);
    }

    addDepartment(depName) {
        return this.connection.promise().query(`INSERT INTO department (dep_name) VALUES ("${depName}")`);
    }

    addRole(roleName, salary, depName) {
        return this.connection.promise().query(`INSERT INTO role (department_id, title, salary) VALUES (${depName}, "${roleName}", ${salary})`);
    }

    addEmployee(firstName, lastName, role, manager) {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${role}, ${manager})`);
    }
}

module.exports = new Queries(connection);
