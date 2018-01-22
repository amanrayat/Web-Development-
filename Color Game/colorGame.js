var numOfSquare = 6;
var easybt=document.querySelector("#easy");
var hardbt=document.querySelector("#hard");
var color= colorGenerater(numOfSquare);
var required = randomColor();
var square = document.querySelectorAll(".square");
var reqColor = document.querySelector("#reqColor1");
var mess = document.querySelector("#messege");
var h1 = document.querySelector("h1");
var reset =document.querySelector("#reset");

reqColor.textContent = required;
hardbt.classList.add("selected");

// Hard Button listener

hardbt.addEventListener("click",function(){
	hardbt.classList.add ("selected");
	easybt.classList.remove ("selected");
	h1.style.background = "#03BE9B";
	numOfSquare =6;
	color=colorGenerater(numOfSquare);
	required = randomColor();
	reqColor.textContent = required;
	for (var i =0; i < square.length ; i++) {
	 
	 	square[i].style.background = color[i];
	 	square[i].style.display = "block";
	 }	
})

// Easy Button listener

easybt.addEventListener("click",function(){

	easybt.classList.add ("selected");
	hardbt.classList.remove ("selected");
	h1.style.background = "#03BE9B";
	numOfSquare =3;
	color=colorGenerater(numOfSquare);
	required = randomColor();
	reqColor.textContent = required;
	for (var i =0; i < square.length ; i++) {
	 if(color[i]){
	 	square[i].style.background = color[i];
	 }else {
	 	square[i].style.display = "none";
	 }
	}
})

// Reset Button Listener

reset.addEventListener("click", function(){
	color= colorGenerater(numOfSquare);
	required = randomColor();
	h1.style.background = "#03BE9B";
	reset.textContent = "Change Color";
	mess.textContent = "";

	for (var i = 0; i < square.length ; i++){
	square[i].style.background=color[i];
	}
	reqColor1.textContent = required;
})

for (var i = 0; i < square.length ; i++){
	square[i].style.background=color[i];
	square[i].addEventListener("click" , function(){
		if(this.style.background===required){
			mess.textContent = "Correct";
			h1.style.backgroundColor=required;
			for (var i = 0; i < square.length ; i++){
				square[i].style.background = required;
			}
			reset.textContent = "Play Again?";
		} else{
			this.style.background="#f5f5dc";
			mess.textContent = "Try Again.!!";
		}
	})
}



function randomColor(){
	var ind= Math.floor(Math.random() * numOfSquare);
	return color[ind];
}

// Make an array of 3 or 6 colors 

function colorGenerater(numOfSquare){
	var color=[];

	for(var i=0;i< numOfSquare ;i++ ){
		color.push(rand());
	}
	return color;
}

// Generate a random color

function rand(){
	var r = Math.floor(Math.random() *256);

	var g = Math.floor(Math.random() *256);

	var b = Math.floor(Math.random() *256);

	return ("rgb" + "("+ r + ", " + g + ", " + b + ")");
}

// setInterval(function(){
// 	h1.style.background = randomColor();
// }, 1000);