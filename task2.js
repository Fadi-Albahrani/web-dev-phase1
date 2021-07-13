function student(id, sName, sLevel) {
    return student = {
        studentId: id,
        studentName: sName,
        studentLevel: sLevel

    }
}

student(20201524, "Fadi", "Senior");
console.log(student);



let user = {};

user.name = "fadi";
console.log(user.name);
user.surename = "falah";
console.log(user.surename);
user.name = "Akash";
console.log(user.name);
delete user.name;
console.log(user.name);