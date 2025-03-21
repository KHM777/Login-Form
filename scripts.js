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
