let firstRun = true
let character = [];



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(115,147,179,60)
  textFont('Helvetica'); // please use CSS safe fonts
  textSize(24);
  strokeWeight(3)
  stroke(drum,80,80);


  let drumMap = map(drum,0,100,5,50);
  let lengthOfLine = 10;
  let lineStart = 10;
  let lineEnd = lineStart + lengthOfLine;

  
  for(let i =1; i <= drumMap; i ++){
    let lineStep = i * 20;
    line (lineStart, lineStep,lineEnd,lineStep);


  }

   if(firstRun){
    rectMode(CENTER);
    character.push(loadImage('character_0.png'));
    character.push(loadImage('character_1.png'));
    character.push(loadImage('character_2.png'));

    firstRun  = false
   }

var VocalFrame = int(map(vocal,0,100,0,3));

console.log(VocalFrame);
push();
scale(0.7);
image(character[VocalFrame], width/2, height/2)
pop(); 

var ballSize = map(bass,0,100,60,60);
var drumHeight = map(drum,0,100,height/2, 0 + ballSize/2);
 //fill(255,192,0);
//ellipse (width/2,drumHeight, ballSize);


 //noStroke();
 //fill(255,234,0);
 //ellipse (width/4, drumHeight, ballSize);




   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}