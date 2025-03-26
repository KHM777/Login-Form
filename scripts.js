document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // حفظ المستخدم الحالي ليبقى مسجلًا
        localStorage.setItem("loggedUser", JSON.stringify(validUser));

        window.location.href = "chat.html"; // الانتقال إلى الشات
    } else {
        alert("بيانات الدخول غير صحيحة، أو الحساب غير مسجل.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-pass");

    toggleIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.classList.remove("bi-eye-slash");
            toggleIcon.classList.add("bi-eye");
        } else {
            passwordInput.type = "password";
            toggleIcon.classList.remove("bi-eye");
            toggleIcon.classList.add("bi-eye-slash");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const helpLink = document.getElementById("help-link");
    const helpMessage = document.getElementById("help-message");
    const closeBtn = document.getElementById("close-help");

    helpLink.addEventListener("click", function (event) {
        event.preventDefault(); // منع التنقل إلى #
        helpMessage.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
        helpMessage.classList.remove("show");
    });
});

