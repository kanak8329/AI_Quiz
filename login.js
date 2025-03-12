document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const alertDiv = document.getElementById('alert');
    
    // API URL - replace with your actual backend URL in production
    const API_URL = 'http://localhost:5000/api';
    
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
        // Redirect to quiz page
        window.location.href = 'index.html';
    }
    
    // Show alert message
    function showAlert(message, isError = true) {
        alertDiv.textContent = message;
        alertDiv.style.display = 'block';
        
        if (isError) {
            alertDiv.className = 'alert alert-error';
        } else {
            alertDiv.className = 'alert alert-success';
        }
        
        // Hide alert after 5 seconds
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 5000);
    }
    
    // Handle login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            
            // Save token and user info in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Show success message
            showAlert('Login successful! Redirecting...', false);
            
            // Redirect to quiz page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
            
        } catch (error) {
            console.error('Login error:', error);
            showAlert(error.message || 'Login failed. Please try again.');
        }
    });
});