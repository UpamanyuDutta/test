document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in both fields.");
        event.preventDefault(); // Prevent form submission
    } else {
        // Only redirect if both fields are filled
        window.location.href = 'p2.html';
    }
});