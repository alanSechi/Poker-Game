//this function takes the first 5 cards of the deck and shows it on the screen
function renderDeck(deck)
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < 5; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].type;

		value.innerHTML = deck[i].worth;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

export {renderDeck}