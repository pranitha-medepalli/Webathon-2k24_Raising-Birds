document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Here you can add your logic to send the form data (e.g., using AJAX)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // For demonstration, let's reset the form
    this.reset();
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Simulate sending message (you can replace this with actual AJAX call)
    setTimeout(function() {
      document.getElementById('popupMessage').style.display = 'block'; // Show popup message
      // Hide popup message after 3 seconds
      setTimeout(function() {
        document.getElementById('popupMessage').style.display = 'none';
      }, 3000);
    }, 1000);
  });
