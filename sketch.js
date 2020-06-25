//Global Variables
var monrunning, mon, bananaimg, ban, jungleimg, jungle, stoneimg, obstacle, go, ri, ig, ground,gameover,restart;
var bananagroup,obstaclesgroup;
var play,end,count = 0,gameState,life = 2;
function preload(){
  monrunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage("Banana.png");
  stoneimg = loadImage("stone.jpg");
  jungleimg = loadImage("jungle.jpg");
  ri = loadImage("restart.png");
  go = loadImage("gameOver.png");
}


function setup() {
  createCanvas(600,300);
  jungle = createSprite(250,100,600,300);
  jungle.addImage("background",jungleimg);
  //jungle.velocityX = -2;
  jungle.scale = 0.7;
  mon = createSprite(50,250,20,50);
  mon.addAnimation("running",monrunning);
  mon.scale = 0.1;
  //mon.debug = true; 
  ig = createSprite(0,250,300,10);
  ig.visible = false;
  bananagroup = new Group();
  obstaclesgroup = new Group(); 
  gameState = "play";
  gameover = createSprite(300,200);
  gameover.addImage(go);
  gameover.visible = false;
  restart = createSprite(300,240);
  restart.addImage(ri);
  restart.visible = false;
  gameover.scale = 0.5;
  restart.scale = 0.5;
  life = 2;
}


function draw(){
    mon.x = 50;
    mon.scale = 0.1;
    //scoring
    
    mon.collide(ig);
     //jump when the space key is pressed
    if(keyDown("space") && mon.y >= 104){
      mon.velocityY = -12 ;
    }
    //add gravity
    mon.velocityY = mon.velocityY+0.8;
    
    banana();
    obstacles();
   
    if(bananagroup.isTouching(mon)){
      if(bananagroup.x>200){
        bananagroup.destroyEach() === false;
      }
      bananagroup.destroyEach();
      count = count+2;
      }
    switch(count){
      case 10: mon.scale= 0.12;
        break;
      case 11: mon.scale= 0.12;
        break;
      case 12: mon.scale= 0.12;
        break;
      case 13: mon.scale= 0.12;
        break;
      case 14: mon.scale= 0.12;
        break;
      case 15: mon.scale= 0.12;
        break;
      case 16: mon.scale= 0.12;
        break;
      case 17: mon.scale= 0.12;
        break;
      case 18: mon.scale= 0.12;
        break;
      case 19: mon.scale= 0.12;
        break;
      case 20: mon.scale=0.14;
        break;
      case 21: mon.scale=0.14;
        break;
      case 22: mon.scale=0.14;
        break;
      case 23: mon.scale=0.14;
        break;
      case 24: mon.scale=0.14;
        break;
      case 25: mon.scale=0.14;
        break;
      case 26: mon.scale=0.14;
        break;
      case 27: mon.scale=0.14;
        break;
      case 28: mon.scale=0.14;
        break;
      case 29: mon.scale=0.14;
        break;
      case 30: mon.scale=0.16;
        break;
      case 31: mon.scale=0.16;
        break;
      case 32: mon.scale=0.16;
        break;
      case 33: mon.scale=0.16;
        break;
      case 34: mon.scale=0.16;
        break;
      case 35: mon.scale=0.16;
        break;
      case 36: mon.scale=0.16;
        break;
      case 37: mon.scale=0.16;
        break;
      case 38: mon.scale=0.16;
        break;
      case 39: mon.scale=0.16;
        break;
      case 40: mon.scale=0.18;
        break;
      case 41: mon.scale=0.18;
        break;
      case 42: mon.scale=0.18;
        break;
      case 43: mon.scale=0.18;
        break;
      case 44: mon.scale=0.18;
        break;
      case 45: mon.scale=0.18;
        break;
      case 46: mon.scale=0.18;
        break;
      case 47: mon.scale=0.18;
        break;
      case 48: mon.scale=0.18;
        break;
      case 49: mon.scale=0.18;
        break;
        default: break;
    }
   if(obstaclesgroup.isTouching(mon)){
      life = 3;
      }
    if(life ===3){
      mon.scale = 0.2;
    }
  drawSprites();
  fill("white");
  textSize(20);
  stroke("white");
  
  //display score
  text("Score: "+ count, 500, 50);
}
function reset(){
  gameState = "play";
 obstaclesgroup.destroyEach();
 bananagroup.destroyEach();
count = 0;
}
function banana(){
   if (frameCount % 80 === 0) {
    ban = createSprite(600,320,40,10);
     ban.addImage(bananaimg);
    ban.y = random(100,220);
    ban.scale = 0.05;
    ban.velocityX = -(4+3*count/50);
    
     //assign lifetime to the variable
    ban.lifetime = 300;
    
    //adjust the depth
   // ban.depth = mon.depth;
   // mon.depth = mon.depth + 1;
    
    //add each banana to the group
   bananagroup.add(ban);
  }
}
function obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600,210,10,40);
    obstacle.velocityX = - (6+3*count/50);
    obstacle.addImage(stoneimg);
    //assign scale and lifetime to the obstacle   
  //  obstacle.setcollider("rectangle", 0, 0, 75, 75);
    //obstacle.debug = true;
    obstacle.scale = 0.15;
    obstacle.lifetime = 150;
    //add each obstacle to the group
    obstaclesgroup.add(obstacle);
  }
}