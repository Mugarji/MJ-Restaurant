// script.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple alert to show form data (You could send this data to a server)
    alert(`Thank you, ${name}! We will get back to you shortly at ${email}.`);

    // Reset the form after submission
    document.getElementById('contact-form').reset();
});
