console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen"
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

var cards = ["queen","queen","king","king"]

// if (cardTwo === cardFour) {
// 	alert ("You found a match!");

// } else {
// 	alert ("Sorry, try again.");
// }

var cardsInPlay = []



var board = document.getElementById('game-board');




function createBoard() {

	for (var i = 0; i <cards.length; i++) {
	 
		var cardElement = document.createElement('div')

		cardElement.className = 'card';

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);

	}

}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, please try again");
	}

}

function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/kingclubs.png'>"; 
	} else {
		this.innerHTML = "<img src='images/queendiamonds.png'>"; 
	}

	if (cardsInPlay.length === 2) {

	isMatch(cardsInPlay);
	cardsInPlay = [];

	}
}
createBoard();
