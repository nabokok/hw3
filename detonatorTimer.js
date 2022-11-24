function detonatorTimer(delay) {
    let timerId = setInterval(() => {
        if (delay === 0) {
            console.log('BOOM!');
            clearInterval(timerId);
        } else {
            console.log(delay);
            delay--;
        }
    }, 1000);
}

detonatorTimer(3);

function detonatorTimer2(delay) {
    let timerId = setTimeout(function tick() {
        if (delay === 0) {
            console.log('BOOM!');
            clearTimeout(timerId);
            return;
        }
        console.log(delay);
        delay--;
        timerId = setTimeout(tick, 1000);
    }, 1000);
}


detonatorTimer2(3);