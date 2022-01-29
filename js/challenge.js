const counter = document.getElementById("counter")
let number = counter.textContent

// setInterval(addSecond, 1000) 



let minusButton = document.getElementById("minus")
  minusButton.addEventListener("click", minusSecond)

let plusButton = document.getElementById("plus")
  plusButton.addEventListener("click", addSecond)

let heartButton = document.getElementById("heart")

let pauseButton = document.getElementById("pause")

function addSecond(){
  counter.textContent = number ++
}

function minusSecond(){
  counter.textContent = number --
}