function createDaysOfTheWeek() {
  //constante para armazenar um array de string com os dias
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  // const para armazenar a classe(ul) que será pai 
  const weekDaysList = document.querySelector('.week-days');
  //laço de repetição para pecorrer o array
  for (let index = 0; index < weekDays.length; index += 1) {
    // const day para armazenar os dias separados
    const days = weekDays[index];
    // criar a TAG li
    const dayListItem = document.createElement('li');
    // acrescentar na const com a TAG li os dias
    dayListItem.innerHTML = days;
    // a classe pai, receberá como filha os dias em forma de list item
    weekDaysList.appendChild(dayListItem);
  };
};
// isso tem que ta aqui mas n sei pq
createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays(){
  //const para armazenar os dias
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  //armazenar os feriados
  const holidays = [24,25,31];
  const fridays = [4,11,18,25];
  // const para armazenar a futura classe pai de li
  const fatherDayList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index+=1) {
    const days = dezDaysList[index];
    const dayList = document.createElement('li');
    dayList.className='day';
    dayList.innerHTML = days;
    fatherDayList.appendChild(dayList);
    // for in para pegar os dias de feriado e comparar com os dias(days)
    for (const iterator in holidays) {
      if(holidays[iterator]=== days){
        
        dayList.className='day holiday'
      }
    }
    // for in para pegar os dias de sexta e comparar com os dias (days)
    for (const i in fridays){
      if(fridays[i] === days){
        dayList.className='day friday';
      }
    }
  };
};
createDays();

function btnHolidays() {

  const fatherButton = document.querySelector('.buttons-container');
  elementButton = document.createElement('button');
  elementButton.id='btn-holiday';
  textButton = document.createTextNode('Feriados');
  
  fatherButton.appendChild(elementButton).appendChild(textButton);
}btnHolidays()