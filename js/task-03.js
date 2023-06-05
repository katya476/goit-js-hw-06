const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const ulEl = document.querySelector(`.gallery`);
   console.log(ulEl);

const imgEl = 
images
.map((image) => `<li><img src="${image.url}", alt="${image.alt}", hight="400", width="370"><li>`)
.join("");

ulEl.insertAdjacentHTML("beforeend", imgEl);

console.log(ulEl);

ulEl.style.display = 'flex';
ulEl.style.gap = '8px';
ulEl.style.width = '10px';
