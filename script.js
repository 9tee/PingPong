class Line {
    constructor(x, y, len) {
        this.x = x;
        this.y = y;
        this.lenght = len;
    }
    draw() {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.lenght);
        ctx.stroke();
    }
    moveLine(x, y) {
        this.x = x;
        this.y = y;
    }
}
function Clear() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.height, c.width);
}
function Draw(list) {
    list.forEach(item => {
        item.draw();
    });
}

class Vectoc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setVector(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Ball {
    constructor(x, y, vector) {
        this.x = x;
        this.y = y;
        this.vector = vector;
    }
    move() {
        this.x += this.vector.x
        this.y += this.vector.y
    }
    draw() {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
}

window.addEventListener('load', main);
window.addEventListener('keypress', reDraw);

var list = []

function main() {
    line1 = new Line(10, 40, 40);
    line1.draw();
    ball = new Ball(40,75,new Vectoc(-1,2))
    ball.draw()
    list.push(line1)
    list.push(ball)
    setInterval(go,500)
}

function go(){
    Clear()
    list[1].move()
    Draw(list)
}

function reDraw(e) {
    Clear()
    if (e.code == 'KeyW') {
        if (list[0].y > 0) {
            list[0].moveLine(list[0].x, list[0].y - 1)
        }
    }
    else if (e.code == 'KeyS') {
        if (list[0].y + list[0].lenght < 150) {
            list[0].moveLine(list[0].x, list[0].y + 1);
        }
    }
    Draw(list)
}