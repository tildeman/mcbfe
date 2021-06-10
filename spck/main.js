const pellet_array=document.getElementsByClassName("pellet");
const diag_combinations=[[21,15,9,3],[28,22,16,10],[22,16,10,4],[35,29,23,17],[29,23,17,11],[23,17,11,5],
						[36,30,24,18],[30,24,18,12],[24,18,12,6],[37,31,25,19],[31,25,19,13],[38,32,26,20],
						[3,11,19,27],[2,10,18,26],[10,18,26,34],[1,9,17,25],[9,17,25,33],[17,25,33,41],
						[0,8,16,24],[8,16,24,32],[16,24,32,40],[7,15,23,31],[15,23,31,39],[14,22,30,38]]
var current_player=0;
var game_active=1;
function findpelletbycoords(row,col){
	return pellet_array[row*7+col];
}
function update_status(){
	document.getElementById("curplayer").innerHTML="Current player: P"+(current_player+1)+"<img src=\"n"+(current_player+1)+".png\" style=\"height: 40px;\">"
}
function broadcast_win(m){
	document.getElementById("win").innerHTML=m+" wins!";
	game_active=0;
}
function droppellet(col){
	if (game_active){
		for (let i=5;i>=0;i--){
			if (findpelletbycoords(i,col).src.includes("n0.png")){
				findpelletbycoords(i,col).src="n"+(current_player+1)+".png";
				current_player=(current_player+1)%2;
				update_status();
				let w=check_4();
				if (w) broadcast_win(w);
				return;
			}
		}
	}
}
function check_4(){
	// check rows first
	for (let i=0;i<6;i++){
		for (let j=3;j<7;j++){
			if (findpelletbycoords(i,j-3).src==findpelletbycoords(i,j-2).src&&
				findpelletbycoords(i,j-2).src==findpelletbycoords(i,j-1).src&&
				findpelletbycoords(i,j-1).src==findpelletbycoords(i,j).src){
				if (findpelletbycoords(i,j).src.includes("n1.png")) return "P1";
				if (findpelletbycoords(i,j).src.includes("n2.png")) return "P2";
			}
		}
	}
	// check columns second
	for (let i=0;i<7;i++){
		for (let j=3;j<6;j++){
			if (findpelletbycoords(j-3,i).src==findpelletbycoords(j-2,i).src&&
				findpelletbycoords(j-2,i).src==findpelletbycoords(j-1,i).src&&
				findpelletbycoords(j-1,i).src==findpelletbycoords(j,i).src){
				if (findpelletbycoords(j,i).src.includes("n1.png")) return "P1";
				if (findpelletbycoords(j,i).src.includes("n2.png")) return "P2";
			}
		}
	}
	// check diagonals third
	for (let i=0;i<diag_combinations.length;i++){
		if (pellet_array[diag_combinations[i][0]].src==pellet_array[diag_combinations[i][1]].src&&
			pellet_array[diag_combinations[i][1]].src==pellet_array[diag_combinations[i][2]].src&&
			pellet_array[diag_combinations[i][2]].src==pellet_array[diag_combinations[i][3]].src){
			if (pellet_array[diag_combinations[i][0]].src.includes("n1.png")) return "P1";
			if (pellet_array[diag_combinations[i][0]].src.includes("n2.png")) return "P2";
		}
	}
	return;
}
function restart(){
	for (let i=0;i<42;i++) pellet_array[i].src="n0.png";
	game_active=1;
	document.getElementById("win").innerHTML="Connect 4";
	current_player=0;
	update_status();
}