const counter = document.getElementById("counter")
let number = parseInt(counter.textContent, 10)


let timer = setInterval(addSecond, 1000)


let minusButton = document.getElementById("minus")
  minusButton.addEventListener("click", minusSecond)

let plusButton = document.getElementById("plus")
  plusButton.addEventListener("click", addSecond)

let heartButton = document.getElementById("heart")
  heartButton.addEventListener("click", likeNumber)
  

let pauseButton = document.getElementById("pause")
  pauseButton.addEventListener("click", handlePause)

let form = document.querySelector("form");
  form.addEventListener('submit', handleComments);
  
function addSecond(){
  number ++
  counter.textContent = number
}

function minusSecond(){
  number --
  counter.textContent = number 
}
let heartClickCount = '0'

let likesObject = {}

function likeNumber(){
  console.log(likesObject)
  likesObject[number] = likesObject[number] || 0
  likesObject[number]+=1
  let list = document.getElementById("list");
  let p = document.createElement("p");
  console.log(p)
  list.appendChild(p)
  p.textContent = `${likesObject[number]}likes for ${number}.`
    
}

function handlePause(){
  // debugger
  if (pauseButton.textContent === " pause ")
  //pausing
  {pauseButton.textContent = "resume";
  stopTimer();
  disableButtons();
}
  ///resuming 
    else {pauseButton.textContent = " pause ";
    restartTimer();
    enableButtons()
    
  }
}

function restartTimer(){
  timer = setInterval(addSecond, 1000)
}

function stopTimer(){
  clearInterval(timer)
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

function handleComments(event){
  event.preventDefault()
  let newComment = event.target.elements[0].value
  let list = document.getElementById("list")
  let p = document.createElement('p');
  list.appendChild(p)
  p.textContent = newComment 
  form.reset()
  
}