import { save, load, remove } from './helpers/storage';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';

const throttle = require('lodash.throttle');
const throttled = throttle(saveForm, 500, { trailing: false });

form.addEventListener('input', throttled);
form.addEventListener('submit', handleSubmit);

loadForm();

// відправка форми
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  remove(KEY);
  event.currentTarget.reset();
}

// збереження полів форми
function saveForm(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  save(KEY, { email: email.value, message: message.value });
}

// відтворення полів форми
function loadForm() {
  const input = document.querySelector('input');
  const textarea = document.querySelector('textarea');
  const { email, message } = load(KEY);

  input.value = email;
  textarea.value = message;
}
