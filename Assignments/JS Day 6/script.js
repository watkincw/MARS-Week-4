function formData() {
    let name = document.getElementById('employeeName').value;
    let employeeID = Number(document.getElementById('empId').value);
    let hireDate = document.getElementById('hireDate').value;
    let hours = Number(document.getElementById('hoursWorked').value);
    let jobRole = document.getElementById('jobRole').value;

    function Employee(name, employeeID, hireDate, hours, jobRole) {
        this.name = name;
        this.employeeID = employeeID;
        this.hireDate = hireDate;
        this.hours = hours;
        this.jobRole = jobRole;
    };

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