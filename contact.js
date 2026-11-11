const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent = "Thank you! Your message has been received.";

        contactForm.reset();

    });

}