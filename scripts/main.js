var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

var interval = 100;

function snake(x, y) {
    this.x = x;
    this.y = y;
    var appleX = Math.floor(Math.random() * 30) * 20;
    var appleY = Math.floor(Math.random() * 30) * 20;
    var numberToAddByX = 0; 
    var numberToAddByY = -20;

    function apple(){
        context.fillRect(appleX, appleY, 20, 20);
    } 
    
    setInterval(function() {
        document.onkeydown = function(key) {
            if (key.keyCode === 87 && numberToAddByY !== 20){ 
                numberToAddByY = -20;
                numberToAddByX = 0;
            }
            if (key.keyCode === 83 && numberToAddByY !== -20){ 
                numberToAddByY = 20;
                numberToAddByX = 0;
            }
            if (key.keyCode === 68 && numberToAddByX !== -20){ 
                numberToAddByY = 0;
                numberToAddByX = 20;
            }
            if (key.keyCode === 65 && numberToAddByX !== 20){ 
                numberToAddByY = 0;
                numberToAddByX = -20;
            }
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle="red";
        apple();
        context.fillStyle='black';
        context.fillRect(x, y, 20, 20);
        x += numberToAddByX;
        y += numberToAddByY;         
        if (x >= 600) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 300;
            y = 300;
        }
        if ( x <= -20) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 300;
            y = 300;
        }
        if (y >= 600) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 300;
            y = 300;
        }
        if (y <= -20) {
            context.clearRect(0, 0, canvas.width, canvas.height); 
            x = 300;
            y = 300;
        }
        if (x === appleX  && y === appleY){
            appleY = Math.floor(Math.random() * 30) * 20;
            appleX = Math.floor(Math.random() * 30) * 20;
            
        }
    }, interval);
    
    
}

window.onload = function() {
    snake(250, 250);
}