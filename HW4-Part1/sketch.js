//This is the lab-time portion of the 4th assignment.

var img; 
var table; 

var stateName= []; 
var stateX= []; 
var stateY= []; 
var population = [];
var size = [];
var stateCircleObjectList = [];

var minpop;
var maxpop;
var maxCircleSize;

var isMousePressed;

function preload() {
  img= loadImage("map.png"); 
  table = loadTable("locations.csv");
}

function setup() {
  ///create canvas and load image
  createCanvas(img.width, img.height);
  ellipseMode(CENTER);
  ///visual choices
  colorMode(HSB, 360, 100, 100);
  smooth();

  ///Initialize variables
  minpop = 493782;
  maxpop = 33871648;
  isMousePressed = false;
  maxCircleSize = 150;

  ///getting the info from the spreadsheet
  for(var i = 0; i < table.getRowCount(); i++) {
    stateName[i] = table.getString(i, 0);
    stateX[i] = int(table.getString(i, 1));
    stateY[i] = int(table.getString(i, 2));
    population[i] = int(table.getString(i, 3));
  }
  
  ///mapping the population onto size
    for(var i = 0; i < population.length; i++){
        size[i] = map(population[i], minpop,maxpop,0,100);
    }

    for(var i = 0; i < population.length; i++) {
        stateCircleObjectList.push(new StateCircle(stateName[i], stateX[i], stateY[i], population[i], size[i]));
    }

}

function draw() {
    background(img);
    /*Begin creating every states circle and its properties as objects that are stored in a list.
    This results in less overhead than repeatedly creating completely new shapes and properties every draw cycle*/
    for (var i = 0; i  <  stateCircleObjectList.length; i++){
    stateCircleObjectList[i].run();
    }
}

function StateCircle(name, x, y, population, size){
    this.name = name;
    this.x = x;
    this.y = y;
    this.population = population;
    this.size = size;
    console.log(size);
}

StateCircle.prototype.run = function() {
    this.render();
};

StateCircle.prototype.render = function(){
    fill(150);
    ellipse(this.x, this.y, this.size, this.size);

    //If mouseIsPressed we change the way our shape is rendered.
    if(mouseIsPressed){
        this.margin = this.size/2 + 5;
        if (this.size < 1){ //margin of error for click size increases if our state is to small to click
            this.margin += 20;
        }
        //if the mouse is close to our shapes margin begin rendering a new shape with text
        if ((mouseX > this.x - this.margin  && mouseX < this.x + this.margin) && (mouseY > this.y - this.margin && mouseY < this.y + this.margin)){
            fill(150);
            ellipse(this.x, this.y,maxCircleSize, maxCircleSize);
            textSize(14);
            fill(0,0,0);
            text(this.name, this.x - 20, this.y);
            text("Population: " + this.population, this.x - maxCircleSize/2+5, this.y + 14)
        }
    }
};

