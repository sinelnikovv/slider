
let parent = document.querySelector("#slider")
let childs = parent.querySelectorAll("img");
let left = document.querySelector("#left")
let right = document.querySelector("#right")

let i = 0

setInterval(function () {
  for (let child of childs) {
  if (child.classList.contains("active")) {
    child.classList.remove("active");
  }
}
  if (i < childs.length-1) {    
    i++;
  } else {
    i = 0    
  }
  childs[i].classList.add("active")
}  , 1000)

left.addEventListener('click', function () {
  for (let child of childs) {
  if (child.classList.contains("active")) {
    child.classList.remove("active");
  }
  }
  
  if (i > 0) {
    i--;    
    
  } else {
      i = childs.length-1;    
    }
    childs[i].classList.add("active") 
  }
);

right.addEventListener('click', function () {
  for (let child of childs) {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
    }
  }
  if (i < childs.length - 1) {
    i++;
  }
  
  else {
    i = 0;
   
  }
  childs[i].classList.add("active")
}
  
);