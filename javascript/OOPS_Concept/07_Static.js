class student {
    #Id;
    static coureseName = 'Playwright2x';
    static tutorName = 'Promod';
    name;
    age;

    constructor(name, id, age) {
        this.name = name;
        this.#Id = id;
        this.age = age;
    }

    getStudentInfo() {
        console.log(this.#Id + ' ' + this.name + ' ' + this.age + ' ' + student.coureseName + ' ' + student.tutorName)
    }

}

let student1 = new student('vishal0', 1, 32);
student1.getStudentInfo();
let student2 = new student('vishal1', 2, 32);
student2.getStudentInfo();
let student3 = new student('vishal2', 3, 32);
student3.getStudentInfo();
let student4 = new student('vishal3', 4, 32);
student4.getStudentInfo();
let student5 = new student('vishal4', 5, 32);
student5.getStudentInfo();
let student6 = new student('vishal5', 6, 32);
student6.getStudentInfo();
let student7 = new student('vishal6', 7, 32);
student7.getStudentInfo();
let student8 = new student('vishal7', 8, 32);
student8.getStudentInfo();
let student9 = new student('vishal8', 9, 32);
student9.getStudentInfo();
let student10 = new student('vishal9', 10, 32);
student10.getStudentInfo();