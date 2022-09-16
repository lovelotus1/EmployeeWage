console.log("Welcome to Employee Wage Computation");
console.log("------------------UC-1----------------------------");
const IS_PRESENT=0;
let attendance=Math.floor(Math.random() * 2);
if(attendance==IS_PRESENT)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}
/*console.log("------------------UC-2----------------------------");
// Calculating Daily Employee Wage based on part time or full time work...........
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 3);
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : "+ empWage);*/

/*console.log("------------------UC-2--AND--UC-3-----------------------");
// Calculating Daily Employee Wage based on part time or full time work...........
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() *3);
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : "+ empWage);*/

/*console.log("------------------UC-4-----------------------");
// Calculating Wages for a Month assuming 20 Working Days in a Month..........
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
let empHrs = 0;
for(let day = 0; day <NUM_OF_WORKING_DAYS; day++){
let empCheck = Math.floor(Math.random() *3);
empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours : "+ empHrs +"\nEmp Wage : "+ empWage);*/

console.log("------------------UC-5-----------------------");
// Calculating Wages for a Month assuming 20 Working Days in a Month..........
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
let empHrs = 0;
let totalWorkingDays = 0;
while(empHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *3);
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total working days : "+ totalWorkingDays +"\nTotal Hours : "+ empHrs +"\nEmp Wage : "+ empWage);
