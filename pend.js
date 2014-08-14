var colors=[];
var nwidth=800;
var fib = [1,2,3,5,8,13,21,34,55,89,144,233,377,610,987];
var colAlph=130;
var numPend=25;
function setup() {
	createCanvas(nwidth,nwidth);
	angleMode(RADIANS);
	stroke(255);
	noFill();
	for(var i=0; i<numPend; i=i+1)
	{

		
		if(fib.indexOf(i)!==-1)
		{
		colors[colors.length] = color(255,0,255,colAlph);
		}
		else
		{
				colors[colors.length] = color(0,255,255,colAlph);
		}
	}
}
var startPos=50;
var maxPos=99;
var minPos=20;
var baseVel=1;
var direction=1;
var tick=0;
var stAng = 3.14/4;
function draw() {
	background(0);
	for(var i=0; i<8; i=i+1)
	{
		drawArc(10*pow(2,i),colors[i]);
		//drawArc(fib[i]/2,colors[i]);
		//drawArc((i+1)*50,colors[i]);
		stroke(128,128,128,64);
		strokeWeight(1);
		ellipse(nwidth/2, 50, (i+1)*50, (i+1)*50);
	}
	tick=tick+1;

}
function drawArc(len,inColor) {
	var offset = PI/2*startPos/100;
	var curPos = stAng*cos(tick*sqrt(1/(2*len)));
	var vel = 1/sqrt(100*len)*(startPos)/100;
	
	stroke(255,255,255,128);
	strokeWeight(2);
	/*var trPos=stAng*cos((tick-sqrt(.3*len))*sqrt(1/(2*len)));
	arc(nwidth/2, 50, len, len,PI/2-trPos-PI/32,PI/2-trPos+PI/32);*/
	stroke(inColor);
	strokeWeight(4);
	arc(nwidth/2, 50, len, len,PI/2-curPos-PI/16,PI/2-curPos+PI/16);
	strokeWeight(2);
	line(nwidth/2,50,nwidth/2+sin(curPos)*len/2,50+cos(abs(curPos))*len/2);

	/*if(curPos>0)
	{
	arc(nwidth/2, 50, len, len,PI/2-curPos-PI/16-PI/16*((stAng-curPos)/stAng),PI/2-curPos-PI/16);
	arc(nwidth/2, 50, len, len,PI/2-curPos+PI/16,PI/2-curPos+PI/16+PI/16*((stAng-curPos)/stAng));
	}
	else
	{
	arc(nwidth/2, 50, len, len,PI/2-curPos+PI/16,PI/2-curPos+PI/16+PI/16*((stAng+curPos)/stAng));	
	}*/
	
}