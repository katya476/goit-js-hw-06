// textContent - текст в розмітці
// currentTarget - визначає подію

const inputEL = document.getElementById(`name-input`);
const outputEl = document.getElementById(`name-output`);


inputEL.addEventListener(`input`, textELInput);
 function textELInput (event){
    outputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0 ){
        outputEl.textContent = "Anonymous!";
    }
 };
 