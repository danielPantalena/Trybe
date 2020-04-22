// Creating options
const states = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Destrito Federal',
  ES: 'Espirito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  SC: 'Santa Catrina',
  SP: 'São Paulo',
};
function createStatesOptions() {
  const parentSelect = document.getElementById('state');
  for (let i = 0; i < Object.keys(states).length; i += 1) {
    const stateOption = document.createElement('option');
    stateOption.value = Object.keys(states)[i];
    stateOption.innerHTML = states[Object.keys(states)[i]];
    parentSelect.appendChild(stateOption);
  }
}

// Validating email
const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

const fieldSet = document.getElementById('fieldset');
const emailInput = document.getElementById('email');
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
    fieldSet.insertBefore(validationEmailMessage, emailInput);
  });
}
// validating data
const regExpDate = /^\d{1,2}\/\d{1,2}\/\d{4}/;

const fieldSet2 = document.getElementById('fieldset2');
const dataInput = document.getElementById('data');
const validationDateMessage = document.createElement('span');

function validateDate() {
  const validMessage = "It's a valid date :)";
  const notValidMessage = "It's <strong>NOT</strong> a valid date";
  dataInput.addEventListener('input', () => {
    if (regExpDate.test(dataInput.value)) {
      const numbers = dataInput.value.split('/');
      if (Number(numbers[0]) > 31) {
        validationDateMessage.innerHTML = `${notValidMessage}. DAY is GREATER THAN 31`;
        return;
      }
      if (Number(numbers[1]) > 12) {
        validationDateMessage.innerHTML = `${notValidMessage}. MONTH is GREATER THAN 12`;
        return;
      }
      if (Number(numbers[2]) < 0) {
        validationDateMessage.innerHTML = `${notValidMessage}. YEAR is LOWER THAN 0`;
        return;
      }
      validationDateMessage.innerHTML = validMessage;
    } else if (dataInput.value === '') {
      validationDateMessage.innerHTML = null;
    } else {
      validationDateMessage.innerHTML = `${notValidMessage}. The format must be dd/mm/yyyy`;
    }
  });
  fieldSet2.insertBefore(validationDateMessage, dataInput);
}
// submit button
const submitButton = document.getElementById('submit');

// all data inputed
function allData() {
  const allDataDiv = document.createElement('div');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const title = document.createElement('span');
    const text = document.createElement('span');
    title.innerHTML = `${inputs[i].name}: `;
    text.innerHTML = `${inputs[i].value} <br><br>`;
    allDataDiv.appendChild(title);
    allDataDiv.appendChild(text);
  }
  document.body.appendChild(allDataDiv);
}

window.onload = () => {
  createStatesOptions();
  validateEmail();
  validateDate();
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    allData();
  });
};
