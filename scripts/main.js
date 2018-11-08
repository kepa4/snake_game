var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

var interval = 1000/15;
var x = 300;
var y = 300;
var appleX = Math.floor(Math.random() * 30) * 20;
var appleY = Math.floor(Math.random() * 30) * 20;
var numberToAddByX = 0;
var numberToAddByY = 0;
var trail = [];
var tail = 0;

function snake() {
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    apple();
    context.fillStyle = 'black';

    for (i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x, trail[i].y, 20, 20);

        if (trail[i].x === x && trail[i].y === y){
            tail = 0; 
        }
    }

    while (trail.length > tail) {
        trail.shift();
    }
    trail.push({ x: x, y: y })

  
    function apple() {
        context.fillRect(appleX, appleY, 20, 20);
    }

    document.onkeydown = function (key) {
        if (key.keyCode === 87 && numberToAddByY !== 20) {
            numberToAddByY = -20;
            numberToAddByX = 0;
        }
        if (key.keyCode === 83 && numberToAddByY !== -20) {
            numberToAddByY = 20;
            numberToAddByX = 0;
        }
        if (key.keyCode === 68 && numberToAddByX !== -20) {
            numberToAddByY = 0;
            numberToAddByX = 20;
        }
        if (key.keyCode === 65 && numberToAddByX !== 20) {
            numberToAddByY = 0;
            numberToAddByX = -20;
        }
    }
    
    

    x += numberToAddByX;
    y += numberToAddByY;
    if (x >= 600) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        tail = 0;
        numberToAddByX = 0;
        numberToAddByY = 0;
        x = 300;
        y = 300;
    }
    if (x <= -20) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        numberToAddByX = 0;
        numberToAddByY = 0;
        tail = 0;
        x = 300;
        y = 300;
    }
    if (y >= 600) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        numberToAddByX = 0;
        numberToAddByY = 0;
        tail = 0;
        x = 300;
        y = 300;
    }
    if (y <= -20) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        tail = 0;
        numberToAddByX = 0;
        numberToAddByY = 0;
        x = 300;
        y = 300;
    }
    if (x === appleX && y === appleY) {
        tail++;
        appleY = Math.floor(Math.random() * 30) * 20;
        appleX = Math.floor(Math.random() * 30) * 20;

    }


}

window.onload = function () {
    setInterval(function() {
        snake();
    },interval);
}