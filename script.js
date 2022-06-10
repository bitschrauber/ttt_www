/**
 * bitschrauber 2022 #row1 > button:nth-child(1)
 */
//console.log("Entered script");
 
btns = document.querySelectorAll("button");
//console.log(btns.length);

btns.forEach ((btn)=>{
	btn.addEventListener ("click", btnClicked)
	//console.log('added')
})

let player = 1

 function btnClicked() {
	this.innerHTML=player==1?'X':'O';
	player=player==1?player=2:player=1;
	document.getElementById("player").innerHTML="Player "+player;
}