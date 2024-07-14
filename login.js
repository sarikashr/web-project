document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // Perform login validation or API call here
      // For demonstration purposes, we'll assume the login is successful
      if (username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // Redirect to the dashboard or perform other actions
      } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
      }
    });
  });