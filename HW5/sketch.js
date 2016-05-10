//This is the lab-time portion of the 5th assignment.

var stateCircleObjectList = [];
var maxCircleSize;
var isMousePressed;
var toggle;

function setup() {
  ///create canvas and load image
  createCanvas(innerWidth, innerHeight);
  ellipseMode(CENTER);
  ///visual choices
  colorMode(HSB, 360, 100, 100,255);
   toggle = true;
   isMousePressed = false;
   maxCircleSize = 150;
}

function draw() {
    frameRate(5);
    background(0,0,150);
    if (toggle == true){
        /*Begin creating every states circle and its random properties as objects that are stored in a list.
        This results in less overhead than repeatedly creating completely new n+ shapes and properties every draw cycle.
        Also instead of all objects flickering upon a new draw cycle as they gain new properties, only the newest one will flicker into existence*/
        stateCircleObjectList.push(new StateCircle(random(0,width+1), random(0,height+1), random(0,maxCircleSize),random(0,256)));
        for (var i = 0; i  <  stateCircleObjectList.length; i++){
            stateCircleObjectList[i].run();
        }
    }else{
            //clear our array and our list
            stateCircleObjectList.length = 0;
            clear();
        }
}

//represents a specific circle and its properties
function StateCircle(x, y, size, opacity){
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = opacity;
    console.log(size);
}

//runs anything to do with our circle
StateCircle.prototype.run = function() {
    this.render();
};

//draws our circle
StateCircle.prototype.render = function(){
    fill(150,20,40, this.opacity);
    ellipse(this.x, this.y, this.size, this.size);
};

//when our moused is pressed change our toggle state.
function mousePressed(){
    if (toggle == false){
        toggle = true;
    }else {
        toggle = false;
    }

}

