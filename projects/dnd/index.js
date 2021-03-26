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

document.addEventListener('mousemove', (e) => {
  document.addEventListener('mousemove', (e) => {
    const div = document.querySelector('.draggable-div');
    div.onmousedown = function (e) {
      const coords = getCoords(div);
      const shiftX = e.pageX - coords.left;
      const shiftY = e.pageY - coords.top;

      document.body.appendChild(div);
      moveAt(e);

      function moveAt(e) {
        div.style.left = e.pageX - shiftX + 'px';
        div.style.top = e.pageY - shiftY + 'px';
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      div.onmouseup = function () {
        document.onmousemove = null;
        div.onmouseup = null;
      };
    };

    div.ondragstart = function () {
      return false;
    };

    function getCoords(elem) {
      const box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    }
  });
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

  const posx = (Math.random() * (document.body.clientWidth - divsize)).toFixed();
  const posy = (Math.random() * (document.body.clientHeight - divsize)).toFixed();

  div.style.left = posx + 'px';
  div.style.top = posy + 'px';

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
