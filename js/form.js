document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    if (validateForm()) {
      form.submit();
      displaySuccessMessage();
    }
  });
  function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      isValid = false;
      alert("Please enter your name.");
    }
    const addressInput = document.getElementById("add");
    if (addressInput.value.trim() === "") {
      isValid = false;
      alert("Please enter your address.");
    }
    return isValid;
  }

  function displaySuccessMessage() {
    alert("Form submitted successfully!");
}
});
