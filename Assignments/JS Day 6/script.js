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