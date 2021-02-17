var canvas;
var music;
var box, surface1, surface2, surface3, surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();

    surface1 = createSprite(100, 580, 150, 30);
    surface1.shapeColor = "red";
    surface2 = createSprite(300, 580, 150, 30);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(500, 580, 150, 30);
    surface3.shapeColor = "blue";
    surface4 = createSprite(700, 580, 150, 30);
    surface4.shapeColor = "green";

    box = createSprite(random(50, 750), 0, 30, 30);
    box.shapeColor = "white";
    box.setVelocity(5, 5);

}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(edges[3]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[0]);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        music.play();
        box.shapeColor = surface2.shapeColor;
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
    }

    if(surface4.isTouching(box)){
        box.shapeColor = surface4.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    drawSprites();
}
