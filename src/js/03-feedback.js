import _ from 'lodash';
const form = document.querySelector('.feedback-form');
const STATIC_KEY = 'feedback-form-state';
form.addEventListener('input', _.throttle(inputToBase, 1000));
const button = form.lastElementChild;
let email1 = ' ';
let message1 = ' ';
function inputToBase(event) {
  if (event.target === form.email) {
    email1 = event.target.value;
  }
  if (event.target.name === 'message') {
    message1 = event.target.value;
  }
  const value = { email: email1, message: message1 };
  localStorage.setItem(STATIC_KEY, JSON.stringify(value));
}
window.addEventListener('DOMContentLoaded', addValue);
function addValue() {
  const information = JSON.parse(localStorage.getItem(STATIC_KEY));
  if (information) {
    form.email.value = information.email;
    form.message.value = information.message;
  }
}
button.addEventListener('click', submit);
function submit() {
  if (!form.email.value || !form.message.value) {
    alert('Будь ласка, заповніть усі поля форми');
  } else {
    const information = JSON.parse(localStorage.getItem(STATIC_KEY));
    console.log(information);
    localStorage.removeItem(STATIC_KEY);
    form.reset();
  }
}
