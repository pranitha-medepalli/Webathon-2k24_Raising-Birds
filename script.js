// Customer login form submission
document.getElementById('customerLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform authentication logic here (not implemented in this example)
    console.log('Customer login submitted:');
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Redirect to customer dashboard page (replace 'customer_dashboard.html' with actual customer dashboard page)
    window.location.href = 'customer_dashboard.html';
  });
  
  // Pet sitter login form submission
  document.getElementById('petSitterLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform authentication logic here (not implemented in this example)
    console.log('Pet sitter login submitted:');
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Redirect to pet sitter dashboard page (replace 'pet_sitter_dashboard.html' with actual pet sitter dashboard page)
    window.location.href = 'pet_sitter_dashboard.html';
  });
  