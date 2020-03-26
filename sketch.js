
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 
var boxes = [];
var gSlider;
var ground;
var box1;
 
 
function setup() {
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,50,50);

    createCanvas(400, 400);
    background("grey");
 
    // Create an instance of Engine, World
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    
    // Create a ground rectangle that would hold all the boxes and add it to the world.
ground = new Ground(199,320,398,10);
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
      
            boxes =  [new Box(mouseX,mouseY,50,50)];
        
    }
}
 
function draw() {
    
    background("grey");
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();

    ground.display();
    box();
 box1.display();
this.box.show();

    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
       this.show == new box();
    }
