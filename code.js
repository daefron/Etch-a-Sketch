const main = document.getElementById('main');
let input = 100;
let width = "1 0 " + (100 / input) + "%";
let r = (input * input);
while (r > 0) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.flex = width;
    main.appendChild(box);
    --r;
}
const change = document.getElementById('change');
change.addEventListener('click', () => {
    input = prompt("grid width?");
});
//flex-basis needs to be 100% / width rounded down