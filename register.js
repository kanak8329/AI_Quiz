document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
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
    
    // Handle register form submission
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Check if passwords match
        if (password !== confirmPassword) {
            return showAlert('Passwords do not match');
        }
        
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            
            // Save token and user info in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Show success message
            showAlert('Registration successful! Redirecting...', false);
            
            // Redirect to quiz page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
            
        } catch (error) {
            console.error('Registration error:', error);
            showAlert(error.message || 'Registration failed. Please try again.');
        }
    });
});