//import of all the modules
import { getDeck } from "./deck.js";
import { randomize } from "./randomizeDeck.js";
import { renderDeck } from "./renderDeck.js";
import { countElements } from "./countElements.js";
import { checkConsecutive } from "./checkConsecutive.js";
import { sameSuit } from "./checkSuits.js";

//defining the global variables
let btn = document.getElementById("mix");
let hand = document.getElementById("hand");
let deck = getDeck();
//button click event
btn.onclick = function () {
  shuffle();
  var shuffledDeck = deck.slice(0, 5);
  checkPoints(shuffledDeck);
};

//this mixs the deck and makes it appear on the screen
function shuffle() {
  randomize(deck);
  renderDeck(deck);
}

//functions that are triggered when the page load
function load() {
  shuffle();
  var shuffledDeck = deck.slice(0, 5);
  checkPoints(shuffledDeck);
}

window.onload = load;

//function to calculate the hands
function checkPoints(shuffledDeck) {
  //array of points and suits
  const point = [
    shuffledDeck[0].points,
    shuffledDeck[1].points,
    shuffledDeck[2].points,
    shuffledDeck[3].points,
    shuffledDeck[4].points,
  ];
  const sortedPoints = point.sort();
  const suit = [
    shuffledDeck[0].type,
    shuffledDeck[1].type,
    shuffledDeck[2].type,
    shuffledDeck[3].type,
    shuffledDeck[4].type,
  ];
  const noDupl = countElements(point);

  //this gives to me the card with the highest point
  const max = Math.max(...sortedPoints);

  //this enter inside if all the cards are not equal
  if (noDupl.length === 5) {
    if (
      sortedPoints[0] === 10 &&
      checkConsecutive(sortedPoints) === true &&
      sameSuit(suit) == true
    ) {
      hand.innerHTML = "ROYAL FLUSH";
    } else if (
      checkConsecutive(sortedPoints) === true &&
      sameSuit(suit) == true
    ) {
      hand.innerHTML = "STRAIGHT FLUSH";
    } else if (
      checkConsecutive(sortedPoints) === true &&
      sameSuit(suit) === false
    ) {
      hand.innerHTML = "STRAIGHT";
    } else if (
      checkConsecutive(sortedPoints) === false &&
      sameSuit(suit) === true
    ) {
      hand.innerHTML = "FLUSH";
    } else {
      if (max == 11) {
        hand.innerHTML = "HIGH CARD: J";
      } else if (max == 12) {
        hand.innerHTML = "HIGH CARD: Q";
      } else if (max == 13) {
        hand.innerHTML = "HIGH CARD: K";
      } else if (max == 14) {
        hand.innerHTML = "HIGH CARD: A";
      } else {
        hand.innerHTML = "HIGH CARD: " + max;
      }
    }
  } else {
    for (var i = 0; i <= noDupl.length; i++) {
      if (noDupl.length === 4) {
        hand.innerHTML = "PAIR";
      } else if (noDupl.length == 3 && noDupl[i] == 2) {
        hand.innerHTML = "DOUBLE PAIR";
      } else if (noDupl.length == 3 && noDupl[i] == 3) {
        hand.innerHTML = "TRIS";
      } else if (noDupl.length == 2 && noDupl[i] == 2) {
        hand.innerHTML = "FULL";
      } else if (noDupl.length == 2 && noDupl[i] == 4) {
        hand.innerHTML = "POKER";
      }
    }
  }
}
