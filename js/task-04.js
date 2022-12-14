const valueElm = document.querySelector("#value");
const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);
const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);

let counterValue = 0;

const btnIncrementAct = () => {
  counterValue += 1;

  valueElm.textContent = counterValue;
};

const btnDecrementAct = () => {
  counterValue -= 1;
  valueElm.textContent = counterValue;
};

btnIncrement.addEventListener("click", btnIncrementAct);
btnDecrement.addEventListener("click", btnDecrementAct);

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
// его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
