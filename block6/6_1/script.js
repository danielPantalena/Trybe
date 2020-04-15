
// Regular expression for email
const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

// // trying regExpEmail
// const email1 = 'daniel@gmail.com';
// const email2 = 'email  @  .x';
// console.log(regExpEmail.test(email1));
// console.log(regExpEmail.test(email1));

// validating email
const fieldSet = document.getElementById('fieldset');
const emailInput = document.getElementById('email');
const brTagAfterEmail = document.getElementById('after-email');
const validationEmailMessage = document.createElement('span');

function validateEmail() {
    emailInput.addEventListener('input', () => {
        if (regExpEmail.test(emailInput.value))
            validationEmailMessage.innerHTML = 'It\'s a valid email :)';
        else if (emailInput.value === '')
            validationEmailMessage.innerHTML = null;
        else
            validationEmailMessage.innerHTML = 'It\'s <strong>NOT</strong> a valid email :/';
        fieldSet.insertBefore(validationEmailMessage, brTagAfterEmail);
    });
}
// validating data
const regExpDate = /^\d{1,2}\/\d{1,2}\/\d{4}/;
// // trying regExpDate
// const date1 = '1/1/1111';
// const date2 = '26/12/1989';
// const date3 = '22/2';
// console.log(regExpDate.test(date1));
// console.log(regExpDate.test(date2));
// console.log(regExpDate.test(date3));

const fieldSet2 = document.getElementById('fieldset2');
const dataInput = document.getElementById('data');
const brAfterData = document.getElementById('after-data');
const validationDateMessage = document.createElement('span');

function validateDate() {
    dataInput.addEventListener('input', () => {
        console.log(regExpDate.test(dataInput.value));
        if (regExpDate.test(dataInput.value))
            validationDateMessage.innerHTML = `It's a valid date :)`;
        else if (dataInput.value === '')
            validationDateMessage.innerHTML = null;
        else 
            validationDateMessage.innerHTML = `It's <strong>NOT</strong> a valid date :/`;
    });
    fieldSet2.insertBefore(validationDateMessage, brAfterData);
}

window.onload = () => {
    validateEmail();
    validateDate();
};