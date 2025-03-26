document.getElementById("register-btn").addEventListener("click", function (e) {
    e.preventDefault();

    let username = document.getElementById("new-username").value.trim();
    let password = document.getElementById("new-password").value.trim();

    if (username && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // التأكد من عدم وجود المستخدم مسبقًا
        let userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("هذا المستخدم مسجل مسبقًا!");
            return;
        }

        // حفظ المستخدم الجديد
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
        window.location.href = "index.html"; // الانتقال لصفحة تسجيل الدخول
    } else {
        alert("يرجى إدخال جميع البيانات!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("new-password");
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

