const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const userEmail = document.querySelector('#email-login').value.trim();
  const userPassword = document.querySelector('#password-login').value.trim();

  if (userEmail && userPassword) {
    // Send a POST request to the API endpoint
    console.log("yes email and passwor")
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, password: userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("kjdfhkjdhfg")
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);