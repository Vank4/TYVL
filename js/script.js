function includeHTML() {
  document.getElementById("header").innerHTML = fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));

  document.getElementById("footer").innerHTML = fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));
}

document.addEventListener("DOMContentLoaded", includeHTML);

document.addEventListener("DOMContentLoaded", function () {
  let authLink = document.getElementById("auth-link");

  // Kiểm tra xem người dùng đã đăng nhập chưa
  let isLoggedIn = localStorage.getItem("loggedInUser");

  if (isLoggedIn) {
    authLink.innerHTML = "TRANG CÁ NHÂN"; // Thay đổi nội dung
    authLink.href = "profile.html"; // Điều hướng đến trang cá nhân
  } else {
    authLink.innerHTML = "ĐĂNG NHẬP";
    authLink.href = "login.html"; // Điều hướng đến trang đăng nhập
  }
});

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "home.html"; // Quay về trang chủ sau khi đăng xuất
}

document.addEventListener("DOMContentLoaded", function () {
  let loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn reload trang

      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      // Lấy tài khoản từ localStorage
      let storedUser = JSON.parse(localStorage.getItem("userAdmin"));

      if (
        storedUser &&
        username === storedUser.username &&
        password === storedUser.password
      ) {
        localStorage.setItem("loggedInUser", username); // Lưu trạng thái đăng nhập
        window.location.href = "home.html"; // Điều hướng về trang chủ
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    });
  }
});
