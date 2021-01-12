const days = document.querySelector('.days-timer');
const hours = document.querySelector('.hours-timer');
const minutes = document.querySelector('.minutes-timer');
const seconds = document.querySelector('.seconds-timer');

const date = '17 June 2021';

const getTimeDifference = (start, end) => {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    // return `${days} ${hours} ${minutes} ${seconds}`;
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

let timer = setInterval(() => {
    const specialdDate = new Date(date);
    const currentDate = new Date();

    let timeDifference = getTimeDifference(currentDate, specialdDate);

    days.textContent = timeDifference.days;
    hours.textContent = timeDifference.hours;
    minutes.textContent = timeDifference.minutes;
    seconds.textContent = timeDifference.seconds;
}, 1000);