const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

const closeAllPanels = () => {
buttons.forEach(b => b.classList.remove('active'));
panels.forEach(p => {
p.classList.remove('show');
setTimeout(() => {
if (!p.classList.contains('show')) {
p.style.display = 'none';
}
}, 400);
});
};

buttons.forEach(btn => {
btn.addEventListener('click', (e) => {
e.stopPropagation();
const targetPanel = document.getElementById(btn.dataset.panel);

});
});

panels.forEach(panel => {
panel.addEventListener('click', (e) => {
const closeBtn = panel.querySelector('.close-button');
if (e.target === panel || e.target === closeBtn) {
closeAllPanels();
}
});
});

document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
closeAllPanels();
}
});
