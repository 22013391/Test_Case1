document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const status = document.getElementById('status');

    // TC_03: Empty fields check
    if (user === "" || pass === "") {
        status.innerText = "Fields cannot be empty";
        status.style.color = "orange";
        return;
    }

    // TC_04: Basic SQL Injection prevention
    // Looking for ' OR '1'='1
    const sqlPattern = /' OR '1'='1/i;
    if (sqlPattern.test(user) || sqlPattern.test(pass)) {
        status.innerText = "SQL Injection detected! Access Denied.";
        status.style.color = "purple";
        return;
    }

    // Credentials for TC_01 and TC_02
    const VALID_USER = "admin";
    const VALID_PASS = "admin";

    if (user === VALID_USER && pass === VALID_PASS) {
        // TC_01: Valid login
        status.innerText = "User successfully logged in! Redirecting...";
        status.style.color = "green";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        // TC_02: Invalid login
        status.innerText = "Invalid credentials";
        status.style.color = "red";
    }
});