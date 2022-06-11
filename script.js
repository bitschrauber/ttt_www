/**
 * bitschrauber 2022 #row1 > button:nth-child(1)
 */
//console.log("Entered script");
 
btns = document.querySelectorAll(".square");
//console.log(btns.length);

btns.forEach ((btn)=>{
	btn.addEventListener ("click", btnClicked)
	//console.log('added')
})

let player = 1

function isMarkedField(e){
	//console.log(e)
	return ((e=="X")||(e=="O"));
}

function setMark(player){
	return (player==1?'X':'O');
}

function togglePlayer(player){
	return (player==1?2:1);
}

function announcePlayer(player){
	document.getElementById("player").innerHTML="Player "+player;
}

function btnClicked(){	
	if (isMarkedField(this.innerHTML)){return;}
	this.innerHTML=setMark(player);
	player=togglePlayer(player);
	announcePlayer(player);
}
