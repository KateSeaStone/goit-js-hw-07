/*Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('img-list');

// const imagesRef = images
//   .forEach((image) => galleryRef.insertAdjacentHTML('afterbegin', `<li><img src="${image.url}" alt="${image.alt}" width="300" height="260" /></li>`));
// console.log(galleryRef);

// console.log(imagesRef);

// imagesRef.classList.add('img-list-item');

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('img-list');

// const imagesRef = images
//   .map(image => {
//     const liRef = document.createElement('li');
//     liRef.classList.add('img-list-item');
//     liRef.insertAdjacentHTML('afterbegin', `<img src="${image.url}" alt="${image.alt}" width="300" height="260" />`);
//     console.log(liRef);
//     galleryRef.insertAdjacentElement('afterbegin', liRef);
//     return liRef;
//   })
// console.log(galleryRef);


const imagesRef = images
  .reduce((acc, image) => {
    const el = `<li class="img-list-item">
    <img src="${image.url}" alt="${image.alt}" width="300" height="260" /></li>`;
    acc += el;

    return acc;
  }, '')

galleryRef.insertAdjacentHTML('afterbegin', imagesRef);
console.log(galleryRef);







