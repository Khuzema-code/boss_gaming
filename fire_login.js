// JavaScript to handle form submission and fire effects

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let errorMessage = document.getElementById('error-message');

  // Clear previous error message
  errorMessage.classList.remove('show');

  // Simple validation for email and password
  if (!email || !password) {
    errorMessage.textContent = 'Both fields are required!';
    errorMessage.classList.add('show');
  } else if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long!';
    errorMessage.classList.add('show');
  } else {
    errorMessage.style.opacity = 0;
    alert('Logged in successfully!');
  }
});
