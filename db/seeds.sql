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
VALUES ("Donna", "Noble", 1, null),
       ("Martha", "Jones", 2, null),
       ("Amy", "Pond", 3, null),
       ("Clara", "Oswald", 4, null);