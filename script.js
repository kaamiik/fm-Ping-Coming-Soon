"use strict";

const formEl = document.querySelector(".launch-soon__form");
const emailEl = document.querySelector(".form__input");
const errorEl = document.querySelector(".form__error-message");
const buttonEl = document.querySelector(".form__button");
const mainEL = document.querySelector(".main__preview");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function changeStyle() {
  errorEl.classList.remove("error-mesagge-hidden");
  emailEl.style.borderColor = "var(--secondary-light-red)";
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailEl.value === "") {
    errorEl.textContent = "Whoops! It looks like you forgot to add your email";
    changeStyle();
    // ------------------------------
  } else if (!validateEmail(emailEl.value)) {
    errorEl.textContent = "Please provide a valid email address";
    changeStyle();

    // ------------------------------
  } else {
    e.target.submit();
    errorEl.classList.add("error-mesagge-hidden");
  }
});
