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
console.log(img);
console.log(text);

var imageIndex = 1
var textIndex = 1

right.addEventListener('click', function() {
	img.setAttribute("src", slides[imageIndex].image)
	imageIndex++;
	if (imageIndex > 3) {imageIndex = 0}

	text.innerHTML = slides[textIndex].tagLine
	textIndex++;
	if (textIndex > 3) {textIndex = 0}

})
left.addEventListener('click', function() {
	img.setAttribute("src", slides[imageIndex].image)
	imageIndex--;
	if (imageIndex > -1) {imageIndex = 4}

	text.innerHTML = slides[textIndex].tagLine
	textIndex--;
	if (textIndex > -1) {textIndex = 4}
	console.log(text);

})

const bullet = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	div=document.createElement("div")
	div.className="dot"
	bullet.appendChild(div)
}

console.log(addDots);


