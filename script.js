const buttons = document.querySelectorAll('.floating-buttons button');
const panels = document.querySelectorAll('.panel');
const closes = document.querySelectorAll('.close');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    document.getElementById(btn.dataset.panel).classList.add('active');
  });
});

closes.forEach(c => {
  c.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
  });
});

