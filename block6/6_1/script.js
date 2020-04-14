const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

// trying regExpEmail
const email1 = 'daniel@gmail.com';
const email2 = 'email  @  .x';
console.log(regExpEmail.test(email1));
console.log(regExpEmail.test(email1));


// validating email
const fieldSet = document.getElementById('fieldset');
const emailInput = document.getElementById('email');
const brTagAfterEmail = document.getElementById('after-email');
const validation = document.createElement('span');
fieldSet.insertBefore(validation, brTagAfterEmail);

emailInput.addEventListener('input', () => {
    if (regExpEmail.test(emailInput.value)) {
        validation.innerHTML = '';
        validation.innerHTML = 'It\'s a valid email :)';
    } else {
        validation.innerHTML = 'It\'s not valid email :/';
    }
});