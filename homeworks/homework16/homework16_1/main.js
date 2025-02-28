class Student {
    constructor(firstName, lastName, birthYear, marks = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.marks = marks;
        this.attendance = [];
    }

    getAge () {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear;
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    }

    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        } else {
            console.log("Запис відвідування заповнений");
        }
    }

    absent() {
        if (this.attendance.length > 25) {
            this.attendance.push(false);
        } else {
            console.log("Запис відвідування заповнений");
        }
    }

    getAttendanceRatio() {
        if (this.attendance.length === 0) return 0;
        const presentCount = this.attendance.filter(present => present).length;
        return presentCount / this.attendance.length;
    }

    summary() {
        const avgMark = this.getAverageMark();
        const attendanceRadio = this.getAttendanceRatio();

        if (avgMark > 90 && attendanceRadio > 0.9) {
            return "Молодець";
        } else if (avgMark < 90 && attendanceRadio < 0.9) {
            return "Редиска";
        } else {
            return "Добре, але можна краще"
        }
    }
}
const student1 = new Student("Іван", "Кор", 2000, [95, 92, 88, 100]);
for (let i = 0; i < 25; i++) {
    student1.present();
}

const student2 = new Student("Марія", "Мельник", 1999, [70, 80, 75, 85]);
for (let i = 0; i < 20; i++) {
    student2.present();
}
for (let i = 0; i < 5; i++) {
    student2.absent();
}

const student3 = new Student("Олександр", "Хутор", 2001, [91, 95, 93, 98]);
for (let i = 0; i < 25; i++) {
    if (i % 2 === 0) {
        student3.present();
    } else {
        student3.absent();
    }
}

console.log(
    "Студент 1:", student1.firstName, student1.lastName,
    "Вік:", student1.getAge(),
    "Середній бал:", student1.getAverageMark(),
    "Відвідуваність:", student1.getAttendanceRatio(),
    "Резюме:", student1.summary()
);
console.log(
    "Студент 2:", student2.firstName, student2.lastName,
    "Вік:", student2.getAge(),
    "Середній бал:", student2.getAverageMark(),
    "Відвідуваність:", student2.getAttendanceRatio(),
    "Резюме:", student2.summary()
);

console.log(
    "Студент 3:", student3.firstName, student3.lastName,
    "Вік:", student3.getAge(),
    "Середній бал:", student3.getAverageMark(),
    "Відвідуваність:", student3.getAttendanceRatio(),
    "Резюме:", student3.summary()
);