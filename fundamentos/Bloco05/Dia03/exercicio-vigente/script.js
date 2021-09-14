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
    dayListItem.innerHTML = days; const textFridays = document.querySelectorAll('.friday');
  
    const fridays = [4,11,18,25];
    for (let i = 0; i < textFridays.length; i+=1) {
      let indexFriday = textFridays[i];
      for (let x = 0; x < fridays.length; x+=1) {
        let indexDayOfFridays = fridays[x];
        
      }
      
    }
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
  const holidayAndFriday = [25];
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
      let holidayIndex = holidays[iterator];

      if(holidayIndex=== days){
      dayList.className='day holiday'
      }
      // for in para pegar os dias de sexta e comparar com os dias (days)
      for (const i in fridays){
      let fridayIndex = fridays[i];
      if(fridayIndex === days){
      dayList.className='day friday';
        } 
      }
      // for in para pegar o dia de sexta que também é dia de feriado e comparar com os dias (days)
      for (const i in holidayAndFriday) {
        if(holidayAndFriday[i] === days){
          dayList.className='day holiday friday';
        }
      }
    }
  };
};createDays();
//--------------------------------------------------------------
function btnHolidays() {

  const fatherButton = document.querySelector('.buttons-container');
  elementButton = document.createElement('button');
  elementButton.id='btn-holiday';
  textButton = document.createTextNode('Feriados');
  
  fatherButton.appendChild(elementButton).appendChild(textButton);
}btnHolidays();
//--------------------------------------------------------

function eventButtonHolidays(){
  const classHoliday = document.querySelectorAll('.holiday');
  for (let index = 0; index < classHoliday.length; index+=1) {
    let classHolidayIndex = classHoliday[index];
    classHolidayIndex.style.backgroundColor='rgb(59, 192, 99)'; 
     }

}
function disableColor(){
  const classHoliday = document.querySelectorAll('.holiday');
  for (let index = 0; index < classHoliday.length; index+=1) {
    let classHolidayIndex = classHoliday[index];
    classHolidayIndex.style.backgroundColor='rgb(238,238,238)'; 
     }

}

function fridayBtn() {
  const fatherButton2 = document.querySelector('.buttons-container');
  elementButton2 = document.createElement('button');
  elementButton2.id='btn-friday';
  textButton = document.createTextNode('Sexta-Feira');
  
  fatherButton2.appendChild(elementButton2).appendChild(textButton);
}fridayBtn();

function eventButtonFriday(){
  const textFridays = document.querySelectorAll('.friday');
  
  for (let i = 0; i < textFridays.length; i+=1) {
    let indexFriday = textFridays[i]
    indexFriday.innerText='SEXTOU!! :d';
  }
}

function disableEventButtonFriday(){
  const textFridays = document.querySelectorAll('.friday');
  
  const fridays = [4,11,18,25];
  for (let i = 0; i < textFridays.length; i+=1) {

    let indexFriday = textFridays[i];
    indexFriday.innerHTML=fridays[i];
    
  }
}

function zoomEffect (event){
  event.target.style.fontSize="40px";
}

function disableZoomEffect(event) {
  event.target.style.fontSize='20px';
}

function addTask() {
  const classFather = document.querySelector('.my-tasks');
  const tagSpan = document.createElement('span');
  
  classFather.appendChild(tagSpan).innerText='Pegar pesado nos estudos';
  
  }addTask();
  
  function addNewTask() {
    const inputButton = document.querySelector('#btn-add');
    const listTask = document.querySelector('.task-list');
    const textInput = document.querySelector('#task-input');
  
    inputButton.addEventListener('click', function(){
      if(textInput.value.length > 0){
        let newLi = document.createElement('li');
        newLi.innerHTML = textInput.value;
        
        listTask.appendChild(newLi);
        textInput.value='';
      } else {
        alert('Digite uma frase!');
      }
    })
    textInput.addEventListener('keyup', function(event) {
      if (event.keyCode === 13 && textInput.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = textInput.value;
  
        listTask.appendChild(newLi);
        textInput.value = '';
      }
    });
  };
  addNewTask();

function colorLegend() {
  const classFather = document.querySelector('.my-tasks');
  const element = document.createElement('div');
  element.className='task';
  const color = 'red';

  element.style.backgroundColor=color;
  classFather.appendChild(element);

}colorLegend();

function taskSelected(event) {

  event.target.className='task selected';
  
}
function taskUnselected(event) {
  
  event.target.classList.remove('selected');
  
}

function paint(event) {
  // para pintar eu capturo o background color da classe com selected
  
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.color=color;

}



function events() {
  elementButton.addEventListener('mousedown', eventButtonHolidays);
  elementButton.addEventListener('mouseup', disableColor);
  elementButton2.addEventListener('mousedown', eventButtonFriday);
  elementButton2.addEventListener('mouseup', disableEventButtonFriday);
  days.addEventListener('mouseover', zoomEffect);
  days.addEventListener('mouseout', disableZoomEffect);
  
  const legend = document.querySelector('.task');
  const dayPainter = document.querySelectorAll('.day');
  const button = document.querySelector('#btn-add');
  

  legend.addEventListener('click', taskSelected);
  legend.addEventListener('dblclick', taskUnselected);
  
  for (let i = 0; i < dayPainter.length; i+=1) {
    dayPainter[i].addEventListener('click', paint);
  }
  


}
events();


