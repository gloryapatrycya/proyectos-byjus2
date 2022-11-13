//Se crea la clase Box
//Y mandamos a llamar objetos de esta clase

class Box {
    constructor(x, y, width, height) 
    {
        var options = {
            restitution: 0.95
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display() 
    {
        var pos = this.body.position;
        //para rotar el cuerpo
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);

        pop();
    }
}