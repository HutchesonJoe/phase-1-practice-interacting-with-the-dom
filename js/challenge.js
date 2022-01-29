const counter = document.getElementById("counter")
let number = parseInt(counter.textContent, 10)


let counterInt = setInterval(addSecond, 1000) 


let minusButton = document.getElementById("minus")
  minusButton.addEventListener("click", minusSecond)

let plusButton = document.getElementById("plus")
  plusButton.addEventListener("click", addSecond)

let heartButton = document.getElementById("heart")
  heartButton.addEventListener("click", likeNumber)
  

let pauseButton = document.getElementById("pause")
  pauseButton.addEventListener("click", handlePause)


function addSecond(){
  number ++
  counter.textContent = number
}

function minusSecond(){
  number --
  counter.textContent = number 
}
let heartClickCount = '0'

function likeNumber(){
  let list = document.getElementById("list");
  let p = document.createElement("p");
  p.setAttribute('id', `${number}`)
  console.log(p)
  let numberCount = document.getElementById(`${number}`)
  console.log(numberCount)
  // list.appendChild(numberCount)
  heartClickCount++
  numberCount.textContent = `${heartClickCount}likes for ${number}.`
}

function handlePause(){
  if (pauseButton.textContent === " pause ")
  //pausing
  {pauseButton.textContent = "resume";
  stopTimer();
  disableButtons();
}
  ///resuming 
    else {pauseButton.textContent = " pause ";
    startTimer();
    enableButtons()
    
  }
}

function stopTimer(){
  clearInterval(counterInt)
}

function startTimer(){
  setInterval(addSecond, 1000)
}

function disableButtons(){
  plusButton.removeEventListener("click", addSecond);
  minusButton.removeEventListener("click", minusSecond);
  heartButton.removeEventListener("click", likeNumber);
}

function enableButtons(){
  plusButton.addEventListener("click", addSecond);
  minusButton.addEventListener("click", minusSecond);
  heartButton.addEventListener("click", likeNumber);
}