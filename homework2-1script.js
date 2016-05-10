/**
 * Created by JohnnyMolina on 5/2/16.
 */


//The Definition of "Film Strip" uses https://www.youtube.com/watch?v=yOKqsdWAJFA as a reference.

var img1bg = document.getElementById("img1");
var img2bg = document.getElementById("img2");
var img3bg = document.getElementById("img3");
var img4bg = document.getElementById("img4");

var imageElementList = [img1bg, img2bg, img3bg, img4bg];

var image1 = "res/hw2/linkMovingDown.gif";
var image2 = "res/hw2/linkMovingDownPurple.gif";
var image3 = "res/hw2/linkMovingDownRed.gif";
var image4 = "res/hw2/fairy.gif"

var imagePaths = [image1,image2,image3,image4];
var imagePathListLength = imagePaths.length;


/*This function picks a  random image from a list containing a set length of images*/
function pickRandom(){
    var r1 = Math.floor((Math.random() * imagePathListLength));
    var r2 = Math.floor((Math.random() * imagePathListLength));
    var r3 = Math.floor((Math.random() * imagePathListLength));
    var r4 = Math.floor((Math.random() * imagePathListLength));

    img1bg.src = imagePaths[r1];
    img2bg.src = imagePaths[r2];
    img3bg.src = imagePaths[r3];
    img4bg.src = imagePaths[r4];
}


/*The following code performs a animation whereupon the image(s) loops across the boundaries of it's div container*/
var myBaseY = -110;
var increment = .5;
var myBaseYList = [myBaseY, myBaseY+ 25, myBaseY + 50, myBaseY + 78];


function moveAll() {
    //For each iteration increment the position of each image and do a check on the location
    // of each image's position. If it is past the bounds of the div reset it to the starting position.
    for (var i = 0; i < imageElementList.length; i++) {
        var img = imageElementList[i];
        myBaseYList[i] = myBaseYList[i] + increment;
        img.style.top = myBaseYList[i] + "%";

        if (myBaseYList[i] > 100) {
            myBaseYList[i] = myBaseY + 90;
        }
    }
}

function increaseSpeed(){
    increment+=.1;
}

function decreaseSpeed(){
    if (increment >.1) {
        increment -= .1;
    }
    console.log(increment);
}

function setup() {
    setInterval(moveAll, 5);

}

window.onload = setup();
