var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

var interval = 50;

function snake(x, y) {
    this.x = x;
    this.y = y;
    var numberToAddBy = 10; 
    // todo: if keydown equals certain key change direction in correspondance with that key 
    setInterval(function() {
        document.onkeydown = function(key) {
            if (key.keyCode === 87){ 
                numberToAddBy = -numberToAddBy;
            }
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 250, 20, 20);
        x += numberToAddBy;
        y += numberToAddBy;         
        if (x === 500) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 250;
            y = 250;
        }
    }, interval);
    
    
}

window.onload = function() {
    snake(250, 250);
}