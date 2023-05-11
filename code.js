const main = document.getElementById('main');
let input = document.getElementById('change').value;
console.log(input);
let width = "1 0 " + (100 / input) + "%";
let r = (input * input);
while (r > 0) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.flex = width;
    main.appendChild(box);
    --r;
}
hover();
const change = document.getElementById('change');
change.addEventListener('change', () => {
    changeSize();
});
function changeSize() {
    const box = document.querySelectorAll('.box');
    box.forEach(box => {
        main.removeChild(box);
    });
    let input = document.getElementById('change').value;
    console.log(input);
    let width = "1 0 " + (100 / input) + "%";
    let r = (input * input);
    while (r > 0) {
        const box = document.createElement('div');
        box.classList.add('box');       
        box.style.flex = width;
        main.appendChild(box);
        --r;
    }
    hover();
}
function hover () {
    const box = document.querySelectorAll('.box');
    box.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style['background-color'] = 'black';
        });
    });
}