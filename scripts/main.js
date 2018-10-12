var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

var interval = 50;

function snake(x, y) {
    this.x = x;
    this.y = y;
    var numberToAddByX = 0; 
    var numberToAddByY = -10;

    setInterval(function() {
        document.onkeydown = function(key) {
            if (key.keyCode === 87 && numberToAddByY !== 10){ 
                numberToAddByY = -10;
                numberToAddByX = 0;
            }
            if (key.keyCode === 83 && numberToAddByY !== -10){ 
                numberToAddByY = 10;
                numberToAddByX = 0;
            }
            if (key.keyCode === 68 && numberToAddByX !== -10){ 
                numberToAddByY = 0;
                numberToAddByX = 10;
            }
            if (key.keyCode === 65 && numberToAddByX !== 10){ 
                numberToAddByY = 0;
                numberToAddByX = -10;
            }
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, y, 20, 20);
        x += numberToAddByX;
        y += numberToAddByY;         
        if (x === 500) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 250;
            y = 250;
        }
        if ( x === -10) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 250;
            y = 250;
        }
        if (y === 500) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 250;
            y = 250;
        }
        if (y === -10) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 250;
            y = 250;
        }
    }, interval);
    
    
}

window.onload = function() {
    snake(250, 250);
}