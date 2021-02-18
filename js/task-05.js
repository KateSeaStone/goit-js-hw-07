/* Напиши скрипт который, при наборе текста в инпуте
input#name-input (событие input), подставляет его текущее значение
 в span#name-output. Если инпут пустой, 
 в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>*/

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

//inputRef.addEventListener('input', editText);

// function editText(event) {
//   outputRef.textContent = event.target.value;
//   if (outputRef.textContent === '') {
//     outputRef.textContent = 'незнакомец'
//   }
// }

inputRef.addEventListener('input', ((event) => {

  if (event.target.value === '') {
    spanRef.textContent = 'незнакомец'
  } else {
    spanRef.textContent = event.target.value;
  }
})
)


