loginBtn.addEventListener("click", async () => {
  event.preventDefault()

  let userLogin = document.getElementById("user-name-login").value.trim();
  let passLogin = document.getElementById("password-login").value.trim();

  if (userLogin && passLogin) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ 
              userName: userLogin, 
              password: passLogin 
          }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
})
signupBtn.addEventListener("click", async () => {
  event.preventDefault()
  let userSignup = document.getElementById("user-name-signup").value.trim();
  let passSignup = document.getElementById("password-signup").value.trim();    
  console.log(userSignup)
  console.log(passSignup)

  if (userSignup && passSignup) {
      const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({
              name: userSignup,
              password: passSignup
          }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
})
