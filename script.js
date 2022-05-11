let container = document.querySelector(".container");
let tank = document.querySelector(".tank")
var aim = $('.aim');
let horizontal = $('.container').offset().left;
let vertical = $('.container').offset().top; 

$(document).on('mousemove', function(event) {
    var aimX = aim.offset().left + aim.outerWidth(true) / 4;
    var aimY = aim.offset().top + aim.outerHeight(true) / 2;

    var deltaY = event.pageY - aimY;
    var deltaX = event.pageX - aimX; 
    var rad = Math.atan2(deltaY, deltaX) - 1.5708;
    aim.css('transform', 'rotate('+rad+ 'rad)');
});

document.body.onkeydown = () => {
    if(event.code == "KeyW") {        
        vertical -= 20;
        container.style.top = vertical + "px";
        tank.style.transform = "rotate(180deg)";
    } else if(event.code == "KeyD") {
        horizontal += 30;
        container.style.left = horizontal + "px";
        tank.style.transform = "rotate(-90deg)";
    } else if(event.code == "KeyA") {
        horizontal -= 30;
        container.style.left = horizontal + "px";
        tank.style.transform = "rotate(90deg)";
    } else if(event.code == "KeyS") {
        vertical += 20;
        container.style.top = vertical + "px";
        tank.style.transform = "rotate(0deg)";
    }
}

document.getElementById("one").onmousedown = function () {
    cinemaExplosion = document.getElementById("cinemaExplosion")
    cinemaExplosion.src="images/explosion.gif";
    $( "#cinema" ).fadeOut( "slow");
    function fade() {
        cinemaExplosion.style.opacity = 0;
    }
    setTimeout(fade, 780);
    function load() {
        window.location = "http://youtube.com/";
    }
    setTimeout(load, 790);
};

document.getElementById("two").onmousedown = function () {
    comicExplosion = document.getElementById("comicExplosion")
    comicExplosion.src="images/explosion.gif";
    $( "#comic" ).fadeOut( "slow");
    function fade() {
        comicExplosion.style.opacity = 0;
    }
    setTimeout(fade, 780);
    function load() {
        window.location = "http://youtube.com/";
    }
    setTimeout(load, 790);
};

document.getElementById("three").onmousedown = function () {
    soundExplosion = document.getElementById("soundExplosion")
    soundExplosion.src="images/explosion.gif";
    $( "#sound" ).fadeOut( "slow");
    function fade() {
        soundExplosion.style.opacity = 0;
    }
    setTimeout(fade, 780);
    function load() {
        window.location = "http://youtube.com/";
    }
    setTimeout(load, 790);
};

document.getElementById("four").onmousedown = function () {
    videoExplosion = document.getElementById("videoExplosion")
    videoExplosion.src="images/explosion.gif";
    $( "#video" ).fadeOut( "slow");
    function fade() {
        videoExplosion.style.opacity = 0;
    }
    setTimeout(fade, 780);
    function load() {
        window.location = "http://youtube.com/";
    }
    setTimeout(load, 790);
};

var up = false;
document.getElementById("up").onmousedown = function () {
    up = true;
}
document.getElementById("up").onmouseup = function () {
    up = false;
}
function forward(){
    if (up == true){
        vertical -= 20;
        container.style.top = vertical + "px";
        tank.style.transform = "rotate(180deg)";
    }
}
setInterval(forward,50)


var down = false;
document.getElementById("down").onmousedown = function () {
    down = true;
}
document.getElementById("down").onmouseup = function () {
    down = false;
}
function back(){
    if (down == true){
        vertical += 20;
        container.style.top = vertical + "px";
        tank.style.transform = "rotate(0deg)";
    }
}
setInterval(back,50)


var left = false;
document.getElementById("left").onmousedown = function () {
    left = true;
}
document.getElementById("left").onmouseup = function () {
    left = false;
}
function leftMove(){
    if (left == true){
        horizontal -= 30;
        container.style.left = horizontal + "px";
        tank.style.transform = "rotate(90deg)";
    }
}
setInterval(leftMove,150)


var right = false;
document.getElementById("right").onmousedown = function () {
    right = true;
}
document.getElementById("right").onmouseup = function () {
    right = false;
}
function rightMove(){
    if (right == true){
        horizontal += 30;
        container.style.left = horizontal + "px";
        tank.style.transform = "rotate(-90deg)";
    }
}
setInterval(rightMove,150)

var button = document.querySelector(".button");
function enterPage(){
    $( "#startScreen" ).fadeOut( "slow");
}

var mute = true;
var video=document.getElementById("tankVid");
document.getElementById("mute").onmousedown = function () {
    muteButton = document.getElementById("muteButton");
    if (mute == true){
        muteButton.src = "images/unmute.png";
        mute = false;
        video.muted = !video.muted;
    } else if (mute == false){
        muteButton.src = "images/mute.png";
        video.muted = !video.muted;
        mute = true;
    }
    
    // video.muted = !video.muted;
}