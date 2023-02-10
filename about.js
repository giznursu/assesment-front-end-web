console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form is submitted');
}


let form = document.querySelector('#contact');
let pic = document.querySelector('img')

const compliment = evt => {
	evt.preventDefault();
	alert("You are beautiful!")

}

form.addEventListener('submit', handleSubmit);
pic.addEventListener("mouseover",compliment)