// Selectors
const arrows = document.querySelectorAll(".fa-arrow-down");

// Functions

function animatedForm() {
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      nextSlide(parent, nextForm);

      // Validation

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      }
      if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

animatedForm();

//Validation Functions

function checkError(color) {
  document.body.style.backgroundColor = color;
}

function validateUser(user) {
  if (user.value.length < 5) {
    checkError("rgb(189, 87, 87)");
    return false;
  } else {
    checkError("rgb(87, 189, 130)");
    return true;
  }
}

function validateEmail(email) {
  if (
    email.value.indexOf("@gmail.com") > -1 ||
    email.value.indexOf("@yahoo.com") > -1
  ) {
    checkError("rgb(87, 189, 130)");
    return true;
  } else {
    checkError("rgb(189, 87, 87)");
    email.value = "";
  }
}
