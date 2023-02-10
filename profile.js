let pic = document.querySelector('img')

const secret = evt => {
	evt.preventDefault();
	alert("Ice Cream and Jelly Beans are my favorite")

}
pic.addEventListener("mouseover",secret)



let favcolorparam = document.querySelector("#color")
let favplaceparam = document.querySelector("#place")
let favritualparam = document.querySelector("#ritual")

const favcolor = evt => {
    evt.preventDefault()
    alert("My favorite color is blue!")
}
const favplace = evt => {
    evt.preventDefault()
    alert("My favorite place is HooPoe coffee shop!")
}
const favritual = evt => {
    evt.preventDefault()
    alert("My favorite ritual is my skincare!")
}
form.addEventListener("click",goals)
favcolorparam.addEventListener("click",favcolor)
favplaceparam.addEventListener("click",favplace)
favritualparam.addEventListener("click",favritual)

