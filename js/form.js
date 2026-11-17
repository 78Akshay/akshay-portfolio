
export default function form() {
  const contactForm = document.querySelector(".contactForm");
  const responseBox = document.querySelector(".response");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      await emailjs.sendForm(
        "service_p3ppey5",
        "template_j2k62sd",
        contactForm
      );

      
      responseBox.textContent = "✅ Message sent successfully!";
      responseBox.style.display = "block";
      responseBox.style.visibility = "visible";
      responseBox.style.opacity = "1";
      responseBox.style.color = "green";
      responseBox.style.fontSize = "18px";
      responseBox.style.fontWeight = "bold";
      responseBox.style.textAlign = "center";
      responseBox.style.marginTop = "20px";
      responseBox.style.padding = "12px";

      contactForm.reset();


    } catch (error) {
      console.error("EmailJS Error Status:", error.status);
      console.error("EmailJS Error Message:", error.text);

      responseBox.textContent =
        "Message not sent. Please try again.";
      responseBox.style.color = "red";

    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });
}

