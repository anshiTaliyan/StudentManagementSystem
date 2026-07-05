let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");
function displayStudent(){
    tableBody.innerHTML = "";
    students.forEach(function(student, index){
        tableBody.innerHTML += `
        <tr>
        <td>${student.studentName}</td>
        <td>${student.rollNo}</td>
        <td>${student.course}</td>
        <td>${student.semester}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
        </td>
        </tr>
        `;
    });
}
displayStudent();
addBtn.addEventListener("click",function(event){
    event.preventDefault();
    let studentName = document.getElementById("userName").value;
    let rollNo = document.getElementById("rollNo").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("Semester").value;
    let email = document.getElementById("emailId").value;
    let phone = document.getElementById("phoneNo").value;
    if(
        studentName.trim() === "" ||
        rollNo.trim() === "" ||
        course.trim() === "" ||
        semester.trim() === "" ||
        email.trim() === "" ||
        phone.trim() === "" 
    ){
        alert("please fill all fields ");
        return;
    }
    if(phone.length !== 10){
        alert("Phone number must be 10 digits");
        return;
    }
    let student = {
        studentName,
        rollNo,
        course,
        semester,
        email,
        phone
    };
    if(editIndex === -1){
        students.push(student);
    } else{
        students[editIndex] = student;
        editIndex = -1;
        addBtn.innerText = "Add Student";
    }
    localStorage.setItem("students",JSON.stringify(students));
    displayStudent();
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "";
    document.getElementById("Semester").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("phone").value = "";

});
function deleteStudent(index){
    if(confirm("Do you want to delete this student?")){
        students.splice(index,1);
        localStorage.setItem("students",JSON.stringify(students));
        displayStudent();
    }
}
function editStudent(index){
    let student = students[index];
    document.getElementById("userName").value = student.studentName;
    document.getElementById("rollNo").value = student.rollNo;
    document.getElementById("course").value = student.course;
    document.getElementById("Semester").value = student.semester;
    document.getElementById("emailId").value = student.email;
    document.getElementById("phoneNo").value = "";
    editIndex = index;
    addBtn.innerText = "Update Student";
}