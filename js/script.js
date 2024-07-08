document.getElementById('demoButton').addEventListener('click', function() {
    document.getElementById('demoResult').innerText = 'Running AI Demo...';
    setTimeout(function() {
        document.getElementById('demoResult').innerText = 'AI Demo Completed: Prediction is Positive.';
    }, 2000); // Simulate AI processing time
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    document.getElementById('contactForm').reset();
});
