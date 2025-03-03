class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {

        const div = document.getElementById("coach-info");
        div.innerHTML += `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}</br>`
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }

}

const coaches = [
    new Coach('John Doe', 'Fitness', 4.7),
    new Coach('Alice Smith', 'Yoga', 4.9)
];

for (let coach of coaches) {
    coach.displayInfo();
}