// function final(elementos, cor){
//      document.querySelector(elementos).style.backgroundColor = cor;
// }

// final('#month', 'yellow');

// let mes = document.getElementById('month');
// mes.innerText = 'Caique';
// console.log(mes);

let month = document.getElementById('month');
console.log(month);



const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
});

const fridayDays = [6, 13, 20, 27];
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function() {
  const fridays = document.getElementsByClassName('friday-day');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== "SEXTOU!") {
      fridays[index].innerHTML = "SEXTOU!";
    } else {
      fridays[index].innerHTML = fridayDays[index];
    }
  }
});

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
  let days = weekDays[index];

  let dayListItem = document.createElement('li');
  dayListItem.innerHTML = days;

  weekDaysList.appendChild(dayListItem);
};

const daysList = [];
for (index = 1; index < 31; index += 1) {
  daysList.push(index);
};

const getDaysList = document.querySelector('#days');

for (let index = 0; index < daysList.length; index += 1) {
  const day = daysList[index];
  const dayItem = document.createElement('li');
  if (day === 2 | day === 15) {
    dayItem.className = 'holiday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 6 | day === 13 | day === 27) {
    dayItem.className = 'friday-day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 20) {
    dayItem.className = 'holiday friday-day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else {
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
};

function alteraCor(elementos, cor){
    let selectItens = document.querySelectorAll(elementos);

// Percorrer essa lista de elementos "selectItens" e mudar a cor de cada uma
    for (let index = 0; index < selectItens.length; index += 1) {
        selectItens[index].style.backgroundColor = cor;
    }
}
// só chamar a função 
alteraCor()


