var canvas;
var block1,block2,block3,block4;
var ball, edges;


function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(200,580,150,30);
    block1.shapeColor = "blue";

    block2 = createSprite(330,580,150,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(50,580,150,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
       
        
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        

        
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        

        
    }
    drawSprites();
}
