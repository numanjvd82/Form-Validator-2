const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const error = (input.className = 'form__input error');
  const errorMessage = document.getElementById('error__message');
  errorMessage.className = 'error__message visible';
  errorMessage.innerText = message;
};

const showSuccess = (input) => {
  const success = (input.className = 'form__input success');
};

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '') {
    showError(userName, 'Username is required');
  } else {
    showSuccess(userName);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Passwords do not match!');
  } else {
    showSuccess(password2);
  }
});
