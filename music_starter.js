let firstRun = true
let character = [];
let sun;
let bird = [];
let bird2 = [];
let bird3 =[];


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  stroke(drum,80,80);

  noStroke()
fill(44,62,80)
  rect(60,490,80,200) //building one
  rect(150,450,80,200) //building two
  rect(240,550,60,250) //building three
  rect(310,450,60,200) //building four
  rect(390,450,90,230) //building five
  rect(490,450,60,200) //building six
  rect(570,490,80,200) //building seven
  rect(660,450,80,200) //building eight
  rect(750,550,60,250) //building nine
  rect(830,450,80,200) //building ten
  rect(920,550,60,250) //building eleven

  noStroke()
  fill(133,146,158)
    rect(20,500,50,115) //grey building one
    rect(90,495,50,140) //grey building two
    rect(168,500,66,190) //grey building three
    rect(420,500,50,100) //grey building four
    rect(620,500,50,100) //grey building five
    rect(890,550,50,200) //building six

  noStroke()
  fill (66,73,73)
  rect(8, 508, 8, 12,) //grey building one window1
  rect(20, 508, 8, 12); //grey building one window2
  rect(26, 508, 8, 12); //grey building one window3
  rect(38, 508, 8, 12); //grey building one window4
  rect(8, 485, 8, 12); //grey building one window5
  rect(18, 485, 8, 12); //grey building one window6
  rect(28, 485, 8, 12); //grey building one window7
  rect(38, 485, 8, 12); //grey building one window8
  rect(8, 470, 8, 12); //grey building one window9
  rect(18, 470, 8, 12); //grey building one window10
  rect(28, 470, 8, 12); //grey building one window11
  rect(38, 470, 8, 12); //grey building one window12
  rect(8, 455, 8, 12); //grey building one window13
  rect(18, 455, 8, 12); //grey building one window14
  rect(28, 455, 8, 12); //grey building one window15
  rect(38, 455, 8, 12); //grey building one window16

  rect(75,500,10,15) //grey building two window1
  rect(90,506,15,25) //grey building two window2
  rect(105,500,10,15) //grey building two window3
  rect(75,480,10,15) //grey building two window4
  rect(90,480,10,15) //grey building two window5
  rect(105,480,10,15) //grey building two window6
  rect(75,460,10,15) //grey building two window7
  rect(90,460,10,15) //grey building two window8
  rect(105,460,10,15) //grey building two window9
  rect(75,440,10,15) //grey building two window10
  rect(90,440,10,15) //grey building two window11
  rect(105,440,10,15) //grey building two window12

  rect(145,503,10,15) //grey building three window1
  rect(162,506,10,15) //grey building three window1
  rect(172,506,10,15) //grey building three window1
  rect(190,503,10,15) //grey building three window1
  rect(145,485,10,15) //grey building three window1
  rect(160,485,10,15) //grey building three window1
  rect(175,485,10,15) //grey building three window1
  rect(190,485,10,15) //grey building three window1
  rect(145,465,10,15) //grey building three window1
  rect(160,465,10,15) //grey building three window1
  rect(175,465,10,15) //grey building three window1
  rect(190,465,10,15) //grey building three window1
  rect(145,445,10,15) //grey building three window1
  rect(160,445,10,15) //grey building three window1
  rect(175,445,10,15) //grey building three window1
  rect(190,445,10,15) //grey building three window1
  rect(142,415,10,15) //grey building three window1
  rect(158,415,10,15) //grey building three window1
  rect(176,415,10,15) //grey building three window1
  rect(192,415,10,15) //grey building three window1

  rect(402,503,10,15) //grey building four window1
  rect(417,506,10,15) //grey building four window2
  rect(425,506,10,15) //grey building four window3
  rect(438,503,10,15) //grey building four window4
  rect(401,485,10,15) //grey building four window5
  rect(414,485,10,15) //grey building four window6
  rect(426,485,10,15) //grey building four window7
  rect(438,485,10,15) //grey building four window8
  rect(401,465,10,15) //grey building four window9
  rect(414,465,10,15) //grey building four window10
  rect(426,465,10,15) //grey building four window11
  rect(438,465,10,15) //grey building four window12

  rect(604,508,10,15) //grey building five window1
  rect(618,508,10,95) //grey building five leftdoor
  rect(624,508,10,95) //grey building five rightdoor
  rect(637,508,10,15) //grey building five window2
  rect(604,490,10,15) //grey building five window3
  rect(637,490,10,15) //grey building five window4
  rect(604,470,10,15) //grey building five window5
  rect(637,470,10,15) //grey building five window6

  rect(875,503,10,15) //grey building five window1
  rect(890,508,10,20) //grey building five door
  rect(905,503,10,15) //grey building five window2
  rect(875,485,10,15) //grey building five window3
  rect(890,485,10,15) //grey building five window4
  rect(905,485,10,15) //grey building five window5
  rect(875,465,10,15) //grey building five window6
  rect(890,465,10,15) //grey building five window7
  rect(905,465,10,15) //grey building five window8

  if(firstRun){
    rectMode(CENTER);
    sun = loadImage('Sun.png');
    bird.push(loadImage('Bird_0.png'));
    bird.push(loadImage('Bird_1.png'));
    bird2.push(loadImage('Bird2_0.png'));
    bird2.push(loadImage('Bird2_1.png'));
    bird3.push(loadImage('Bird3_0.png'));
    bird3.push(loadImage('Bird3_1.png'));
    character.push(loadImage('character_0.png'));
    character.push(loadImage('character_1.png'));
    character.push(loadImage('character_2.png'));
  
    firstRun = false
  }

  background(127,179,213,60)

  var sunSize = map(other,0,100,10,90);
  image(sun,20,sunSize)
 
var VocalFrame = int(map(vocal,0,100,0,3));
console.log(VocalFrame);
push();
scale(0.7);
image(character[VocalFrame], width, height/1.35)
pop(); 

var BassFrame = int(map(bass,0,100,0,2));
console.log(BassFrame);
push();
scale (0.3);
image(bird[BassFrame], width*1.6,height/2)
pop();

var BassFrame = int(map(bass,0,100,0,2));
console.log(BassFrame);
push();
scale (0.3);
image(bird[BassFrame], width*2.75,height/3)
pop();

var BassFrame = int(map(bass,0,100,0,2));
console.log(BassFrame);
push();
scale (0.3);
image(bird[BassFrame], width*2,height-2)
pop();

fill(25,111,61)
rect(60,530,600*3,33) // grass


  noStroke()
  fill (240,30)
  let drumMap = map(drum,0,100,15,40);
  
  for (var ii = 1; ii<= 10; ii ++){
  var yStep = ii * 50;
  for(var i =1; i <= 20; i ++){
    ellipse(50 * i, yStep,drumMap);
  }
}

  }

  


   
