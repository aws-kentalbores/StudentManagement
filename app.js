import {getStudentByIdAPI,getStudentsAPI,addStudentAPI} from "./api.js";

let localStudentDb = []

let studentForm = document.getElementById("studentForm");
let studentTableBody = document.querySelector(".table-panel tbody");
let button = document.getElementById("submitButton");


let renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";
    dataArray.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${dataArray.indexOf(student) + 1}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.email}</td>`;
        studentTableBody.appendChild(row);
    });
};

console.log("localStudentDb:", localStudentDb);
renderTable(localStudentDb);

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    if (!firstName || firstName.trim() === "" || !lastName || lastName.trim() === "" || !email || email.trim() === "") {
        alert("All fields are required");
        return;
    }else if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("First name and last name must contain only letters");
        return;
    }else if (firstName.length < 2 || lastName.length < 2 || email.length < 2) {
        alert("First name, last name, and email must be at least 2 characters long");
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address");
        return;
    } else if (localStudentDb.some(student => student.email === email)) {
        alert("Email already exists in the database");
        return;
    }
    
    let newStudent = addStudentAPI({ firstName, lastName, email })
    localStudentDb.push(newStudent);
    renderTable(localStudentDb);
    studentForm.reset();

});


const initApp = () => {
    console.log("Initial DB State: ", getStudentsAPI());
    renderTable(localStudentDb);
}

initApp();
