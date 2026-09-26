document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        contactForm.reset();
      }
    });
  }
});