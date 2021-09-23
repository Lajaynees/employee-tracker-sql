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





