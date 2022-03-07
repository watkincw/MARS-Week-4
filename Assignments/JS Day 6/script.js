// give input type='date' a max value
function maxDate() {
    // get current date
    let today = new Date();
    // get numbered day of the month from 'today'
    let dd = today.getDate();
    // get month from 'today'
    let mm = today.getMonth() + 1; 
    // get year from 'today'
    let yyyy = today.getFullYear();

    // if the dat of the month is less than 10, we need to add a '0' in front to comply with what the 'max' property requires for the date input
    if (dd < 10) {
        dd = '0' + dd;
    }
    console.log(dd);
    // if the month is less than 10, we need to add a '0' in front to conform with what the 'max' property requires for the date input
    if (mm < 10) {
        mm = '0' + mm;
    }
    console.log(mm);
    console.log(yyyy);

    // concatenate 'yyyy' + '-' + 'mm' + '-' + 'dd'
    valueOfMaxAttribute = yyyy + '-' + mm + '-' + dd;

    // target date input element
    let dateEl = document.getElementById('hireDate');
    // give dateEl, aka the date input element, the 'max' attribute which, when coupled with the 'date' attribute, dictates the furthest date in the future your allowed to select(can also be set to a date in the passed)
    dateEl.setAttribute('max', `${valueOfMaxAttribute}`);
};

function formData() {
    let name = document.getElementById('employeeName').value;
    let employeeID = Number(document.getElementById('empId').value);
    let hireDate = document.getElementById('hireDate').value;
    let hours = Number(document.getElementById('hoursWorked').value);
    let jobRole = document.getElementById('jobRole').value;

    class Employee {
        #name
        #employeeID
        #hireDate
        #hours
        #jobRole
        constructor(name, employeeID, hireDate, hours, jobRole) {
            this.#name = name;
            this.#employeeID = employeeID;
            this.#hireDate = hireDate;
            this.#hours = hours;
            this.#jobRole = jobRole;
        }
        // name - set/get
        set name(name) {
            console.log('Setter method is called...');
            if (name === '') {
                console.log('Username cannot be empty.');
            } else {
                this.#name = name;
            }
        }
        get name() {
            return this.#name;
        }
        // employeeID - set/get
        set employeeID(employeeID) {
            if (employeeID == '') {
                console.log('Please input your employee ID.');
            } else {
                this.#employeeID = employeeID;
            }
        }
        get employeeID() {
            return this.#employeeID;
        }
        // hireDate - set/get
        set hireDate(hireDate) {
            if (hireDate == '') {
                console.log('Please input your hire date.');
            } else {
                this.#hireDate = hireDate;
            }
        }
        get hireDate() {
            return this.#hireDate;
        }
        // hours - set/get
        set hours(hours) {
            if (hours == '') {
                console.log('Please input your hire date.');
            } else {
                this.#hours = hours;
            }
        }
        get hours() {
            return this.#hours;
        }
        // jobRole - set/get
        set jobRole(jobRole) {
            if (jobRole == '') {
                console.log('Please input your hire date.');
            } else {
                this.#jobRole = jobRole;
            }
        }
        get jobRole() {
            return this.#jobRole;
        }
    }

    console.log(Employee);

    let userData = new Employee(name, employeeID, hireDate, hours, jobRole);
    console.log(userData);

    if (jobRole == 'manager') {
        var wage = userData.hours * 90;
    } else if (jobRole == 'consultant') {
        var wage = userData.hours * 75;
    } else {
        var wage = userData.hours * 75;
    };

    sessionStorage.setItem('Employee Name', userData.name);
    sessionStorage.setItem('Wage', wage);
};

// call maxDate to give the date input a max attribute and assign it todays date
maxDate();