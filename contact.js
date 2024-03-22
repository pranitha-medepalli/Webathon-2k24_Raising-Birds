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
  