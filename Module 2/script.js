// Class handling form validation
class RegistrationValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.nameInput = document.getElementById("name");
    this.mobileInput = document.getElementById("mobile");

    if (!this.form || !this.nameInput || !this.mobileInput) {
      console.error("Form or input elements not found.");
      return;
    }

    this.form.addEventListener("submit", (e) => this.validateForm(e));
  }

  // Display alert and focus
  alertAndFocus(message, element) {
    alert(message);
    element.focus();
    console.clear();
    console.log("Validation failed:", message);
  }

  // Main validation logic
  validateForm(event) {
    event.preventDefault();

    const name = this.nameInput.value.trim();
    const mobile = this.mobileInput.value.trim();

    const nameRegex = /^[A-Za-z]{3,6}$/;
    const mobileRegex = /^\d{10}$/;

    if (!name) {
      this.alertAndFocus("Name field is required.", this.nameInput);
      return;
    }

    if (!mobile) {
      this.alertAndFocus("Mobile field is required.", this.mobileInput);
      return;
    }

    if (!nameRegex.test(name)) {
      this.alertAndFocus(
        "Name must be 3 to 6 alphabets only (no numbers or symbols).",
        this.nameInput
      );
      return;
    }

    if (!mobileRegex.test(mobile)) {
      this.alertAndFocus(
        "Mobile number must be exactly 10 digits (no alphabets/symbols).",
        this.mobileInput
      );
      return;
    }

    // Success
    console.clear();
    console.log("Form submitted successfully!");
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    alert("Registration successful!");

    this.form.reset();
  }
}

// Instantiate validator when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  new RegistrationValidator("registrationForm");
});
