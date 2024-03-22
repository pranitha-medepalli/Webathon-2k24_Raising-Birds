// Function to retrieve category from URL parameters

function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
  }
  
  // Function to display categorized responses
  function displayCategorizedResponses() {
    const category = getCategoryFromURL();
    const communityContent = document.getElementById('communityContent');
  
    if (category) {
      let content = '';
  
      // Generate content based on category
      switch (category) {
        case 'Dog Owners':
          content = '<p>Welcome to the Dog Owners community!</p>';
          break;
        case 'Cat Owners':
          content = '<p>Welcome to the Cat Owners community!</p>';
          break;
        case 'Other Pet Owners':
          content = '<p>Welcome to the Other Pet Owners community!</p>';
          break;
        default:
          content = '<p>No community found for this category.</p>';
          break;
      }
  
      communityContent.innerHTML = content;
    } else {
      communityContent.innerHTML = '<p>Category not found.</p>';
    }
  }
  
  // Call the function to display categorized responses when the community page loads
  displayCategorizedResponses();
  