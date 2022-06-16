// class Graph{
//     constructor(self, player0win,player1win){
//         self.player0win = player0win; //should be negative
//         self.player1win = player1win; //should be positive
//         self.current_pos = 0;
//         self.player0money = 1;
//         self.player1money = 1;
//     }

//     // function (self):
//     //     return f'Player 0 Win: {self.player0win} \n Player 1 Win: {self.player1win} \n Current Position: {self.current_pos}'

//     displayGame(){
//         console.log("|" + (self.current_pos - self.player0win) * "-" + "o" + (self.player1win - self.current_pos) * "-" +                       "|");
//     }
  
//     turn(){
//     var player1bid = self.player1money * .6 * 0.9 ** abs(self.current_pos - self.player0win);
//     var player0bid = self.player0money * .6 * 0.9 ** abs(self.current_pos - self.player1win);
  
//     self.player0money -= player0bid;
//     self.player1money -= player1bid;
  
//     console.log(f'Player 0 Bid: {int(player0bid)}, Player 1 Bid: {int(player1bid)}', end =' ');
  
//     if random.random() < player0bid/(player0bid + player1bid):
//               self.current_pos -= 1
//     else:
//               self.current_pos += 1
              
//     }
        
  

//     def game(self):
//         self.current_pos = 0
//         self.player0money = 1000
//         self.player1money = 1000

//         self.display()
//         while self.current_pos < self.player1win and self.current_pos > self.player0win:
//             self.turn()
//             self.display()
//         if self.current_pos == self.player1win:
//             print("Player 1 Wins!")
//         if self.current_pos == self.player0win:
//             print("Player 0 Wins!")

// test = Graph(-10,10)

// test.game()

var points = [];


class Point{

  constructor(x, y){
    this.x = x;
    this.y = y;
    points.push({x:x, y:y}); //every time pt made, its added to array
    
  }
  show(){
    //have point show up on screen
    
  }
  
}

function createRandPoint(len){ //arg = num of points in graph
    
    //var len = 7; //points.length;
  for(var i = 0; i < len; i++) {
    var x = Math.round(Math.random() * 100);
    var y = Math.round(Math.random() * 100);
    
    new Point (x, y);
      //console.log(points[i].x + ' ' + points[i].y);         
  }
  // to add more points, push an object to the array:
  //points.push({x:56, y:87});
  console.log(points);


}

createRandPoint(7, 89);

function drawPoint(){
  
  function setup() {
    createCanvas(400, 300);
  }
  
  function draw() {
    background('white');
    noStroke();
      
      // Draw a circle 
      fill('black');
      circle(200, 150, 150); 
      
      //noFill();
      
      // Draw a circle 
    fill('salmon')
      circle(100, 150, 150); 
      
      // Draw a circle 
    fill('lightblue')
      circle(150, 75, 150);
  }
}

drawPoint();

console.log("hi");

function testing(){
  document.getElementById("argh").innerHTML = "this better work";
}
