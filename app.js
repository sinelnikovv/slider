let texts = ['text1', 'text2', 'text3'];

let parent = document.querySelector("#slider")
let child = document.createElement("p");
let left = document.querySelector("#left")
let right = document.querySelector("#right")
parent.appendChild(child);

let i = 0 

child.textContent = texts[i]

left.addEventListener('click', function () {
  if (i > 0) {
     i--;	
  }
  else{
    i = texts.length-1;      
  }
  
  child.textContent = texts[i]
 
});
right.addEventListener('click', function() {
	if (i < texts.length-1) {
     i++;	
  }
  
  else {
    i = 0;
  }
  child.textContent = texts[i]
});