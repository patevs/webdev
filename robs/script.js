
// canvas store
var cnv;

// ball stores
var ballMd;
var ballMed;
var ballHt;

// obstacle stores
var obMd;
var obMed;
var obHt;

// setup function
function setup() {
  ellipseMode(CENTER);
  // create and center canvas
  this.cnv = createCanvas(900, 500);
  centerCanvas();
  // create balls
  this.ballMd = new ballMild();
  this.ballMed = new ballMedium();
  this.ballHt = new ballHot();
  // create obstacles
  this.obMd = new obMild();
  this.obMed = new obMedium();
  this.obHt = new obHot();
}

// Draw functions
function draw(){
  // set background color white
  cnv.background(255);
  // draw border
  stroke(0);
  noFill();
  rect(width/2,height/2,width-1,height-1);
  // draw floor
  noStroke();
  fill(75);
  rect(width/2,height-10,width,20);
  // draw walls
  stroke(0);
  line(300,0,300,height-20);
  line(600,0,600,height-20);

  //draw three dividers
  rectMode(CENTER);
  noStroke();
  // mild
  fill(0,255,0);
  rect(150,height-60,10,80);
  // medium
  fill(255,165,0);
  rect(width/2,height-60,10,80);
  // hot
  fill(255,0,0);
  rect(width-150,height-60,10,80);

  // display and moving mild ball
  if(this.ballMd.active == true){
    var hit = false;
    // checking obstacle collision
    hit = collideCircleCircle(this.ballMd.x,this.ballMd.y,16,150,250,32);
    if(hit == false){
      this.ballMd.move();
    } else {
      this.ballMd.bounce();
    }
    // display ball and obstacle
    this.ballMd.display();
    this.obMd.display();
  }
  // display and move medium ball
  if(this.ballMed.active == true){
    var hit = false;
    // checking obstacle collision
    hit = collideRectCircle(450,250,32,32, this.ballMed.x,this.ballMed.y,16);
    if(hit == false){
      this.ballMed.move();
    } else {
      this.ballMed.bounce();
    }
    this.ballMed.display();
    this.obMed.display();
  }
  // displaying and moving hot ball
  if(this.ballHt.active == true){
    var hit = false;
    // checking obstacle collision
    hit = collideCircleCircle(this.ballHt.x,this.ballHt.y,16,750,250,32);
    if(hit == false){
      this.ballHt.move();
    } else {
      this.ballHt.bounce();
    }
    this.ballHt.display();
    this.obHt.display();
  }

};

// function to run the mild ball
function runMild(){
  this.ballMd.setActive();
};

// function to run the mild ball
function runMedium(){
  this.ballMed.setActive();
};

// function to run the mild ball
function runHot(){
  this.ballHt.setActive();
};

// mild obstacle object
function obMild(){
  this.x = 150;
  this.y = 250;
  this.display = function(){
    fill(0,255,0);
    ellipse(this.x,this.y,32,32);
  }
}
// medium obstacle object
function obMedium(){
  this.x = 450;
  this.y = 250;
  this.display = function(){
    fill(255,165,0);
    rectMode(CENTER);
    rect(450,250,32,32);
  }
}
// hot obstacle object
function obHot(){
  this.x = 750;
  this.y = 250;
  this.display = function(){
    fill(255,0,0);
    ellipse(this.x,this.y,32,32);
  }
}

// ball mild object
function ballMild(){
  // set x position
  this.x = random(8,300-8);
  // set y position
  this.y = 8;
  // set random x speed
  this.xspeed = random(4,8);
  // 50% chance to go left or right
  if(random(1)>0.5){
    this.xspeed = this.xspeed * (-1);
  }
  // set random y speed
  this.yspeed = random(2,3);
  // set active flag
  this.active = false;
  // display function
  this.display = function(){
    // fill green
    fill(0,255,0);
    noStroke();
    ellipse(this.x,this.y,16,16);
  };
  // set active functions serves as a reset
  this.setActive = function(){
    this.active = true;
    this.x = random(8,300-8);
    this.y = 8;
    this.xspeed = random(4,8);
    // 50% chance to go left or right
    if(random(1)>0.5){
      this.xspeed = this.xspeed * (-1);
    }
    this.yspeed = random(2,3);
  };
  this.bounce = function(){
    this.xspeed = this.xspeed * (-1);
    if(this.xspeed <= 0){
      this.x = this.x + this.xspeed;
      this.x = this.x - 16;
    } else {
      this.x = this.x + this.xspeed;
      this.x = this.x + 16;
    }
  };
  // move function updates the ball
  this.move = function(){
    // increase x position by x speed
    this.x = this.x + this.xspeed;
    // checks if the ball is against a wall
    if(this.x < 8 || this.x > 300 - 8){
      // reflect the ball
      this.xspeed = this.xspeed * (-1);
      this.x = this.x + this.xspeed;
    }
    // reflecting the ball off the center post
    if(this.y > height-100-8){
      if(this.x > 145-8 && this.x < 155){
        this.bounce();
      }
    }
    // inceasing y position
    this.y = this.y + this.yspeed + 3;
    // checks if ball has reached the ground
    if(this.y > height - 20 - 8){
      this.y = height - 20 - 8;
      this.xspeed = 0;
      this.active = false;
      if(this.x < 145){
        wins(1);
      }else{
        wins(2);
      }
    }
  };
};

// function to alert the user to the winning choice
function wins(winner){
  switch(winner){
    case 1:
      window.alert("Mild choice 1");
      break;
    case 2:
      window.alert("Mild choice 2");
      break;
    case 3:
      window.alert("Medium choice 3");
      break;
    case 4:
      window.alert("Medium choice 4");
      break;
    case 5:
      window.alert("Hot choice 5");
      break;
    case 6:
      window.alert("Hot choice 6");
      break;
    default:
      break;
  }
}

// ball medium object
function ballMedium(){
  // set x position
  this.x = random(308,592);
  // set y position
  this.y = 8;
  // set random x speed
  this.xspeed = random(4,8);
  // 50% chance to go left or right
  if(random(1)>0.5){
    this.xspeed = this.xspeed * (-1);
  }
  // set random y speed
  this.yspeed = random(2,3);
  // set active flag
  this.active = false;
  // display function
  this.display = function(){
    // fill blue
    fill(255,165,0);
    noStroke();
    ellipse(this.x,this.y,16,16);
  };
  // set active functions serves as a reset
  this.setActive = function(){
    this.active = true;
    this.x = random(308,592);
    this.y = 8;
    this.xspeed = random(4,8);
    this.yspeed = random(2,3);
    if(random(1)>0.5){
      this.xspeed = this.xspeed * (-1);
    }
  };
  this.bounce = function(){
    this.xspeed = this.xspeed * (-1);
    this.y = this.y + 32;
    if(this.xspeed <= 0){
      this.x = this.x + this.xspeed;
      this.x = this.x - 8;
    } else {
      this.x = this.x + this.xspeed;
      this.x = this.x + 8;
    }

  };
  // move function updates the ball
  this.move = function(){
    // increase x position by x speed
    this.x = this.x + this.xspeed;
    // checks if the ball is against a wall
    if(this.x < 308 || this.x > 592){
      // reflect the ball
      this.xspeed = this.xspeed * (-1);
      this.x = this.x + this.xspeed;
    }
    // reflecting the ball off the center post
    if(this.y > height-100-8){
      if(this.x > 450-8 && this.x < 460){
        this.bounce();
      }
    }
    // inceasing y position
    this.y = this.y + this.yspeed + 2;
    // checks if ball has reached the ground
    if(this.y > height - 20 - 8){
      this.y = height - 20 - 8;
      this.xspeed = 0;
      this.active = false;
      if(this.x < 450){
        wins(3);
      }else{
        wins(4);
      }
    }
  };
}

// ball hot object
function ballHot(){
  // set x position
  this.x = random(608,width-8);
  // set y position
  this.y = 8;
  // set random x speed
  this.xspeed = random(4,8);
  // 50% chance to go left or right
  if(random(1)>0.5){
    this.xspeed = this.xspeed * (-1);
  }
  // set random y speed
  this.yspeed = random(2,3);
  // set active flag
  this.active = false;
  // display function
  this.display = function(){
    // fill red
    fill(255,0,0);
    noStroke();
    ellipse(this.x,this.y,16,16);
  };
  // set active functions serves as a reset
  this.setActive = function(){
    this.active = true;
    this.x = random(608,width-8);
    this.y = 8;
    this.xspeed = random(4,8);
    this.yspeed = random(2,3);
    if(random(1)>0.5){
      this.xspeed = this.xspeed * (-1);
    }
  };
  this.bounce = function(){
    this.xspeed = this.xspeed * (-1);
    if(this.xspeed <= 0){
      this.x = this.x + this.xspeed;
      this.x = this.x - 16;
    } else {
      this.x = this.x + this.xspeed;
      this.x = this.x + 16;
    }
  };
  // move function updates the ball
  this.move = function(){
    // increase x position by x speed
    this.x = this.x + this.xspeed;
    // checks if the ball is against a wall
    if(this.x < 608 || this.x > width-8){
      // reflect the ball
      this.xspeed = this.xspeed * (-1);
      this.x = this.x + this.xspeed;
    }
    // reflecting the ball off the center post
    if(this.y > height-100-8){
      if(this.x > width-150-8 && this.x < width-140){
        this.xspeed = this.xspeed * (-1);
        this.x = this.x + this.xspeed;
      }
    }
    // inceasing y position
    this.y = this.y + this.yspeed + 2;
    // checks if ball has reached the ground
    if(this.y > height - 20 - 8){
      this.y = height - 20 - 8;
      this.xspeed = 0;
      this.active = false;
      if(this.x < width-150-8){
        wins(5);
      }else{
        wins(6);
      }
    }
  };
}

// center canvas when window is resized
function windowResized() {
  centerCanvas();
}

// function to center the canvas on the screen
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  this.cnv.position(x, y + 420);
}