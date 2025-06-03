 function showLoginForm() {
      document.getElementById("loginForm").classList.remove("hidden");
      document.getElementById("registerForm").classList.add("hidden");
      document.getElementById("forgotForm").classList.add("hidden");
    }

    function showRegisterForm() {
      document.getElementById("registerForm").classList.remove("hidden");
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("forgotForm").classList.add("hidden");
    }

    function showForgotForm() {
      document.getElementById("forgotForm").classList.remove("hidden");
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("registerForm").classList.add("hidden");
    }

    function validateEmail(email) {
      const pattern = /^[^\s@]+@gmail\.com$/;
      return pattern.test(email);
    }

    function validatePhone(phone) {
      return /^\d{10}$/.test(phone);
    }

    function validatePassword(password) {
      return password.length >= 6;
    }

    function login() {
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      document.getElementById("loginEmailError").textContent = "";
      document.getElementById("loginPasswordError").textContent = "";

      if (!validateEmail(email)) {
        document.getElementById("loginEmailError").textContent = "Enter valid Gmail ID (e.g., example@gmail.com)";
        return;
      }
      if (!validatePassword(password)) {
        document.getElementById("loginPasswordError").textContent = "Password must be at least 6 characters long.";
        return;
      }
      alert("Login Successful!");
    }

    function register() {
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const dob = document.getElementById("dob").value;

      document.getElementById("registerError").textContent = "";

      if (!name || !phone || !address || !email || !password || !dob) {
        document.getElementById("registerError").textContent = "Please fill in all fields.";
        return;
      }
      if (!validatePhone(phone)) {
        document.getElementById("registerError").textContent = "Enter valid 10-digit mobile number.";
        return;
      }
      if (!validateEmail(email)) {
        document.getElementById("registerError").textContent = "Enter valid Gmail ID (e.g., example@gmail.com)";
        return;
      }
      if (!validatePassword(password)) {
        document.getElementById("registerError").textContent = "Password must be at least 6 characters.";
        return;
      }
      alert("Registration Successful!");
      showLoginForm();
    }

    function sendResetLink() {
      const email = document.getElementById("forgotEmail").value.trim();
      document.getElementById("forgotError").textContent = "";

      if (!validateEmail(email)) {
        document.getElementById("forgotError").textContent = "Enter valid Gmail ID (e.g., example@gmail.com)";
        return;
      }
      alert("Password reset link has been sent to " + email);
      showLoginForm();
    }