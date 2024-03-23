// Dummy reviews data (replace with actual data)
const reviews = [
    { user: 'Jane ', text: 'Great service! Highly recommended.' },
    { user: 'Austin', text: 'The pet sitter was fantastic. Will definitely use again.' },
    { user: 'Jasmine', text: 'My pet loved it! 5 stars.' }
  ];
  
  // Function to render reviews
  function renderReviews() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.classList.add('review');
      div.innerHTML = `<span class="user">${review.user}:</span> ${review.text}`;
      messagesContainer.appendChild(div);
    });
  
    // Scroll to bottom of messages container
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  // Function to send message
  function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
  
    if (messageText !== '') {
      // For demonstration purposes, let's just add the message to the reviews array
      // In a real application, you would typically send the message to a server
      reviews.push({ user: 'You', text: messageText });
      renderReviews();
      messageInput.value = '';
    }
  }
  
  // Initial render
  renderReviews();
 