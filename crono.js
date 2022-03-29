window.onload = function(){

var minutes = 0;
var seconds = 0;
var tens = 0;

var appendMinutes = document.getElementById("minutes")
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens")

var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

var interval;

buttonStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTime, 10);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";

    appendMinutes.innerHTML = minutes;    
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

function startTime(){
    tens++;
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if (tens > 99){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9){
       appendMinutes.innerHTML = minutes;
    }


}

}
