function setup() {
  createCanvas(700, 700);}

function draw() {
background(253, 249, 213);

	noStroke();
	fill(226,156,97);
	ellipse(120,120, 245,245);
	
	noStroke();
	fill(246,217,29);
	ellipse(190,190, 100,100);
	
	noStroke();
	fill(217,30,0);
	ellipse(190,190, 70,70);

  noStroke();
	fill(0,0,0);
	ellipse(120,120, 170,170);
	
	noStroke();
	fill(88,59,89);
	ellipse(120,120, 80,80);
	
	fill(223,240,237);
	noStroke();
	triangle(350, 120, 160, 350, 600, 300);
	
	stroke(0,0,0);

	line(350,120,200,300);
		line(350,120,600,300);
	line(350,190,350,50);
	line(500,180,150,300);
	
line(320,60,420,90);
	line(330,90,380,90);
	line(340,100,380,100);

	
	noStroke();
	fill(149,188,200);
	ellipse(100,450, 100,100);
	
  stroke(1);
	fill(238,214,36);
	ellipse(100,450, 70,70);
  
  
  
strokeWeight(0);
  
point(170, 320);
  
point(180, 210);

point(215, 280);

point(250, 320);

point(265, 260);
  
point(280, 210);
  
point(325, 240);
  
  
point(365, 270);
  
point(390, 220);
  
  
point(430, 160);
  
point(500, 170);
  

 

noFill();
strokeWeight(7);
beginShape();
vertex(170, 320);
quadraticVertex(160, 220, 215, 280);
quadraticVertex(250, 320,265, 260);
quadraticVertex(280, 210,325, 240);
  quadraticVertex(365, 270,390, 220);
  quadraticVertex(430, 160,500, 170);

endShape();
	
strokeWeight(0);
  
point(380, 110);
  
point(380, 150);

point(320, 160);

noFill();
strokeWeight(3);
beginShape();
vertex(380, 110);
quadraticVertex(380, 150, 320, 160);

endShape();

	
	noStroke();
	fill(255,255,255);
	ellipse(550,140, 70,70);
	endShape();
	
	stroke(3);
	fill(255,255,255);
	ellipse(550,140, 50,50);
	
endShape();
	
	noStroke();
	fill(238,214,36);
	ellipse(500,580, 70,70);
	
noStroke();
	fill(149,188,200);
	ellipse(496,578, 50,50);
  
  stroke(0,0,0);
	fill(242,22,22);
	ellipse(550,80, 10,10);
  
  noStroke();
	fill(142,142,142);
	ellipse(650,50, 30,30);
	
endShape(CLOSE);

beginShape();
fill(0,0,0);
vertex(160, 370);
vertex(320, 465);
vertex(300, 480);
vertex(150, 380);
endShape(CLOSE);
  
stroke(1);
fill(0,0,0);
line(299, 478, 590, 240);
line(265, 455, 580, 230);
line(245, 440, 520,260);
line(245, 420, 400,270);
line(200, 400, 300,270);

line(580, 230, 590,240);

line(545, 275, 520,260);

line(480, 330, 400,270);
  
line(442, 360, 300,270);
  

line(567, 240, 578,249);
line(555, 250, 565,258);
  
  
line(505, 270, 530,288);

line(490, 279, 520,298);
  
line(465, 340, 385,285);

  line(455, 350, 375,295);
  
  
line(430, 370, 280,300);
line(405, 388, 260,322);
line(375, 415, 248,340);
line(340, 445, 235,358);

line(430, 650, 515,530);
line(370, 640, 515,480);

  endShape(CLOSE);



  
  
}