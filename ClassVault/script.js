function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  // Set valid credentials
  const validUsername = "Trinayan Gond";
  const validPassword = "Trinayan2006";

  if (username === validUsername && password === validPassword) {
    error.style.display = "none";
    window.location.href = "dashboard.html";
  } else {
    error.style.display = "block";
  }
}
