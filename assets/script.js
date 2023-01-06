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

const dot = document.querySelectorAll(".dot");

function slider() {
  img.setAttribute("src", slides[Index].image);
  text.innerHTML = slides[Index].tagLine;
}

function selectedDot(IndexDot) {
    dot.forEach(el => {
        el.classList.remove("dot_selected");
    });
    document.querySelectorAll(".dot")[IndexDot].classList.add("dot_selected");
    Index = IndexDot;
}
selectedDot(0);


left.addEventListener("click", () => {
  Index --;
  if (Index < 0) Index = 3;

  selectedDot(Index);
  slider();

});

right.addEventListener("click", () => {
  Index ++;
  if (Index > 3) Index = 0;

  selectedDot(Index);
  slider();
  
});

// // pierrepremel@gmail.com

