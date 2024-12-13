function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields!');
    }

    return false; // Prevent form submission to demonstrate functionality
}
