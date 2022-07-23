status = "";
clock_image = "";

function preload(){
    clock_image= loadImage("Clock.jpg");
}

function setup(){
    canvas=createCanvas(450, 450)
    canvas.center();
}

function draw(){
    image(clock_image,0,0,450,450);
    fill("red")
    text("Clock", 130,100)
    noFill()
    stroke("red")
    rect(123,90,200,350) 
}