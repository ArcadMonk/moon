function Projectile(x, y, r){

    this.pos = creatVector(x, y);
    this.vel = creatVector(0,0) 
    this.r = r;


    this.throw= function() {
    var newvel = createVector(-mouseX+width/2, -mouseY+height/2);
    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel); 
    }

    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
      
    }


}
