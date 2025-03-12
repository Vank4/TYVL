fetch("head.html")
  .then((response) => response.text())
  .then((data) => {
    document.head.innerHTML += data;
  })
  .catch((error) => console.error("Lỗi khi tải head.html:", error));

function includeHTML() {
  document.getElementById("header").innerHTML = fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("header").innerHTML = data));

  document.getElementById("footer").innerHTML = fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data));
}

document.addEventListener("DOMContentLoaded", includeHTML);
