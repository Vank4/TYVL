document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");

  if (registerButton && loginButton && container) {
    registerButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    loginButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
});

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("userAdmin"));

  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("loggedInUser", "true");
    window.location.href = "home.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}
