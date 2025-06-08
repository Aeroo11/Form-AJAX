<?php
// Add a small delay to simulate server processing time (optional)
sleep(1);

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";
    
    // Validate data (simple validation)
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // Output result
    if (empty($errors)) {
        // Success case
        echo "Thank you for contacting us, $name. We will get back to you shortly.";
        
        // Here you would typically save the form data to a database
        // or send an email notification, etc.
    } else {
        // Error case
        echo "Please correct the following errors:<br>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }
} else {
    // Not a POST request
    echo "Invalid request method";
}
?>
