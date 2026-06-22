class Student {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = Math.floor(Math.random() * 10000000000000000);
    }

}


let mockStudentDb = [
    new Student("John", "Doe", "jondoe@gmail.com"),
    new Student("Kent", "Albores", "kentalbores143@gmail.com"),
];


let getStudentsAPI = () => {
    return mockStudentDb;
}

let getStudentByIdAPI = (id) => {
    return mockStudentDb.find(student => student.id === id);
}

let addStudentAPI = (student) => {
    mockStudentDb.push(student);
    return student;
}



let main = () => {
    console.log("Initial DB State: ", getStudentsAPI());


    // Test 2

    let newStudent = new Student("This", "Is", "A Test");
    mockStudentDb.push(newStudent);

    console.log("DB State after adding a new student: ", getStudentsAPI());

}


main();