let students = [
    {
        name:"Aarav",
        age:20,
        marks:92
    },
    {
        name:"Ananya",
        age:19,
        marks:88
    },
    {
        name:"Dev",
        age:21,
        marks:75
    },
    {
        name:"Karan",
        age:20,
        marks:95
    },
    {
        name:"Meera",
        age:19,
        marks:90
    },
    {
        name:"Rohan",
        age:22,
        marks:68
    },
    {
        name:"Sneha",
        age:20,
        marks:85
    }
];

function displayStudents(){

    let body = document.getElementById("tableBody");

    body.innerHTML = "";

    students.forEach(function(student){

        body.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.marks}</td>
        </tr>
        `;

    });

}

displayStudents();

function sortName(){

    students.sort(function(a,b){

        return a.name.localeCompare(b.name);

    });

    displayStudents();

}

function sortAge(){

    students.sort(function(a,b){

        return a.age-b.age;

    });

    displayStudents();

}

function sortMarks(){

    students.sort(function(a,b){

        return b.marks-a.marks;

    });

    displayStudents();

}