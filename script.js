function validateLogin() {
    const username = $('#username').val();
    const password = $('#password').val();
  
    // Validate username (starts with a capital letter)
    if (/^[A-Z]/.test(username)) {
      // Validate password (small letters and numbers only)
      if (/^[a-z0-9]+$/.test(password)) {
        // Successful login
        redirectToDashboard();
      } else {
        alert('Password should have only small letters and numbers.');
      }
    } else {
      alert('Username should start with a capital letter.');
    }
  }
  
  function redirectToDashboard() {
    const redirectIndex = prompt('Choose a redirect (1, 2, or 3):');
  
    switch (redirectIndex) {
      case '1':
        window.location.href = 'html5_features.html';
        break;
      case '2':
        window.location.href = 'flexbox_pseudo_classes.html';
        break;
      case '3':
        window.location.href = 'bootstrap_carousel.html';
        break;
      default:
        alert('Invalid redirect choice.');
    }
  }
  