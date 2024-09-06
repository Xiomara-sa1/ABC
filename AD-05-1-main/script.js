
const colors = ['green', 'blue', 'red'];

function applyRandomColor(event) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    event.target.style.color = colors[randomIndex];
}

const h5Elements = document.querySelectorAll('h5');


h5Elements.forEach(h5 => {
    h5.addEventListener('click', applyRandomColor);
});