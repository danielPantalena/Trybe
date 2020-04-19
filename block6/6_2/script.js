// initialize the select element
$(document).ready(function () {
  $('select').formSelect();
});

// submit form
function submitForm(event) {
  event.preventDefault();
  const infos = event.target.elements;
  const resultsDiv = document.createElement('div');
  resultsDiv.className = "container z-depth-3"
  for (let i = 0; i < infos.length; i += 1) {
    if (infos[i].id !== '') {
      let resultChild = document.createElement('p');
      resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
      resultsDiv.appendChild(resultChild);
    }
  }
  document.body.appendChild(resultsDiv);
}

window.onload = () => {
  document.getElementById('form').addEventListener('submit', submitForm);
};
