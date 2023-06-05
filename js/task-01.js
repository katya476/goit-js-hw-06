


const liItem = document.querySelectorAll(".item");
console.log("Number of categories:", liItem.length);

for (const elem of liItem) {
    console.log("Category:", elem.firstElementChild.textContent);
    console.log("Elements:", elem.lastElementChild.childElementCount);
}

// console.log("Category:",liItem.forEach(firstEl).firstElementChild.textContent );
   
