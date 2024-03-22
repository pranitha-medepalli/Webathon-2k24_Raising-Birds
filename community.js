// Function to handle form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const species = document.getElementById('species').value.trim();
    // Get other form values as needed
  
    // Perform categorization based on responses
    const category = categorizeResponses(species);
    
    // Redirect to community page with category information
    window.location.href = `community.html?category=${encodeURIComponent(category)}`;
  });
  
  // Function to categorize responses
  function categorizeResponses(species) {
    // Dummy categorization (replace with your logic)
    if (species.toLowerCase() === 'dog') {
      return 'Dog Owners';
    } else if (species.toLowerCase() === 'cat') {
      return 'Cat Owners';
    } else {
      return 'Other Pet Owners';
    }
  }
  