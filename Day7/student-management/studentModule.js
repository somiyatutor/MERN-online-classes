const fs=require("fs");
function getStudents(){
    const data=fs.readFileSync("students.json","utf8");
    return JSON.parse(data);
}

function addStudent(student){
    const students=getStudents();
    students.push(student);
    fs.writeFileSync(
        "students.json",JSON.stringify(
            students,
            null,
            2
        )
    );
}

function deleteStudent(name){
    const students= getStudents();
    const updatedStudents=students.filter(
      (student)=>student.name !==name
    );

    fs.writeFileSync(
        "students.json",
        JSON.stringify(
            updatedStudents,
            null,
            2
        )
    )
}
module.exports={
    getStudents,addStudent,deleteStudent
};