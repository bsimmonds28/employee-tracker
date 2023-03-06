//inquirer version 8.2.4 for collecting user input
const inquirer = require('inquirer');

//fs for writing to the file system
const fs = require('fs');

//console table to display sql table rows
const cTable = require('console.table');

//Import Classes
const queries = require('./lib/queries')

//Question prompts in the command line
const initialQ = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'initialQ',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add an employee role', 'Add an employee', 'Update an employee role']
            },
        ])
        .then((data) => {
            switch (data.initialQ) {

                case 'View all departments':
                    viewDepartments();
                    break;

                case 'View all roles':
                    viewRoles();
                    break;

                case 'View all employees':
                    viewEmployees();
                    break;

                case 'Add a department':
                    addDepartment();
                    break;

                case 'Add an employee role':
                    addRole();
                    break;

                case 'Add an employee':
                    addEmployee();
                    break;

                case 'Update an employee role':
                    updateRole();
                    break;

            }
        });
}
initialQ();

//function: WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
    queries.viewDepartments().then(([rows,fields]) => {
        console.table(rows);
        initialQ();
    })
};

//function: WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewRoles = () => {
    queries.viewRoles().then(([rows,fields]) => {
        console.table(rows);
        initialQ();
    })
};

//function: WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewEmployees = () => {
    queries.viewEmployees().then(([rows,fields]) => {
        console.table(rows);
        initialQ();
    })
};

//function: WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database
const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the name of the new department",
                name: 'dep_name',
            },
        ])
        .then((data) => {
            queries.addDepartment(data.dep_name).then(([rows,fields]) => {
                console.table(rows);
                initialQ();
            })
        })
}

//function: WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the name of the role",
            name: 'role_name',
        },
        {
            type: 'input',
            message: "Enter the salary for the role",
            name: 'salary',
        },
        {
            type: 'input',
            message: "Enter the department name for the role",
            name: 'dep_name',
        },
    ])
    .then((data) => {
        queries.addRole(data.role_name, data.salary, data.dep_name).then(([rows,fields]) => {
            console.table(rows);
            initialQ();
        })
    })
};

//function: WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the first name of the employee",
            name: 'first_name',
        },
        {
            type: 'input',
            message: "Enter the last name of the employee",
            name: 'last_name',
        },
        {
            type: 'input',
            message: "Enter the employee's role",
            name: 'role',
        },
        {
            type: 'input',
            message: "Enter the employee's manager",
            name: 'manager',
        },
    ])
    .then((data) => {
        queries.addEmployee(data.first_name, data.last_name, data.role, data.manager).then(([rows,fields]) => {
            console.table(rows);
            initialQ();
        })
    })
};

//function: WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database
const updateRole = () => {
    queries.viewEmployeeList().then(([rows,fields]) => {
        const employeeArr = [];
        for (var i = 0; i < rows.length; i++) {
            let employee = rows[i].id + " " + rows[i].first_name + " " + rows[i].last_name;
            employeeArr.push(employee);
        }
        inquirer
    .prompt([
        {
            type: 'list',
            message: 'Select an employee to update',
            name: 'employee',
            choices: employeeArr,
        },
    ])
    .then((data) => {
        console.log(data);
        // queries.updateRole(data.employee, data.role).then(([rows,fields]) => {
        //     console.log(`${data.employee}'s role has been updated to ${data.role}!`)
        //     initialQ();
        })
    })
}
    //have to wait to ask inquirer until get result
    //async await or put it in a second .then 
    //variable local 
/*
    queries.viewRoles().then(([rows,fields]) => {
        const roleArr = rows;
        return roleArr;
    });
*/
/*
    console.log(employeeArr);

    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Select an employee to update',
            name: 'employee',
            choices: employeeArr,
        },
        /*
        {
            type: 'list',
            message: 'Select their new role',
            name: 'role',
            choices: roleArr,
        },
    ])
    .then((data) => {
        queries.updateRole(data.employee, data.role).then(([rows,fields]) => {
            console.log(`${data.employee}'s role has been updated to ${data.role}!`)
            initialQ();
        })
    })
    )
*/


/*
npm i inquirer@8.2.4
npm install express
npm i mysql2

post - put information here with key value object

Questions
How do I accept department name as string and convert to corresponding id?
How do I enter a manger's name?

#1 How do I use insomnia?
#2 When do you use a query.sql file?
#3 When do you use body.variablename? req? params?
req.body - front end has a body that gets sent to request
console log the req.body will contain 
*/