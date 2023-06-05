//  const valueEl = document.getElementById(`value`);
//  const plusEL = document.querySelector(`button [data-action = "decrement"]`);
//  const minusEl = document.querySelector(`button [data-action = "increment"]`);

//  const valueCounter ={
//     value: 0 ,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     }
// };



// minusEl.addEventListener("click", fnMinus);
// function fnMinus(event) {
//     valueCounter.decrement();
//     valueElem.textContent = valueCounter.value;
// }
// plusEL.addEventListener("click", fnPlus);
// function fnPlus(event) {
//     valueCounter.increment();
//     valueElem.textContent = valueCounter.value;
// }

const valueElem = document.getElementById("value");
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}

btnPlus.addEventListener("click", fnPlus);
function fnPlus(event) {
    counterValue.increment();
    valueElem.textContent = counterValue.value;
}

btnMinus.addEventListener("click", fnMinus);
function fnMinus(event) {
    counterValue.decrement();
    valueElem.textContent = counterValue.value;
}