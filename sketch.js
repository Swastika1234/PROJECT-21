var canvas;
var music;
var box1,box2,box3,box4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
    box1=createSprite(0,580,360,30)
    box1.shapeColor="pink"
    box2=createSprite(295,580,200,30)
    box2.shapeColor="yellow"
    box3=createSprite(515,580,200,30)
    box3.shapeColor="blue"
    box4=createSprite(740,580,220,30)
    box4.shapeColor="green"
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=9
  

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges)
if(box1.isTouching(ball) && ball.bounceOff(box1)){
    ball.shapeColor="pink"
}
if(box2.isTouching(ball) && ball.bounceOff(box2)){
    ball.shapeColor="yellow"
}
if(box3.isTouching(ball) && ball.bounceOff(box3)){
    ball.shapeColor="blue"
}
if(box4.isTouching(ball) && ball.bounceOff(box4)){
    ball.shapeColor="green"
}



    //add condition to check if box touching surface and make it box
}
