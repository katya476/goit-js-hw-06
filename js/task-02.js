const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];


const ulEl = document.getElementById(`ingredients`);

const liEl = ingredients.map( ingredient => {

    const itemEl = document.createElement(`li`);

    itemEl.textContent = ingredient;
    itemEl.classList.add(`item`);
    
    return itemEl ;
}
    );
    console.log(...liEl)