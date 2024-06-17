// Bubbling
document.querySelector('h3').addEventListener(
    'click', () => console.log('Heading Clicked')// , true(i.e. by default false): reverses the sequence 
);

document.getElementById('inner-div').addEventListener(
    'click',
     () => console.log('Inner Div Clicked')// , true(i.e. by default false): reverses the sequence 
);

document.getElementsByTagName('div')[0].addEventListener(
    'click',
     () => console.log('Outer Div Clicked')// , true(i.e. by default false): reverses the sequence 
); 

document.body.addEventListener(
    'click',
    () => console.log('Body clicked') // , true(i.e. by default false): reverses the sequence 
);

// to stop bubbling to propogate
/*document.querySelector('h3').addEventListener(
    'click',
    (event) => {
        event.stopPropagation();
        console.log('Heading Clicked');
    }
);
*/