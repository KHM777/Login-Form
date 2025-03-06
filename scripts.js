document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector('#password');
    const usernameInput = document.querySelector('#username');
    const toggleIcon = document.querySelector('.toggle-pass');
    const loginForm = document.querySelector('form');
    const message = document.createElement('p'); // لإنشاء رسالة التحذير
    message.style.textAlign = "center";
    message.style.marginTop = "10px";

    loginForm.appendChild(message); // إضافة الرسالة أسفل الفورم

    // تبديل إظهار كلمة المرور عند الضغط على الأيقونة
    toggleIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.replace('bi-eye', 'bi-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.replace('bi-eye-slash', 'bi-eye');
        }
    });

    // التحقق من بيانات تسجيل الدخول عند الضغط على الزر
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال الفورم

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "KHaled" && password === "123") {
            message.style.color = "green";
            message.textContent = "✅ Login Success!";
        } else {
            message.style.color = "red";
            message.textContent = "❌ Incorrect Username OR Password!";
        }
    });
});
