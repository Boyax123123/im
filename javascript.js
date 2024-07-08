
function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var icon = input.nextElementSibling;

    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "Hide";
    } else {
        input.type = "password";
        icon.textContent = "Show";
    }
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Login clicked with Username:', username, 'and Password:', password);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('fn').value;
    var lastName = document.getElementById('ln').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('confirm').value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    console.log('Register clicked with First Name:', firstName, 'Last Name:', lastName, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
});


document.getElementById('pass').addEventListener('input', function() {
    var value = this.value;
    this.value = value.replace(/./g, '*');
});

document.getElementById('confirm').addEventListener('input', function() {
    var value = this.value;
    this.value = value.replace(/./g, '*');
});
