// initialize the select element
$(document).ready(function () {
  $('select').formSelect();
});
// initialize side nav
$(document).ready(function () {
  $('.sidenav').sidenav();
});
// validation
$(document).ready(() => {
  $('form').validate({
    rules: {
      first_name: {
        required: true,
        maxlength: 100,
        minlength: 5,
      },
    },
  });
});

// submit form
function submitForm(event) {
  event.preventDefault();
  const infos = event.target.elements;
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'container z-depth-3';
  resultsDiv.style.padding = '2% 2%';
  for (let i = 0; i < infos.length; i += 1) {
    if (infos[i].name !== '') {
      if (infos[i].type === 'radio') {
        if (infos[i].checked) {
          let resultChild = document.createElement('P');
          resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
          resultsDiv.appendChild(resultChild);
        }
      } else {
        let resultChild = document.createElement('P');
        resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
        resultsDiv.appendChild(resultChild);
      }
    }
  }
  document.body.appendChild(resultsDiv);
}
// clear form
function clearForm() {
  location.reload();
}

window.onload = () => {
  document.getElementById('form').addEventListener('submit', submitForm);
  document.getElementById('clear-button').addEventListener('click', clearForm);
};
