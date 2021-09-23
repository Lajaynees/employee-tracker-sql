const inquirer = require('inquirer');
const db = require('./db/connection');
const consoleTable = require('console.table');
const confirm = require('inquirer-confirm');

// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);
//Roles
db.query("SELECT * from role", function (error, res) {
  roles = res.map(role => ({
      name: role.title,
      value: role.id
  }))
})
// departments
db.query("SELECT * from department", function (error, res) {
  departments = res.map(dep => ({
      name: dep.name,
      value: dep.id
  }))
})
// employees
db.query("SELECT * from employee", function (error, res) {
  employees = res.map(emp => ({
      name: `${emp.first_name} ${emp.last_name}`,
      value: emp.id
  }))
})
module.exports = db;

//selections
function promptUser() {
  console.log(`
  
    *******EMPLOYEE TRACKER*******
       
        `);
    
      return (
        inquirer
          .prompt([
            {
              type: "list",
              name: "startTracker",
              message: "What would you like to do?",
              choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
              ],
            },
          ])
    
         //Selected Answers
    
          .then((promptAnswer) => {
            switch (promptAnswer.startTracker) {
              case "view all departments":
                allDep();
                break;
    
              case "view all roles":
                allRoles();
                break;
    
              case "view all employees":
                allEmp();
                break;
    
              case "add a department":
                addDep();
                break;
    
              case "add a role":
                addRole();
                break;
    
              case "add an employee":
                addEmp();
                break;
    
              case "update an employee role":
                empUpdate();
                break;
    
              default:
                console.log = "EXIT PLEASE";
                process.exit();
            }
          })
      );
    }
