document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('message').value.trim();

    let hasError = false;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        hasError = true;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        hasError = true;
    }

    // Validate phone number
    if (phoneNumber === '') {
        document.getElementById('phoneError').textContent = 'Phone Number is required.';
        hasError = true;
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        hasError = true;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
        hasError = true;
    }

    // If there are no errors, show success message
    if (!hasError) {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please fix the errors above.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}