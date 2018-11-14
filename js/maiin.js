(() => {
	// simple Js file
	console.log('fired! or loaded... whatever');

	// this is a single line comment
	var choice = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weappon");
	var trigger = document.querySelector("#play");
	var status  = document.querySelector(".winlose");

	function playgame() {
		// make the computer choose a random weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		var player_choice = player.value;

		// check for a tie first
		if (computer.toLowercase() === player_choices.toLowercase()) {
			// it's a tie
			status.textContent = "Tie! You live to shoot another day.";
		}

		else if ( player_choice.toLowercase() ==="rock" ) {
			if (computer.toLowercase() === "scissors") {
				// win
				status.textContent = `Win! ${player_choice} beats ${computer}.`;
			} else {
				// lose
				status.textContent = `Lose! ${computer} beats ${player_choice}.`;
			}
		}


})();