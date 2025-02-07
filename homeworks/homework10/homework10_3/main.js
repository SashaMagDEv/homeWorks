let contactsBook = {
    contacts: [
        { name: "Олександр", phone: "+38044444444", email: "olex@gmail.com" },
        { name: "Павло", phone: "+38022222222", email: "pavlo@gmail.com" }
    ],

    findContact(name) {
        let contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (contact) {
            console.log(`Знайдено контакт: ${contact.name}, Телефон: ${contact.phone}, Email: ${contact.email}`);
        } else {
            console.log("Контакт не знайдено.");
        }
    },

    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log(`Контакт ${name} додано.`);
    }
};

contactsBook.addContact("Олексій", "+38033333333", "oleksiy@example.com");

contactsBook.findContact("Павло");