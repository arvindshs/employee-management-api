const baseURL = "http://localhost:8080/employees";

// ADD employee
async function addEmployee() {
    const emp = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value
    };

    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    });

    alert("Employee Added!");
    loadEmployees();
}

// LOAD all employees
async function loadEmployees() {
    const response = await fetch(baseURL);
    const data = await response.json();

    const tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";

    data.forEach(emp => {
        const row = `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.role}</td>
                <td>${emp.salary}</td>
                <td>
                    <button class="action-btn delete" onclick="deleteEmployee(${emp.id})">Delete</button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

// DELETE employee
async function deleteEmployee(id) {
    await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    alert("Employee Deleted!");
    loadEmployees();
}

// Load on page start
window.onload = loadEmployees;
async function updateEmployee() {
    const id = document.getElementById("updateId").value;

    const emp = {
        name: document.getElementById("updateName").value,
        email: document.getElementById("updateEmail").value,
        role: document.getElementById("updateRole").value,
        salary: document.getElementById("updateSalary").value
    };

    const response = await fetch(`${baseURL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    });

    alert("Employee Updated!");
    loadEmployees();
}
async function findEmployee() {
    const id = document.getElementById("findId").value;

    const response = await fetch(`${baseURL}/${id}`);

    if (response.status === 404) {
        document.getElementById("findResult").innerText = "Employee not found";
        return;
    }

    const emp = await response.json();

    document.getElementById("findResult").innerText =
        `ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}, Salary: ${emp.salary}`;
}
