/**
 * This JavaScript file is part of the "Canvas Template"
 * Code in this file draws on theCanvas canvas element in the document.
 **/
var theCanvas = document.querySelector("#theCanvas");
// We use the variable name "c" here to be consistent with Code Maven (http://www.crunchzilla.com/code-maven)
var c = theCanvas.getContext("2d");
// Your code goes here! 
// You can write any code here that draws on the canvas "c", for example:
c.beginPath();
for (var i = 10; i <= 120; i = i + 10) {
    c.moveTo(20 + i, i);
    c.lineTo(100 + i, 40);
    c.lineTo(80 + i, 40 + i);
    c.lineTo(20 + i, i);
}
c.stroke();
//Here it comes the Polygon.
c.beginPath();
c.translate(245, 245);
do {
    var sides = prompt(
        "How many sides do you want on your Polygon? Please enter a numeric value"
    );
}
while (isNaN(sides));
var copies = prompt("How many Polygons do you want?( Recommended = 1 to start)");
for (var n = 0; n < copies; n++) {
    for (var i = 0; i <= sides; i += 1) {
        c.lineTo(-220 * Math.cos(i * (2 * Math.PI / sides)), 220 * Math.sin(i *
            (2 * Math.PI / sides)));
        c.stroke();
    }
    c.rotate(0.1);2
}





