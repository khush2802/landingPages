const sendBtn = document.getElementById("sendBtn");
const countdown = document.getElementById("countdown");
const message = document.getElementById("message");
const timerBox = document.getElementById("timerBox");

let timer;
let timeLeft = 30;

sendBtn.addEventListener("click", sendOTP);

function sendOTP(){

    sendBtn.disabled = true;

    timerBox.style.display = "block";

    message.innerHTML = "OTP Sent Successfully!";

    timeLeft = 30;

    countdown.innerHTML = timeLeft;

    clearInterval(timer);

    timer = setInterval(function(){

        timeLeft--;

        countdown.innerHTML = timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            sendBtn.disabled = false;

            message.innerHTML = "OTP Expired! You can request a new OTP.";

            timerBox.style.display = "none";

        }

    },1000);

}