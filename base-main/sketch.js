var backgroundImg
var ovni, ovniImg
var alien, alienImg
var ovniGroup
var life= 3;
var gameState= "play";


function preload(){
backgroundImg= loadImage("assets/background.jpg");
ovniImg= loadImage("assets/ovni.png");
alienImg= loadImage("assets/alien.png")
}
 
function setup(){
createCanvas(700,700);

alien= createSprite(200,200);
alien.addImage(alienImg);
alien.scale= 0.4;

ovniGroup= new Group();


 }


 function draw(){
background (backgroundImg);
text(life,100,10);
if (gameState==="play"){

ovnis();

if(keyDown("up_arrow")){
    alien.velocityY=-10
}

alien.velocityY= alien.velocityY+ 0.8

if(keyDown("right_arrow")){
    alien.x= alien.x+3;
}
if(keyDown("left_arrow")){
    alien.x= alien.x-3;
}
 
if (ovniGroup.collide(alien)){
   life=life-1
   if(life<=0){
    gameState="end"}
}

if (alien.y>700){
    gameState="end";
}

}

if (gameState==="end"){
    background(0);
   ovniGroup.destroyEach();
   alien.destroy();
   textSize(30);
    text("fim de jogo",230,250);

}

drawSprites();
 }

 function ovnis(){
    if(frameCount % 150===0){
        ovni= createSprite(100, -50);
        ovni.x= Math.round(random(100,600));
        ovni.velocityY=2;
        ovni.addImage(ovniImg);
        ovni.scale=0.3
        ovniGroup.add(ovni);
        
       

    ovniGroup.debug=true;
    }
 }