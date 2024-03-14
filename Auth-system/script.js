const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function signUp() {
    // Get user information from form

    var fullName = document.getElementById('fullName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordConfirm').value;

    const signUpApi = 'https://invest-iq.onrender.com/api/signup';
    // const signUpApi = 'http://localhost:3000/api/auth/signup';

    var requestConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userName,
            fullName: fullName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        })
    };

    fetch(signUpApi, requestConfig)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Signup successful! User details saved to database.')
        })
        .catch(error => {
            console.error(error);
            alert('Signup failed. Please try again.');
        });
}

