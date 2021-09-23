USE employee_db;

INSERT INTO department (name)
VALUES
    ('Management'),
    ('Co_Management'),
    ('Sales'),
    ('Pharmacy');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Store Manager', 200000, 1),
    ('Assistant Manager', 70000, 1),
    ('Team Lead', 50000, 2),
    ('Inventory Specialist', 40000, 2),
    ('Photo Specialist', 30000, 3),
    ('Pharmacy Technician', 40000, 4),
    ('Pharmacist', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES