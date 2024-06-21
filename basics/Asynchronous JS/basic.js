const buttonElement = document.querySelector('.button');
const textElement = document.getElementById("text");

buttonElement.addEventListener('click', () => {
    textElement.textContent = 'Button is pressed !!';
    
    setTimeout(() => {
        textElement.textContent = '';
    }, 2000);
})

const timeElement = document.getElementById('timer');

let seconds = 0;
timeElement.textContent = `${seconds}`;

const timer = setInterval(() => {
    seconds++;
    timeElement.textContent = `${seconds}`  

    if(seconds >= 5) {
        clearInterval(timer);
    }
}, 1000);
