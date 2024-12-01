// dashboard.js

// This function will be used to fetch the username from the JWT token (assuming it's stored in localStorage)
function getUserData() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/login';  // Redirect to login if no token is found
    }
  
    const decoded = jwt.decode(token); // Decode the JWT token
    return decoded ? decoded.username : null;
  }
  
  // Display the username in the top banner
  function displayUserGreeting() {
    const username = getUserData();
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Hi ${username}`;
  }
  
  // Handle logout
  function handleLogout() {
    localStorage.removeItem('authToken');  // Remove the JWT token from localStorage
    window.location.href = '/login';  // Redirect to the login page
  }
  
  // Initialize the page
  window.onload = () => {
    displayUserGreeting();
  
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', handleLogout);
  };
  