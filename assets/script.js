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
	if(Index < slides.length -1){
		Index++
	} else {
		Index = 0
	}
}
right.addEventListener('click', nextSlide)

function previousSlide (){
	if(Index > 0){
		Index--
	} else {
		Index = slides.length -1
	}
}
left.addEventListener('click', previousSlide)


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


dotOne.classList.add('dot_selected')

function slider(){
if (Index === 1) {
		dotOne.classList.add('dot_selected')
		img.setAttribute("src", slides[0].image)
		text.innerHTML = slides[0].tagLine
	}else{
		dotOne.classList.remove('dot_selected')
	}
	if (Index === 2) {
		img.setAttribute("src", slides[1].image)
		text.innerHTML = slides[1].tagLine
		dotTwo.classList.add('dot_selected')
	}else{
		dotTwo.classList.remove('dot_selected')
	}
	if (Index === 3) {
		img.setAttribute("src", slides[2].image)
		text.innerHTML = slides[2].tagLine
		dotThree.classList.add('dot_selected')
	}else{
		dotThree.classList.remove('dot_selected')
	}
	if (Index === 0) {
		img.setAttribute("src", slides[3].image)
		text.innerHTML = slides[3].tagLine
		dotFour.classList.add('dot_selected')
	}else{
		dotFour.classList.remove('dot_selected')
	}
}

right.addEventListener('click', slider)
left.addEventListener('click', slider)

