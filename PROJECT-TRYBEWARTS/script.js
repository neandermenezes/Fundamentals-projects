const loginEmail = document.getElementById('email');
const senha = document.getElementById('senha');
const loginCheck = document.getElementById('login');
const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const spanCurrent = document.getElementById('current');
const formCheck = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const newForm = document.getElementById('new-form');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('.family');
const rating = document.querySelectorAll('.rate');
const subjects = document.querySelectorAll('.to-learn');

window.onload = function disableOn() {
  submitBtn.disabled = true;
};

function validateLogin() {
  if (checkEmail.value === 'tryber@teste.com' && checkSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function submitButtonState() {
  if (checkBox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function currentCharacters() {
  const charCount = textArea.value.length;
  spanCurrent.innerHTML = 500 - charCount;
}

function newParagraph (text) {
  let newP = document.createElement('p');
  newP.innerHTML = text;
  newForm.appendChild(newP);
}

function printHouse() {
  return `Familia: ${house.value}`;
}

function printFamily() {
  const newFamily = document.createElement('p');
  const typeFamily = 'Família: ';
  let familia = '';
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      familia = family[i].value.toString();
    }
  }
  const displayFamily = typeFamily + familia;
  newFamily.innerHTML = displayFamily;
  newForm.appendChild(newFamily);
}

function printTech() {
  const newSubject = document.createElement('p');
  const selectedSubjects = 'Vontade de aprender: ';
  const space = ' ';
  let aux = '';

  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked === true) {
      aux = aux + space + subjects[i].value.toString();
    }
  }
  newSubject.innerHTML = selectedSubjects + aux;
  newForm.appendChild(newSubject);
}

function printRate() {
  const newRate = document.createElement('p');
  const typeRate = 'Avaliação: ';
  let nota = '';
  console.log(rating.length);
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checked === true) {
      nota = rating[i].value.toString();
    }
  }
  const displayRate = typeRate + nota;
  newRate.innerHTML = displayRate;
  newForm.appendChild(newRate);
}

function printObs() {
  const newObs = document.createElement('p');
  const typeObs = 'Observações: ';
  const obs = textArea.value.toString();
  const displayObs = typeObs + obs;
  newObs.innerHTML = displayObs;
  newForm.appendChild(newObs);
}

function printForm() {
  newParagraph(`Nome: ${firstName.value} ${lastName.value}`);
  newParagraph(`E-mail: ${email.value}`);
  newParagragh(printHouse = () => `House: ${house.value.toString()}`);
  newParagragh(printFamily());
  newParagragh(printTech());
  newParagragh(printRate());
  newParagragh(printObs());
}

function displayForms(e) {
  e.preventDefault();
  form.innerHTML = '';
  form.style.display = 'none';
}

formCheck.addEventListener('click', displayForms);
formCheck.addEventListener('click', printForm);
textArea.addEventListener('keyup', currentCharacters);
loginCheck.addEventListener('click', validateLogin);
checkBox.addEventListener('click', submitButtonState);
