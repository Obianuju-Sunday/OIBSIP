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

function hashPassword(password) {
    const sha256 = new jsSHA('SHA-256', 'TEXT');
    sha256.update(password);
    return sha256.getHash('HEX');
  }
  
  signUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const username = document.getElementById('signUp-userName').value;
      const password = document.getElementById('signUp-password').value;
      
      const hashedPassword = hashPassword(password);

      console.log('Hashed Password:', hashedPassword); 
  
      localStorage.setItem('userName', username);
      localStorage.setItem('password', hashedPassword);

      alert('Signup successful! Please sign in.');
  });
  
  signInBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const username = document.getElementById('signIn-userName').value;
      const password = document.getElementById('signIn-password').value;
      const storedUsername = localStorage.getItem('userName');
      const storedPassword = localStorage.getItem('password');
  
      const hashedEnteredPassword = hashPassword(password);
  
      if (username === storedUsername && hashedEnteredPassword === storedPassword) {
          alert('Sign In successful! Redirecting to authenticated page.');
          window.location.href = 'page.html';
      } else {
          alert('Invalid username or password');
      }
  });
  