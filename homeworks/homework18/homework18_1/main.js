const div = document.getElementById("timer");

let startTimes = 3;
let timeLeft = 85;

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2 , "0")}`;
}

function startStartTime() {
    const intervalStart = setInterval(() => {
        div.innerHTML = `Таймер запуститься через <span style="color: red;">${startTimes}</span> секунди`;
        div.style.fontSize = '100px';
        div.style.textAlign = 'center';
        if (startTimes === 0) {
            clearInterval(intervalStart)
            div.style.color = "red"
        } else {
            startTimes --;
        }
    }, 1000)
}
startStartTime()
setTimeout(() =>{
    function startTimer() {

    const interval = setInterval(() => {
        div.innerText = formatTime(timeLeft);
        div.style.fontSize = '100px';
        div.style.textAlign = 'center';
        div.style.color = 'black';
        if (timeLeft === 0) {
            clearInterval(interval)
        } else  {
            timeLeft--;
        }
    }, 1000);
}
    startTimer();
}, 4000);

