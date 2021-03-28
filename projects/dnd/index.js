/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
function random(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let currentDiv;
let shiftX = 0;
let shiftY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDiv) {
    currentDiv.style.left = e.clientX - shiftX + 'px';
    currentDiv.style.top = e.clientY - shiftY + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  div.classList.add('draggable-div');
  const divsize = (Math.random() * 100 + 50).toFixed();
  const color =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

  div.style.width = divsize + 'px';
  div.style.height = divsize + 'px';
  div.style.backgroundColor = color;

  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.left = random(0, window.innerWidth) + 'px';

  div.addEventListener('mousedown', (e) => {
    currentDiv = div;
    shiftX = e.offsetX;
    shiftY = e.offsetY;
  });

  div.addEventListener('mouseup', (e) => {
    currentDiv = false;
  });
  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
