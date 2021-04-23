let colorWheel1 = document.getElementById("colorWheel1")
let colorWheel2 = document.getElementById("colorWheel2")
let colorWheel3 = document.getElementById("colorWheel3")

colorWheel1.addEventListener("input", changeToCustomColor)
colorWheel2.addEventListener("input", changeToCustomColor)
colorWheel3.addEventListener("input", changeToCustomColor)

function changeToPatriotic() {
  square.style.backgroundImage = `linear-gradient(red, white, blue)`

}

function changeToRainbow() {
  square.style.backgroundImage = `linear-gradient(red, orange, yellow, green, blue, indigo, violet)`
}

function changeToCustomColor() {
  square.style.backgroundImage = `linear-gradient(${colorWheel1.value}, ${colorWheel2.value}, ${colorWheel3.value})`
}