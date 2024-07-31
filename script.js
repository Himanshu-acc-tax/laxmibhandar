document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // Here, you could add functionality to actually send the form data to a server
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});
