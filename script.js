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

function isEmptyField(e){
	console.log(e)
	return !((e=="X")||(e=="O"));
}

function setMark(player){
	return (player==1?'X':'O');
}

function togglePlayer(player){
	player=(player==1?player=2:player=1);
}

function announcePlayer(player){
	document.getElementById("player").innerHTML="Player "+player;
}

function btnClicked(){	
	if (isEmptyField(this.innerHTML)){
		this.innerHTML=setMark(player);
		togglePlayer(player);
		announcePlayer(player)
	} else {return}
}
