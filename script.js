document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');
    
    // Add submit event listener to form
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission (page refresh)
        event.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create data object formatted for JSONPlaceholder API
        const postData = {
            title: name,
            body: message,
            userId: 1, // Static userId since we don't have authentication
            email: email // Additional field, not standard for JSONPlaceholder
        };
        
        // Create AJAX request
        const xhr = new XMLHttpRequest();
        
        // Configure the request
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
        
        // Set request headers for JSON
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        
        // Set up callback for when the request completes
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Request was successful
                const response = JSON.parse(xhr.responseText);
                
                // Display success message with the response data
                responseDiv.innerHTML = `
                    <h3>Success!</h3>
                    <p>Your post was created with ID: ${response.id}</p>
                    <p><strong>Title:</strong> ${response.title}</p>
                    <p><strong>Body:</strong> ${response.body}</p>
                `;
                responseDiv.className = 'response-success';
                
                // Clear form fields
                contactForm.reset();
                
                // Hide the success message after 5 seconds
                setTimeout(function() {
                    responseDiv.className = 'response-hidden';
                }, 5000);
            } else {
                // Request failed
                responseDiv.innerHTML = 'An error occurred during form submission.';
                responseDiv.className = 'response-error';
            }
        };
        
        // Handle network errors
        xhr.onerror = function() {
            responseDiv.innerHTML = 'Network error occurred during form submission.';
            responseDiv.className = 'response-error';
        };
        
        // Send the request with JSON data
        xhr.send(JSON.stringify(postData));
    });
});
