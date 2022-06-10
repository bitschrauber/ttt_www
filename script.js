/**
 * 
 */
let player = 1

 function btnClicked(id) {
	//let iid = 'square'+id
	console.log(id);
	document.getElementById(id).innerHTML = 'X';
	player=player==1?player=0:player=1;
	document.getElementById("player").innerHTML="Player"+player;
}