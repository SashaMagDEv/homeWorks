let user = {
    name: 'Sasha',
    age: 31,
    location: "Коростишів, Україна",
    email: "oleks@example.com",


    getInfo() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Місце проживання: ${this.location}`);
        console.log(`Email: ${this.email}`);
    }
};

user.getInfo();