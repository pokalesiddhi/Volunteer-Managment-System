// --- Form Visibility Functions ---
function showLoginForm() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("forgotForm").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    // Clear any previous errors
    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
}

function showRegisterForm() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("forgotForm").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    // Clear any previous errors
    document.getElementById("registerError").textContent = "";
}

function showForgotForm() {
    document.getElementById("forgotForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    // Clear any previous errors
    document.getElementById("forgotError").textContent = "";
}

function showDashboard() {
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("forgotForm").classList.add("hidden");
    // Default to showing the view profile section
    showDashboardSection('viewProfileSection');
    loadProfileData(); // Load data when entering dashboard
    loadTasksData(); // Load tasks when entering dashboard
}

function showDashboardSection(sectionId) {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}


// --- Validation Functions ---
function validateEmail(email) {
    const pattern = /^[^\s@]+@gmail\.com$/; // Enforce gmail.com
    return pattern.test(email);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone); // Exactly 10 digits
}

function validatePassword(password) {
    return password.length >= 6; // At least 6 characters
}

// --- User Authentication & Simulation (Frontend Only) ---

// This object would typically come from a backend API response
let currentUser = {
    name: "Simulated User",
    email: "simulated.user@gmail.com",
    phone: "9876543210",
    address: "456 Fictional Rd, Sampleton, ST, 67890",
    dob: "1995-03-20",
    tasks: {
        pending: [
            "Organize community clean-up (Due: 2025-06-20)",
            "Call new volunteers (Due: 2025-06-25)"
        ],
        completed: [
            "Attend orientation session (Completed: 2025-05-30)"
        ]
    }
};

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

    // --- SIMULATE API CALL FOR LOGIN ---
    // In a real application, you would send a POST request to your backend:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         // Save user token/session data (e.g., localStorage)
    //         // currentUser = data.userData; // Update current user with real data
    //         showDashboard();
    //     } else {
    //         document.getElementById("loginEmailError").textContent = data.message;
    //     }
    // })
    // .catch(error => {
    //     console.error('Login error:', error);
    //     document.getElementById("loginEmailError").textContent = "Network error or server unavailable.";
    // });

    // Simulating successful login after a delay
    alert("Simulating Login...");
    setTimeout(() => {
        alert("Login Successful! Redirecting to dashboard.");
        showDashboard();
    }, 1000); // Simulate network delay
}

function register() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value; // Date input value is already a string 'YYYY-MM-DD'

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

    // --- SIMULATE API CALL FOR REGISTRATION ---
    // In a real application, you would send a POST request to your backend:
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, phone, address, email, password, dob })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("Registration Successful! Please login.");
    //         // currentUser = data.userData; // Optionally set current user after registration
    //         showLoginForm();
    //     } else {
    //         document.getElementById("registerError").textContent = data.message;
    //     }
    // })
    // .catch(error => {
    //     console.error('Registration error:', error);
    //     document.getElementById("registerError").textContent = "Network error or server unavailable.";
    // });

    // Simulating successful registration after a delay
    alert("Simulating Registration...");
    setTimeout(() => {
        alert("Registration Successful! Redirecting to dashboard.");
        // For a real registration, you'd likely redirect to login form,
        // but for this simulation, we'll go to dashboard directly after "registration"
        // and assume 'currentUser' is populated based on the registered data.
        currentUser = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            dob: dob,
            tasks: { pending: [], completed: [] } // New user starts with no tasks
        };
        showDashboard();
    }, 1000); // Simulate network delay
}

function sendResetLink() {
    const email = document.getElementById("forgotEmail").value.trim();
    document.getElementById("forgotError").textContent = "";

    if (!validateEmail(email)) {
        document.getElementById("forgotError").textContent = "Enter valid Gmail ID (e.g., example@gmail.com)";
        return;
    }

    // --- SIMULATE API CALL FOR PASSWORD RESET ---
    // In a real application, you would send a POST request to your backend:
    // fetch('/api/forgot-password', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("Password reset link has been sent to " + email);
    //         showLoginForm();
    //     } else {
    //         document.getElementById("forgotError").textContent = data.message;
    //     }
    // })
    // .catch(error => {
    //     console.error('Forgot password error:', error);
    //     document.getElementById("forgotError").textContent = "Network error or server unavailable.";
    // });

    // Simulating sending reset link
    alert("Simulating sending reset link to " + email);
    setTimeout(() => {
        alert("Password reset link has been sent to " + email + " (simulated).");
        showLoginForm();
    }, 500); // Simulate network delay
}

function logout() {
    // In a real app, you'd invalidate the session/token on the backend
    // fetch('/api/logout', { method: 'POST' }).then(() => { /* clear local storage, redirect */ });
    alert("Logging out...");
    // Clear any stored user data (if using localStorage/sessionStorage)
    // localStorage.removeItem('authToken');
    // sessionStorage.removeItem('currentUserData');
    currentUser = null; // Clear simulated current user
    showLoginForm();
}

// --- Dashboard Functions (Frontend Only) ---

function loadProfileData() {
    // In a real app, this would fetch data from /api/profile
    // fetch('/api/profile', {
    //     headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         currentUser = data.userData; // Update currentUser with fresh data
    //         // Populate the view profile fields
    //         document.getElementById("dashboardName").textContent = currentUser.name;
    //         document.getElementById("dashboardEmail").textContent = currentUser.email;
    //         document.getElementById("dashboardPhone").textContent = currentUser.phone;
    //         document.getElementById("dashboardAddress").textContent = currentUser.address;
    //         document.getElementById("dashboardDob").textContent = currentUser.dob;
    //
    //         // Populate edit profile fields
    //         document.getElementById("editName").value = currentUser.name;
    //         document.getElementById("editPhone").value = currentUser.phone;
    //         document.getElementById("editAddress").value = currentUser.address;
    //     } else {
    //         alert("Failed to load profile data: " + data.message);
    //         logout(); // Maybe force logout if session expired
    //     }
    // })
    // .catch(error => {
    //     console.error('Error loading profile:', error);
    //     alert("Error loading profile data.");
    // });

    if (currentUser) {
        document.getElementById("dashboardName").textContent = currentUser.name;
        document.getElementById("dashboardEmail").textContent = currentUser.email;
        document.getElementById("dashboardPhone").textContent = currentUser.phone;
        document.getElementById("dashboardAddress").textContent = currentUser.address;
        document.getElementById("dashboardDob").textContent = currentUser.dob;

        document.getElementById("editName").value = currentUser.name;
        document.getElementById("editPhone").value = currentUser.phone;
        document.getElementById("editAddress").value = currentUser.address;
    }
}

function saveProfile() {
    const updatedName = document.getElementById("editName").value.trim();
    const updatedPhone = document.getElementById("editPhone").value.trim();
    const updatedAddress = document.getElementById("editAddress").value.trim();
    document.getElementById("editProfileError").textContent = "";

    if (!updatedName || !updatedPhone || !updatedAddress) {
        document.getElementById("editProfileError").textContent = "Please fill in all fields.";
        return;
    }
    if (!validatePhone(updatedPhone)) {
        document.getElementById("editProfileError").textContent = "Enter valid 10-digit mobile number.";
        return;
    }

    // --- SIMULATE API CALL TO UPDATE PROFILE ---
    // In a real application, you would send a PUT/PATCH request to your backend:
    // fetch('/api/profile', {
    //     method: 'PUT', // or PATCH
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    //     },
    //     body: JSON.stringify({ name: updatedName, phone: updatedPhone, address: updatedAddress })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("Profile updated successfully!");
    //         currentUser.name = updatedName;
    //         currentUser.phone = updatedPhone;
    //         currentUser.address = updatedAddress;
    //         showDashboardSection('viewProfileSection');
    //         loadProfileData(); // Refresh view profile data
    //     } else {
    //         document.getElementById("editProfileError").textContent = data.message;
    //     }
    // })
    // .catch(error => {
    //     console.error('Error saving profile:', error);
    //     document.getElementById("editProfileError").textContent = "Network error or server unavailable.";
    // });

    alert("Simulating Profile Save...");
    setTimeout(() => {
        if (currentUser) { // Ensure there's a user to update
            currentUser.name = updatedName;
            currentUser.phone = updatedPhone;
            currentUser.address = updatedAddress;
        }
        alert("Profile updated successfully (simulated)!");
        showDashboardSection('viewProfileSection');
        loadProfileData(); // Refresh displayed data
    }, 500);
}

function loadTasksData() {
    // In a real app, this would fetch tasks from /api/tasks
    // fetch('/api/tasks', { /* headers, etc. */ })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         currentUser.tasks = data.tasks; // Update tasks
    //         renderTasks();
    //     } else { /* handle error */ }
    // });

    renderTasks(); // Render simulated tasks
}

function renderTasks() {
    const pendingList = document.getElementById("pendingTasksList");
    const completedList = document.getElementById("completedTasksList");

    pendingList.innerHTML = ''; // Clear previous tasks
    completedList.innerHTML = ''; // Clear previous tasks

    if (currentUser && currentUser.tasks) {
        currentUser.tasks.pending.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            pendingList.appendChild(li);
        });

        currentUser.tasks.completed.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            completedList.appendChild(li);
        });
    }
}

function addTask() {
    document.getElementById("addTaskForm").classList.remove("hidden");
}

function saveNewTask() {
    const description = document.getElementById("newTaskDescription").value.trim();
    const dueDate = document.getElementById("newTaskDueDate").value;

    if (!description) {
        alert("Task description cannot be empty.");
        return;
    }

    const newTask = `${description} (Due: ${dueDate || 'N/A'})`;

    // --- SIMULATE API CALL TO ADD TASK ---
    // fetch('/api/tasks', {
    //     method: 'POST',
    //     headers: { /* ... */ },
    //     body: JSON.stringify({ description, dueDate, status: 'pending' })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         currentUser.tasks.pending.push(data.newTask); // Assuming backend returns the full task object
    //         renderTasks();
    //         document.getElementById("newTaskDescription").value = "";
    //         document.getElementById("newTaskDueDate").value = "";
    //         document.getElementById("addTaskForm").classList.add("hidden");
    //     }
    // });

    alert("Simulating Adding New Task...");
    setTimeout(() => {
        if (currentUser) {
            currentUser.tasks.pending.push(newTask);
            renderTasks();
            document.getElementById("newTaskDescription").value = "";
            document.getElementById("newTaskDueDate").value = "";
            document.getElementById("addTaskForm").classList.add("hidden");
        }
        alert("Task added (simulated)!");
    }, 500);
}

function cancelAddTask() {
    document.getElementById("newTaskDescription").value = "";
    document.getElementById("newTaskDueDate").value = "";
    document.getElementById("addTaskForm").classList.add("hidden");
}

// Initial state: show login form
document.addEventListener("DOMContentLoaded", showLoginForm);