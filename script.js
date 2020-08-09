class Line{
    constructor(x,y,len){
    this.x = x;
    this.y = y;
    this.lenght = len;
    }
    DrawLine() {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y+this.lenght);
        ctx.stroke();
    }
    MoveLine(x,y){
        this.x = x;
        this.y = y;
        this.DrawLine()
    }
}

window.addEventListener('load',main)

function main() {
    line1 = new Line(10,40,40)
    line1.DrawLine()
    line1.MoveLine(20,40)
}