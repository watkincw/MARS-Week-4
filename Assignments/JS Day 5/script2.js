let getName = sessionStorage.getItem('Employee Name');
let getWage = sessionStorage.getItem('Wage');
// target html elements
let empName = document.getElementById('name');
let empPay = document.getElementById('wage');

console.log(getName);
console.log(getWage);

empName.innerHTML = getName;
empPay.innerHTML = getWage;