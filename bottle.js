s = 5.94;

b1=0*s;
b2=-3*s;
b3=-4*s;
b4=-6*s;
b5=-8*s;
b6=-15*s;
b7=-18*s;
b8=-19*s;
b9=-11*s;
b0=-13*s;

function setup() {
  createCanvas(240 * s,90 * s);
}

function draw() {
  background(239,220,199);
  bottle(20,237,168,225,247,188,237);
  bottle(60,237,168,225,247,188,237);
  bottle(100,237,168,225,247,188,237);
  bottle(140,237,168,225,247,188,237);
  bottle(180,237,168,225,247,188,237);
  bottle(220,237,168,225,247,188,237);

  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();
  fill(194, 157, 114);
  text('drawing',20*s,height-30*s);
  text('digital art',60*s,height-30*s);
  text('photos',100*s,height-30*s);
  text('code',140*s,height-30*s);
  text('more',180*s,height-30*s);
  text('more..',220*s,height-30*s);
}

function bottle(c,lr,lg,lb,dr,dg,db) {
  
  centre = c*s;
  
  noStroke();
  fill(lr,lg,lb);
  
  rect(centre-15 * s,height-45 * s,30 * s,35 * s);
  ellipse(centre,height-10 * s,30 * s,10 * s);
  triangle(centre-15 * s,height-45 * s,centre+15*s,height-45*s,centre,height-70*s);
  rect(centre-5*s,height-75*s,10*s,15*s);
  ellipse(centre,height-75*s,10*s,2*s);
  
  noStroke();
  fill(dr,dg,db);
  
  rect(centre-15*s,height-45*s,15*s,35*s);
  arc(centre,height-10*s,30*s,10*s,PI/2,3*PI/2);
  triangle(centre-15*s,height-45*s,centre,height-45*s,centre,height-70*s);
  rect(centre-5*s,height-75*s,5*s,15*s);
  arc(centre,height-75*s,10*s,2*s,PI/2,3*PI/2);
  
  noStroke();
  fill(247, 242, 220);
  rect(centre-15*s,height-35*s,30*s,10*s);
  
  noFill();
  stroke(0);
  line(centre-15*s,height-34*s,centre+15*s,height-34*s);
  line(centre-15*s,height-26*s,centre+15*s,height-26*s);
  
  noStroke();
  fill(247, 242, 220);
  circle(centre,height-30*s,17.5*s);
  
  noFill();
  stroke(0);
  circle(centre,height-30*s,17.5*s);
  circle(centre,height-30*s,15.5*s);
  
  if (mouseOver() == 0) bubbles(0);
  if (mouseOver() == 1) bubbles(1);
  if (mouseOver() == 2) bubbles(2);
  if (mouseOver() == 3) bubbles(3);
  if (mouseOver() == 4) bubbles(4);
  if (mouseOver() == 5) bubbles(5);
  
}

function mousePressed() {
  if (mouseOver() == 0) window.open('drawing.html');
  if (mouseOver() == 1) window.open('digitalart.html');
  if (mouseOver() == 2) window.open('photos.html');
  if (mouseOver() == 3) window.open('code.html');
  if (mouseOver() == 4) window.open('more.html');
  if (mouseOver() == 5) window.open('more...html');
}

function mouseOver() {
  for ( i=0; i<6; i++) {
    if (mouseX>(((40*i)+20)-15)*s && mouseX<(((40*i)+20)+15)*s && mouseY>45*s && mouseY<85*s) {
      return i;
    }
    if (mouseX>(((40*i)+20)-5)*s && mouseX<(((40*i)+20)+5)*s && mouseY>14*s && mouseY<25*s) {
      return i;
    }
    if (mouseY>(((40*i)+20)+5)*s && mouseY<(((40*i)+20)+25)*s && mouseX>15*s-(mouseY-25*s)/2 && mouseX<25*s+(mouseY-25*s)/2) {
      return i;
    }
  }
}

function bubbles(w) {
  noStroke();
  fill(60, 146, 222);
  
  if (b1>0) circle((22+40*w)*s,13*s-s*b1/9,1*s);
  b1++;
  if (b1>25*s) b1=0;
  
  if (b2>0) circle((18+40*w)*s,13*s-s*b2/9,1*s);
  b2++;
  if (b2>25*s) b2=-3*s;

  if (b3>0) circle((20+40*w)*s,13*s-s*b3/9,1*s);
  b3++;
  if (b3>25*s) b3=-4*s;
  
  if (b4>0) circle((17+40*w)*s,13*s-s*b4/9,1*s);
  b4++;
  if (b4>25*s) b4=-6*s;
  
  if (b5>0) circle((23+40*w)*s,13*s-s*b5/9,1*s);
  b5++;
  if (b5>25*s) b5=-8*s;
  
  if (b6>0) circle((22+40*w)*s,13*s-s*b6/9,1*s);
  b6++;
  if (b6>25*s) b6=-5*s;
  
  if (b7>0) circle((18+40*w)*s,13*s-s*b7/9,1*s);
  b7++;
  if (b7>25*s) b7=-8*s;
  
  if (b8>0) circle((20+40*w)*s,13*s-s*b8/9,1*s);
  b8++;
  if (b8>25*s) b8=-9*s;
  
  if (b9>0) circle((17+40*w)*s,13*s-s*b9/9,1*s);
  b9++;
  if (b9>25*s) b9=-1*s;
  
  if (b0>0) circle((23+40*w)*s,13*s-s*b0/9,1*s);
  b0++;
  if (b0>25*s) b0=-3*s;

}