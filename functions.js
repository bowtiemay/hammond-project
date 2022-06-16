var total = 100; //lambda
var computerTotal = 100;
var nodes = 20; //size of graph - must be even
var currentPos = nodes / 2;
//var relativeFortune = total/computerTotal;
var testBool = false;
var relativeProb = 0;
var compBidNew = 0;

//var maxineBid;
var minaBid = 100;
var maxineWin = false;
console.log(maxineWin);

function submitBid() {
  if (total != 0) {
    var maxineBid = document.getElementById("maxineBid").value;
    console.log(maxineBid);
    withinTotal(maxineBid);

    // createGraph(nodes, currentPos);
  } else {
    console.log("you have no more money to bid. You lose");
  }
}

function withinTotal(maxineBid) { //checks if bid is in range
  //console.log("within total running");
  if (maxineBid > total || maxineBid < 0) {
    document.getElementById("argh").innerHTML = "Sorry you don't have that much money";
    console.log("the total is " + total);
  } else {
    
    computerMoves();
    winner();
  }
}

function winner() { //determines in maxine or mina won
  maxineBid = parseInt(document.getElementById("maxineBid").value);
  document.getElementById("argh").innerHTML = ""; //resets sorry line to nothing

  calculateWinner();

  total = total - maxineBid; //money left after bid
  console.log("the total " + total);
  document.getElementById("total").innerHTML = "Your Money Left: $" + total;
  if (maxineWin == true) { //maxine wins
    currentPos -= 1; //moves position on graph to right
    createGraph(nodes, currentPos);
    if (total == 0) {
      youLose();
    }

  } else {
    maxineWin = false;
    currentPos += 1; //moves position on graph to left
    createGraph(nodes, currentPos);
  }
  
  document.getElementById("whoWonTheBet").innerHTML = "Did you win: " + maxineWin; //shows if maxine won or not
  youWin();
}

function youLose() {
  document.getElementById("youLost").innerHTML = "YOU ARE BROKE HAHA"
}

function youWin() {
  if (currentPos == nodes) {
    console.log("MINA WON!");
    endGame();
    document.getElementById("theWinner").innerHTML = "MINA WON!"

  } else if (currentPos == 0) {
    console.log("MAXINE WON!");
    endGame();
    document.getElementById("theWinner").innerHTML = "MAXINE WON!"
  } else {
    console.log("nothing happening - but function working");
  }

}

function createGraph(nodes, currentPos) {
  let dash = "-";

  let graph = "Computer Wins |" + dash.repeat(nodes - currentPos) + "0" + dash.repeat(currentPos) + "| You Win";
  document.getElementById("graph").innerHTML = graph;

}

function computerMoves() {

  var computerBid = parseInt(Math.random() * (computerTotal));
  document.getElementById("computerBid").innerHTML = "Computer's Bid: " + computerBid;
  computerTotal -= computerBid;
  document.getElementById("computerTotal").innerHTML = "Computer's Money Left: " + computerTotal;
  console.log("DA COMP BID: " + computerBid);

  compBidNew = computerBid;

  //maxine's relative function
  //relativeFortune = total/computerTotal;
}

function calculateWinner() {
  //equations
  console.log("COOOMMp computer bid: " + compBidNew);
  relativeProb = maxineBid / (maxineBid + compBidNew);
  console.log("The relative PROB: " + relativeProb);
  maxineWin = probability(relativeProb); //returns true/false based on if won. 
  console.log("MAXINE WIN??: " + maxineWin);

}

function probability(prob) {
  return Math.random() < prob;
}

function endGame(){
  document.getElementById("all").style.display = "none";
  document.getElementById("again").style.display = "inline";
}
