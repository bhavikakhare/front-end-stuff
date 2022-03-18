
	var colors,correct;
	var l=6;

	var h1 = document.querySelector("h1");
	var display = document.querySelector("#display");
	var squares = document.querySelectorAll(".square");
	var newgame = document.querySelector("#reset");
	var message = document.querySelector("#message");
	var e = document.querySelector("#e");
	var h = document.querySelector("#h");

function initialise() {
	reset();

	newgame.addEventListener("click",reset);

	e.addEventListener("click",function(){
		l=3;
		reset();
		e.classList.add("selected");
		h.classList.remove("selected");
	});
	h.addEventListener("click",function(){
		l=6;
		reset();
		e.classList.remove("selected");
		h.classList.add("selected");
		for(var i=0;i<squares.length;i++) {
		squares[i].style.display="block";
		}
	});

	for(var i=0;i<squares.length;i++) {
		squares[i].addEventListener("click",function(){
			var clicked = this.style.backgroundColor;
			if(correct===clicked) {
				for(var j=0;j<squares.length;j++) {
					squares[j].style.backgroundColor = correct;
				}
				message.textContent = "Correct!";
				h1.style.backgroundColor = correct;
				newgame.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}

}; initialise();


function reset(){
	GenerateColors(l);
	correct = pick();;
	display.textContent = edited(correct);
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) squares[i].style.backgroundColor = colors[i];
		else squares[i].style.display="none";
	}		
	h1.style.backgroundColor = "rgb(136, 16, 206)";
	newgame.textContent = "New Game";
	message.textContent = "";
}

function GenerateColors(n) {
	colors=[];
	for(var i=0;i<n;i++) {
		colors[i] = generate();
	}
}

function generate() {
	return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}

function pick() {
	var o = Math.floor(Math.random()*colors.length);
	return colors[o];
}

function edited(v) {
	return v.replace(/ /g,'').replace(/,/g,':');
}


