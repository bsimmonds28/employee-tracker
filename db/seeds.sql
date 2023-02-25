INSERT INTO department (dep_name)
VALUES ("Marketing"),
       ("Communications"),
       ("Development"),
       ("Operations");

INSERT INTO role (department_id, title, salary)
VALUES (1, "VP", 120000),
       (1, "Manager", 95000),
       (1, "Coordinator", 70000),
       (1, "Associate", 60000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, null),
       ("Jane", "Doe", 2, null),
       ("Sarah", "Jane", 3, null),
       ("James", "Blake", 4, null);