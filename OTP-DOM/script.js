const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", startTimer);

function startTimer(){

    button.disabled = true;

    let time = 30;

    button.innerText = "Resend OTP in 30s";

    const timer = setInterval(function(){

        time--;

        button.innerText = `Resend OTP in ${time}s`;

        if(time === 0){

            clearInterval(timer);

            button.disabled = false;

            button.innerText = "Send OTP";

            message.innerText = "You can request a new OTP.";

        }

    },1000);

}