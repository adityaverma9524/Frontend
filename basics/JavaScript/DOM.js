// console.log(document.querySelector("h1"));
/*const firstHeading = document.querySelectorAll("h1");
console.log(firstHeading);
console.log(document.querySelector(".first"));
console.log(document.querySelector(".second"));
console.log(document.querySelector("#para"));
*/

/*const heading = document.querySelector('.second');
const para = document.querySelector('#para');
console.log(heading);
console.log(para);

console.log(document.getElementById('para'));
console.log(document.getElementsByClassName('first'));
console.log(document.getElementsByTagName('h2'));

heading.style.color = 'red';
para.style.backgroundColor = 'grey';
*/

// appendChild(): Used to append a single element as a child to another element
const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

// remove() OR removeChild(): to remove an element
// document.querySelector('h2').remove();
// append(): allows to append multiple elemens or text to another element

// Remove heading on the click of a button
btn.addEventListener('click', () => document.querySelector('h2').remove());

const div1 = document.createElement('div');
div1.textContent = "div1 appended inside body via script";
const div2 = document.createElement('div');
div2.textContent = "div2 appended inside body via script";
document.querySelector('body').append(div1, div2);

const p = document.querySelector('p');
// for calling a funciton that needs NO argument
// p.addEventListener('click', clickPara()); => Class the function even before click
// p.addEventListener('click', clickPara); => function is called after click

// for calling a funciton that needs arguments
p.addEventListener('click', function()  {
    clickPara('Hello')
});

function clickPara(greet) {
    console.log(greet + ', Para Clicked.');
}

// eventListner() on para
p.addEventListener('mousedown', function() {
    p.style.backgroundColor = 'yellow';
});

p.addEventListener('mouseup', function() {
    p.style.backgroundColor = '';
});

// eventListner() on body
document.body.addEventListener(
    'keydown',
    (event) => {
        console.log('Key Pressed');
        console.log(event.key + ': ' + event.keyCode);
});