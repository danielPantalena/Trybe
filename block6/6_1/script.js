const emailRegEx = /@/;

const email = document.getElementById('email');

const emailValidation = emailRegEx.test(email.value);

email.addEventListener('input', () => {
    console.log(emailValidation);
})


