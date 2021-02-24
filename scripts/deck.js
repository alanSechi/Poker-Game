
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var points = ["14", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var deck = new Array();

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {worth: cards[x], type: suits[i], points: points[x]};
			deck.push(card);
		}
	}

	return deck;
}

export { getDeck };
