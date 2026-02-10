const buttons = document.querySelectorAll('.floating-buttons button');
const panels = document.querySelectorAll('.panel');
const closeButtons = document.querySelectorAll('.close');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.panel;

    panels.forEach(panel => panel.classList.remove('active'));

    const panel = document.getElementById(target);
    if (panel) panel.classList.add('active');
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.remove('active'));
  });
});
