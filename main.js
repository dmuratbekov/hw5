const text = prompt('Choose color: green or red?');
const circle = document.querySelector('.circle');
const move = document.createElement('div');
move.setAttribute('class', 'move');
if (text.toLowerCase() === 'red'){
    circle.style.backgroundColor = 'red';
    move.innerText = 'STOP';
    circle.append(move);
}else if (text.toLowerCase() === 'green'){
    circle.style.backgroundColor = 'green';
    move.innerText = 'GO';
    circle.append(move);
} else {
    circle.style.backgroundColor = 'yellow';
    move.innerText = 'WAIT';
    circle.append(move);
}