class Ground{ 
  constructor(x,y,w,h) {
     var options = { 
       isStatic: true 
      } 
      this.body = Bodies.rectangle(x,y,w,h,options);
       this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        console.log(World, world, this.body);
         World.add(world, this.body); 
        } display(){ 
          var pos =this.body.position; rectMode(CENTER); fill("white");
 rect(pos.x, pos.y, this.w,this.h);
 } };