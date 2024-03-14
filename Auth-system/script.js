const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('sign-up');
    const signInForm = document.getElementById('sign-in');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        localStorage.setItem('userName', username);
        localStorage.setItem('password', password);
        alert('Signup successful! Please sign in.');
    });

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        const storedUsername = localStorage.getItem('userName');
        const storedPassword = localStorage.getItem('password');
        if (username === storedUsername && password === storedPassword) {
            alert('Sign In successful! Redirecting to authenticated page.');
            window.location.href = 'page.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
