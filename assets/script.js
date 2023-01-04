const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const left = document.getElementById("left");
const right = document.getElementById("right");
const img = document.querySelector("#banner > img");
const text = document.querySelector("#banner > p");
const bullet = document.querySelector(".dots");
let Index = 0;

for (let i = 0; i < slides.length; i++) {
  div = document.createElement("div");
  div.className = "dot";
  bullet.appendChild(div);
}


function slider() {
	img.setAttribute("src", slides[Index].image);
	text.innerHTML = slides[Index].tagLine;
}

left.addEventListener("click", () => {
	Index -= 1;
	if (Index < 0) Index = 3;
	slider();
	console.log(Index);
});

right.addEventListener("click", () => {
	Index += 1;
	if (Index > 3) Index = 0;
	slider();
	console.log(Index);
});


const dot = document.querySelectorAll(".dot");
const dotSelected = Array.prototype.slice.call(dot);

// const dotOne = document.querySelector(".dots div:nth-child(1)")
// const dotTwo = document.querySelector(".dots div:nth-child(2)")
// const dotThree = document.querySelector(".dots div:nth-child(3)")
// const dotFour = document.querySelector(".dots div:nth-child(4)")
dotOne.classList.add('dot_selected')

console.log(dotSelected);