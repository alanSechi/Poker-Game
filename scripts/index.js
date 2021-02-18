//import of all the modules
import { deck } from "./deck.js";
import { randomize } from "./randomizeDeck.js";
import { renderDeck } from "./renderDeck.js";
import { checkPair } from "./checkPair.js";
import { checkTris } from "./checkTris.js";
import { checkPoker } from "./checkPoker.js";
import { checkConsecutive } from "./checkConsecutive.js";
import { sameSuit } from "./checkSuits.js";

//defining the global variables
let btn = document.getElementById("mix");
let hand = document.getElementById("hand");

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
  alert(
    "WARNING! Each card have points, 2 = 2... till 10 = 10, then J = 11, Q = 12, K = 13, A = 14"
  );
  shuffle();
  var shuffledDeck = deck.slice(0, 5);
  checkPoints(shuffledDeck);
}

window.onload = load;

//function to calculate the hands
function checkPoints(shuffledDeck) {
  //array of points and suits
  let point = [];
  let suit = [];
  let card1 = shuffledDeck[0].points;
  let suit1 = shuffledDeck[0].type;

  let card2 = shuffledDeck[1].points;
  let suit2 = shuffledDeck[1].type;

  let card3 = shuffledDeck[2].points;
  let suit3 = shuffledDeck[2].type;

  let card4 = shuffledDeck[3].points;
  let suit4 = shuffledDeck[3].type;

  let card5 = shuffledDeck[4].points;
  let suit5 = shuffledDeck[4].type;

  point.push(card1, card2, card3, card4, card5);
  suit.push(suit1, suit2, suit3, suit4, suit5);

  //this gives to me the card with the highest point
  var max = Math.max(point[0], point[1], point[2], point[3], point[4]);

  //this function if there is a double pair and a tris returns the write "full"
  function checkFull() {
    var full = [];
    if (checkTris(point).length >= 1 && checkPair(point).length == 2) {
      full.push("full");
    }
    return full;
  }

  //this checks if the cards are consecutive and have the same suits
  function checkFlush() {
    var flush = [];
    if (
      point[0] === 10 &&
      checkConsecutive(point) === true &&
      sameSuit(suit) === true
    ) {
      flush.push("royal flush");
    }

    if (checkConsecutive(point) === true && sameSuit(suit) === true) {
      flush.push("straight flush");
    }

    if (checkConsecutive(point) === true && sameSuit(suit) === false) {
      flush.push("straight");
    }

    if (checkConsecutive(point) === false && sameSuit(suit) === true) {
      flush.push("flush");
    }
    return flush;
  }

  //this group of if's displays the value of the hands
  if (checkPair(point).length == 1) {
    hand.innerHTML = "PAIR";
  }
  if (checkPair(point).length == 2) {
    hand.innerHTML = "TWO PAIR";
  }
  if (checkTris(point).length == 1) {
    hand.innerHTML = "THREE OF A KIND";
  }
  if (checkPoker(point).length == 1) {
    hand.innerHTML = "FOUR OF A KIND";
  }
  if (checkFull() == "full") {
    hand.innerHTML = "FULL HOUSE";
  }
  if (checkFlush() == "flush") {
    hand.innerHTML = "FLUSH";
  }
  if (checkFlush() == "straight") {
    hand.innerHTML = "STRAIGHT";
  }
  if (checkFlush() == "straight flush") {
    hand.innerHTML = "STRAIGHT FLUSH";
  }
  if (checkFlush() == "royal flush") {
    hand.innerHTML = "ROYAL FLUSH";
  }
  if (
    checkPair(point).length == 0 &&
    checkTris(point).length == 0 &&
    checkPoker(point).length == 0 &&
    checkFull().length == 0 &&
    checkFlush().length == 0
  ) {
    hand.innerHTML = "HIGH CARD " + max;
  }
}
