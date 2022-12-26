const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.getElementById("left");
const right = document.getElementById("right");
const img = document.querySelector("#banner > img")
const text = document.querySelector("#banner > p")

let Index = 1

function nextSlide (){
	img.setAttribute("src", slides[Index].image)
	text.innerHTML = slides[Index].tagLine
	if(Index < slides.length -1){
		Index++
	} else {
		Index = 0
	}
}
right.addEventListener('click', nextSlide)

function previousSlide (){
	img.setAttribute("src", slides[Index].image)
	text.innerHTML = slides[Index].tagLine
	if(Index > 0){
		Index--
	} else {
		Index = slides.length -1
	}
}
left.addEventListener('click', previousSlide)

// right.addEventListener('click', function() {
// 	img.setAttribute("src", slides[Index].image)
// 	text.innerHTML = slides[Index].tagLine
// 	Index++;
// 	if (Index > 3) {Index = 0}
// })

// left.addEventListener('click', function() {
// 	img.setAttribute("src", slides[Index].image)
// 	text.innerHTML = slides[Index].tagLine
// 	Index--;
// 	if (Index < 0) {Index = 3}
// })

const bullet = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	div=document.createElement("div")
	div.className="dot"
	bullet.appendChild(div)
}

const dotOne = document.querySelector(".dots div:nth-child(1)")
const dotTwo = document.querySelector(".dots div:nth-child(2)")
const dotThree = document.querySelector(".dots div:nth-child(3)")
const dotFour = document.querySelector(".dots div:nth-child(4)")

const addDots = document.querySelectorAll('.dot')

function dotSelect(){
addDots[Index].classList.add('dot_selected')
return
}

console.log(addDots[2]);

console.log(slides);
console.log(Index);
console.log(dotOne);
console.log(dotTwo);
console.log(dotThree);
console.log(dotFour);
console.log(slides[1]);