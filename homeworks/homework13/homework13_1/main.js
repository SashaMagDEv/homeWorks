document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name === "") {
        document.getElementById("nameError").textContent = "Ім'я обов'язкове";
        isValid = false;
    }
    if (message.length < 5) {
        document.getElementById("messageError").textContent = "Повідомлення має містити мінімум 5 символів";
        isValid = false;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Телефон повинен починатися з +380 і містити 12 цифр";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Введіть коректну пошту";
        isValid = false;
    }

    if (isValid) {
        console.table({ Name: name, Email: email, Phone: phone, Message: message });
        alert('Форма відправлена');
    }
})


