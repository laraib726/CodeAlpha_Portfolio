// Register Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const signupUser = document.getElementById('signupUser').value.trim();
        const signupEmail = document.getElementById('signupEmail').value.trim();
        const signupPass = document.getElementById('signupPass').value.trim();

        if (signupUser === "" || signupEmail === "" || signupPass === "") {
            alert("Please fill in all registration details!");
        } else {
            localStorage.setItem('registeredUser', signupUser);
            localStorage.setItem('registeredPass', signupPass);
            
            alert("Account registered successfully! Now you can sign in.");
        }
    });
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const enteredUser = document.getElementById('loginUser').value.trim();
        const enteredPass = document.getElementById('loginPass').value.trim();

        if (enteredUser === "" || enteredPass === "") {
            alert("Please fill in all login fields!");
            return;
        }

        const correctUser = localStorage.getItem('registeredUser') || "admin";
        const correctPass = localStorage.getItem('registeredPass') || "12345";

        if (enteredUser === correctUser && enteredPass === correctPass) {
            alert(`Welcome back, ${enteredUser}! Login successful.`);
        } else {
            alert("Incorrect username or password! Please try again.");
        }
    });
}