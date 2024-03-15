const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById('sign-up-btn');
const signInBtn = document.getElementById('sign-in-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Check if user is already signed up (e.g., after page refresh)
// const storedUsername = localStorage.getItem('userName');
// const storedPassword = localStorage.getItem('password');


signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('signUp-userName').value;
    const password = document.getElementById('signUp-password').value;
    localStorage.setItem('userName', username);
    localStorage.setItem('password', password);
    alert('Signup successful! Please sign in.');
});


signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('signIn-userName').value;
    const password = document.getElementById('signIn-password').value;
    const storedUsername = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        alert('Sign In successful! Redirecting to authenticated page.');
        window.location.href = 'page.html';
    } else {
        alert('Invalid username or password');
    }
});