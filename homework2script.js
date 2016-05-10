/**
 * Created by JohnnyMolina on 4/24/16.
 */

var img1bg = document.getElementById("img1");
var img2bg = document.getElementById("img2");
var img3bg = document.getElementById("img3");

var image1 = "res/hw2/linkMovingDown.gif";
var image2 = "res/hw2/linkMovingDownPurple.gif";
var image3 = "res/hw2/linkMovingDownRed.gif";

var imagePaths = [image1,image2,image3];
var imageListLength = imagePaths.length;

/*This function picks a  random image from a list containing a set length of images*/
function pickRandom(){
    var r1 = Math.floor((Math.random() * imageListLength));
    var r2 = Math.floor((Math.random() * imageListLength));
    var r3 = Math.floor((Math.random() * imageListLength));

    img1bg.src = imagePaths[r1];
    img2bg.src = imagePaths[r2];
    img3bg.src = imagePaths[r3];
}


/*The following code performs a animation whereupon the image loops across it's div container*/
var myY = 0;
var increment = .1;

function move(){
        img1bg.style.top = myY + "%";

        myY = myY + increment ;

        if(myY >92)
        {
            if (myY=92){
                myY=0;
            }else {
                increment = -increment;
            }
        }
        console.log(myY);
}

function setup() {
    setInterval(move, 5);
}

window.onload = setup();
