/*Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает
кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает
1 параметр amount - число. Функция создает столько div,
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1"/>
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

const inputRef = document.querySelector('input[type=number]');
const createRef = document.querySelector('button[data-action="render"]');
const removeRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

console.dir(boxRef);

function createBoxes(amount) {
  /* Математический вариант от Влада
  // let offset = 30;
  // if (countBox.length) {
  //   let widthBox = countBox[countBox.length - 1].style.width;
  //   console.log(widthBox);
  //   widthBox = widthBox.replace('px', '');
  //   offset = Number(widthBox) + 10;
  // }*/

  //destroyBoxes();
  const countBox = boxRef.querySelectorAll('div');
  const offset = countBox.length;
  new Array(Number(amount))
    .fill(0)
    .forEach((element, i) => {
      const el = document.createElement('div');
      const x = 30 + (i + offset) * 10;
      el.style.height = x + 'px';
      el.style.width = x + 'px';
      el.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`;
      el.style.marginBottom = '3px'
      boxRef.appendChild(el);
    })

}

function destroyBoxes() {
  boxRef.textContent = '';
}

createRef.addEventListener('click', () => {
  const amount = inputRef.value;
  createBoxes(amount);
})

removeRef.addEventListener('click', () => {
  destroyBoxes();
  inputRef.value = 0;
})








