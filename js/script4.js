document.addEventListener("DOMContentLoaded", function() {
    const registerContainer = document.getElementById("register-container");
    const loginContainer = document.getElementById("login-container");
    const showLoginLink = document.getElementById("show-login");
    const showRegisterLink = document.getElementById("show-register");
    const registerForm = registerContainer.querySelector("form");

    // Hiển thị phần đăng ký khi tải trang
    registerContainer.classList.add("active");

    // Chuyển sang phần đăng nhập khi click vào "connecter ici"
    showLoginLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerContainer.classList.remove("active");
        loginContainer.classList.add("active");
    });

    // Chuyển sang phần đăng ký khi click vào "créer un compte ici"
    showRegisterLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginContainer.classList.remove("active");
        registerContainer.classList.add("active");
    });

    // Xử lý sự kiện submit form đăng ký
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // Điều hướng đến trang chủ (homepage)
                window.location.href = '/wedfigam/html/homepage.html';
            } else {
                alert("Mật khẩu và xác nhận mật khẩu không khớp.");
            }
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    });
});
