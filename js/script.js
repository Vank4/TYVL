// Hàm để nạp header & footer trước khi thực hiện logic đăng nhập
function includeHTML(callback) {
  Promise.all([
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("header").innerHTML = data)),
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data)),
  ]).then(callback);
}

// Hàm kiểm tra trạng thái đăng nhập và cập nhật giao diện
function updateAuthUI() {
  const authLink = document.getElementById("auth-link");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (authLink) {
    if (isLoggedIn) {
      authLink.textContent = "CÁ NHÂN";
      authLink.href = "profile.html";
    } else {
      authLink.textContent = "ĐĂNG NHẬP";
      authLink.href = "login.html";
    }
  }
}

// Hàm xử lý đăng xuất
function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
  window.location.href = "home.html"; // Quay về trang chủ sau khi đăng xuất
}

// Hàm xử lý đăng nhập
function handleLogin() {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn reload trang

      const username = document.querySelector('input[type="text"]').value;
      const password = document.querySelector('input[type="password"]').value;
      const storedUser = JSON.parse(localStorage.getItem("userAdmin"));

      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("isLoggedIn", "true"); // Đánh dấu đã đăng nhập
        localStorage.setItem("loggedInUser", username); // Lưu user vào localStorage
        window.location.href = "profile.html"; // Chuyển hướng đến trang cá nhân
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    });
  }
}

// Gọi các hàm khi trang load xong
document.addEventListener("DOMContentLoaded", function () {
  includeHTML(() => {
    updateAuthUI(); // Cập nhật header sau khi nạp
    handleLogin(); // Xử lý đăng nhập
  });
});
