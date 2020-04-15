// Creating options

// Validating email
const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

const fieldSet = document.getElementById('fieldset');
const emailInput = document.getElementById('email');
const brTagAfterEmail = document.getElementById('after-email');
const validationEmailMessage = document.createElement('span');

function validateEmail() {
  emailInput.addEventListener('input', () => {
    const validMessage = "It's a valid email :)";
    const notValidMessage = "It's <strong>NOT</strong> a valid email :/";
    if (regExpEmail.test(emailInput.value)) {
      validationEmailMessage.innerHTML = validMessage;
    } else if (emailInput.value === '') validationEmailMessage.innerHTML = null;
    else {
      validationEmailMessage.innerHTML = notValidMessage;
    }
    fieldSet.insertBefore(validationEmailMessage, brTagAfterEmail);
  });
}
// validating data
const regExpDate = /^\d{1,2}\/\d{1,2}\/\d{4}/;

const fieldSet2 = document.getElementById('fieldset2');
const dataInput = document.getElementById('data');
const brAfterData = document.getElementById('after-data');
const validationDateMessage = document.createElement('span');

function validateDate() {
  const validMessage = "It's a valid date :)";
  const notValidMessage = "It's <strong>NOT</strong> a valid date :/";
  dataInput.addEventListener('input', () => {
    if (regExpDate.test(dataInput.value)) {
      validationDateMessage.innerHTML = validMessage;
    } else if (dataInput.value === '') validationDateMessage.innerHTML = null;
    else {
      validationDateMessage.innerHTML = notValidMessage;
    }
  });
  fieldSet2.insertBefore(validationDateMessage, brAfterData);
}

window.onload = () => {
  validateEmail();
  validateDate();
};
