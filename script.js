window.addEventListener("load",function(){
    document.getElementById("preloader").style.opacity="0";
    setTimeout(function(){
        document.getElementById("preloader").style.display="none";
    },2000);
});
function basket(){
    alert("Added to the basket!")
}
let ded = 70;
let ded1 = 0;
let ded2 = 0;

let outputded = document.getElementById("third");
let outputded1 = document.getElementById("first");
let outputded2 = document.getElementById("second");

let interval;

function count() {
    if (ded < 100) {
        ded++;
        outputded.innerHTML = ded + "%";
    }

    if (ded1 < 100) {
        ded1++;
        outputded1.innerHTML = ded1 + "%";
    }

    if (ded2 < 100) {
        ded2++;
        outputded2.innerHTML = ded2 + "%";
    }

    if (ded >= 100 && ded1 >= 100 && ded2 >= 100) {
        clearInterval(interval);
    }
}
window.addEventListener("load", function () {
    clearInterval(interval);
    interval = setInterval(count, 20);
} )


function findMatch() {

    let color = document.querySelector('input[name="color"]:checked');
    let item = document.querySelector('input[name="item"]:checked');
    let style = document.querySelector('input[name="style"]:checked');

    if (!color || !item || !style) {
        alert("Please answer all 3 questions!");
    }

    else {
        let recommendation = color.value + " " + item.value;

        document.getElementById("result").innerHTML =
            "Your perfect match is: " + recommendation + "! ✨";
    }
}
let outputmin=document.getElementById("minutes");
let outputsec=document.getElementById("seconds");
let min = 50;
let sec = 0;

function start() {
    let interval=setInterval(function(){
    sec--;

    if (sec < 0) {
        sec = 59;
        min--;
    }

    if (min < 10) {
        outputmin.innerHTML = "0" + min;
    }
    else {
        outputmin.innerHTML = min;
    }

    if (sec < 10) {
        outputsec.innerHTML = "0" + sec;
    }
    else {
        outputsec.innerHTML = sec;
    }

    if (min == 0 && sec == 0) {
        clearInterval(timer);
    }

},1000);
}
start();