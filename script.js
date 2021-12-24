let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

watch();

function watch() {
    let a = new Date();

    let b = a.getSeconds();
    let c = b * 6;
    secondHand.style.transform = `rotate(${c}deg)`;

    let d = a.getMinutes();
    let e = (d * 6) + (b / 10);
    minuteHand.style.transform = `rotate(${e}deg)`;

    let f = a.getHours();
    let g = (f * 30) + (d / 2);
    hourHand.style.transform = `rotate(${g}deg)`
}

setInterval(watch)
