document.getElementById('myForm').addEventListener('submit', function(event) {
    var fullname = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var message = document.getElementById('message').value.trim();

    var isValid = true;

  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('email').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('email').classList.remove('error');
    }

    
    if (password.length < 8) {
      document.getElementById('password').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('password').classList.remove('error');
    }

    
    if (!isValid) {
      event.preventDefault();
    }
  });
