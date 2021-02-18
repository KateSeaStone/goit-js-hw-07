/* Напиши скрипт, который для каждого элемента массива 
ingredients создаст отдельный li, после чего вставит все 
li за одну операцию в список ul.ingredients. Для создания DOM-узлов 
используй document.createElement().*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');
const listItems = ingredients
  .map((ingr) => {

    const item = document.createElement('li');
    //item.innerText = ingr;
    item.textContent = ingr;

    return item;
  })
  .forEach((li) => ul.appendChild(li))

console.log(ul);





