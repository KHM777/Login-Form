//document.addEventListener("DOMContentLoaded", function () {
//    const currentUserElement = document.getElementById("current-user");
//    const userListElement = document.getElementById("user-list");
//    const chatWithElement = document.getElementById("chat-with");
//    const chatBoxElement = document.getElementById("chat-box");
//    const messageInputElement = document.getElementById("message-input");
//    const sendBtnElement = document.getElementById("send-btn");
//    const logoutBtnElement = document.getElementById("logout-btn");
//
//    // التحقق من تسجيل الدخول
//    let currentUser = localStorage.getItem("loggedInUser");
//
//    if (!currentUser) {
//        window.location.href = "index.html";
//        return;
//    }
//
//    document.addEventListener("DOMContentLoaded", function () {
//    let user = JSON.parse(localStorage.getItem("loggedUser"));
//
//    if (!user) {
//        alert("يرجى تسجيل الدخول أولًا.");
//        window.location.href = "index.html";
//    } else {
//        document.getElementById("chat-box").innerHTML += `<p>مرحبًا، ${user.username}!</p>`;
//    }
//
//    currentUserElement.textContent = currentUser;
//
//    let users = JSON.parse(localStorage.getItem("users")) || [];
//    let selectedChatUser = null;
//
//    // تحميل قائمة المستخدمين
//    function loadUserList() {
//        userListElement.innerHTML = "";
//        users.forEach(user => {
//            if (user !== currentUser) {
//                let li = document.createElement("li");
//                li.textContent = user;
//                li.addEventListener("click", function () {
//                    selectedChatUser = user;
//                    chatWithElement.textContent = selectedChatUser;
//                    loadChatHistory();
//                });
//                userListElement.appendChild(li);
//            }
//        });
//    }
//
//    // تحميل الرسائل بين المستخدمين
//    function loadChatHistory() {
//        chatBoxElement.innerHTML = "";
//        if (!selectedChatUser) return;
//
//        let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
//        let messages = chatHistory[`${currentUser}_${selectedChatUser}`] || chatHistory[`${selectedChatUser}_${currentUser}`] || [];
//
//        messages.forEach(msg => {
//            let messageElement = document.createElement("p");
//            messageElement.textContent = `${msg.sender}: ${msg.text}`;
//            chatBoxElement.appendChild(messageElement);
//        });
//
//        // التمرير التلقائي لأسفل
//        chatBoxElement.scrollTop = chatBoxElement.scrollHeight;
//    }
//
//    // إرسال الرسالة
//    sendBtnElement.addEventListener("click", function () {
//        if (!selectedChatUser) {
//            alert("Select a user to chat with!");
//            return;
//        }
//
//        let message = messageInputElement.value.trim();
//        if (message === "") return;
//
//        let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
//        let chatKey = `${currentUser}_${selectedChatUser}`;
//
//        if (!chatHistory[chatKey]) {
//            chatHistory[chatKey] = [];
//        }
//
//        chatHistory[chatKey].push({ sender: currentUser, text: message });
//        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
//
//        messageInputElement.value = "";
//        loadChatHistory();
//    });
//
//    // تسجيل الخروج
//    logoutBtnElement.addEventListener("click", function () {
//        localStorage.removeItem("loggedInUser");
//        window.location.href = "index.html";
//    });
//
//    loadUserList();
//});


//document.addEventListener("DOMContentLoaded", function () {
//    let user = JSON.parse(localStorage.getItem("loggedUser"));
//
//    if (!user) {
//        alert("يرجى تسجيل الدخول أولًا.");
//        window.location.href = "index.html";
//    } else {
//        document.getElementById("chat-box").innerHTML += `<p>مرحبًا، ${user.username}!</p>`;
//    }
//
//    document.getElementById("send-btn").addEventListener("click", function () {
//        let message = document.getElementById("message-input").value;
//        if (message.trim() !== "") {
//            document.getElementById("chat-box").innerHTML += `<p>${user.username}: ${message}</p>`;
//            document.getElementById("message-input").value = "";
//        }
//    });
//});
//document.getElementById("logout-btn").addEventListener("click", function () {
//    localStorage.removeItem("loggedUser");
//    window.location.href = "index.html"; // إعادة التوجيه �