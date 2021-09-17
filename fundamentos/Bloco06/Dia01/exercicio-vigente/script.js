let states = document.getElementById('state');
const buttomClear = document.querySelector('.clear-button');
const buttomSubmit = document.querySelector('.submit-button');
const input = document.querySelectorAll('input');
const options = document.querySelectorAll('option');
const divDataContent = document.querySelector('#data-content');
const textArea = document.querySelector('textarea');
const select = document.querySelector('select');

function createStateOptions() {
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
    
  }
} createStateOptions();


function validateData() {
  let name = document.querySelector('[name = nome]');
  let email = document.querySelector('[name = email]');
  let cpf = document.querySelector('[name = cpf]');
  let endereco = document.querySelector('[name = endereco]');
  let cidade = document.querySelector('[name = cidade]');
  let curriculo = document.querySelector('[name = resumo]');
  let cargo = document.querySelector('[name = cargo ]');
  let descricao = document.querySelector('[name = descricao ]');
  let data = document.querySelector('[name = data]');
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  if (name.value.length > 40 || name.value.length === 0) {
    alert('Campo nome inválido!');
  } else if (email.value.length >50 || email.value.length === 0){
    alert('Campo de e-mail imválido!');
  } else if (cpf.value.length > 11 || cpf.value.length === 0 ) {
    alert('Campo do cpf inválido!');
  } else if(endereco.value.length > 200 || endereco.value.length === 0){
    alert('Campo do endereço inválido!')
  } else if(cidade.value.length > 28 || cidade.value.length === 0){
    alert('Campo da cidade inválido!');
  } else if (curriculo.value.length === 0 || curriculo.value.length > 28) {
    alert('Campo do estado inválido');
  } else if(cargo.value.length > 40 || cargo.value.length === 0){
    alert('Campo do cargo inválido');
  } else if(descricao.value.length > 500 || descricao.value.length === 0){
    alert('Campo da descrição inválido!');
  } else {
    alert('Cadastro realizado!');
  }
}

function addData() {
  buttomSubmit.addEventListener('click', (event) =>{
    event.preventDefault();
    validateData();
    for (let i = 0; i < input.length; i += 1) {
      const newDiv = document.createElement('div');
      let value = input[i].value;
      newDiv.innerText = value;
      divDataContent.appendChild(newDiv);
      input[i].value='';
    }
  });
} addData();
 
function clearForm() {
  buttomClear.addEventListener('click', () => {
    for (let i = 0; i < input.length; i += 1) {
      input[i].value= '';
      // remove o checked do raio button 
      input[5].remove('checked');
      
    }
    textArea.value='';
  });
} clearForm();

