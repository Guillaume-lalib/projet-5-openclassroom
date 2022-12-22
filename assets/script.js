const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const left = document.getElementById("left");
const right = document.getElementById("right");
const img = document.querySelector("#banner > img")
const text = document.querySelector("#banner > p")
console.log(img);
console.log(text);



left.addEventListener('click', function() {
	// img.innerHTML = 
	console.log("okleft")
})


right.addEventListener('click', function() {
	console.log("okright")
})


// console.log(left);
// console.log(right);


const bullet = document.querySelector(".dots");
numbers = slides.length;

for (let i = 0; i < numbers; i++) {
	div=document.createElement("div")
	div.className="dot"
	bullet.appendChild(div)
}



for(var i = 0; i < numbers; i++){
	console.log(slides[i])
};

console.log(slides);



