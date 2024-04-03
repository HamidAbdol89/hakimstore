document.addEventListener("DOMContentLoaded", function() {
    var accountLink = document.querySelector(".account-link");
    var loginOverlay = document.getElementById("loginOverlay");
    var registerOverlay = document.getElementById("registerOverlay");
    var managerOverlay = document.getElementById("managerOverlay");

    // Xử lý khi người dùng nhấn vào liên kết tài khoản
    accountLink.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

        // Hiển thị overlay tương ứng dựa trên href của liên kết
        if (event.target.href.endsWith("login.html")) {
            loginOverlay.style.display = "block";
        } else if (event.target.href.endsWith("register.html")) {
            registerOverlay.style.display = "block";
        } else if (event.target.href.endsWith("account-management.html")) {
            managerOverlay.style.display = "block";
        }
    });
});






    if (contactLink && contactSection) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            window.location.href = 'contact.html'; // Chuyển hướng sang trang contact.html
        });
    }

    document.addEventListener("click", function(event) {
        if (accountDropdown && !event.target.matches(".account-link")) {
            accountDropdown.classList.remove("show");
        }
    });

