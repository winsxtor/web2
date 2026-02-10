const buttons = document.querySelectorAll('.floating-buttons button');
const panels = document.querySelectorAll('.panel');
const closeButtons = document.querySelectorAll('.close');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-panel');

    panels.forEach(panel => panel.classList.remove('active'));

    const activePanel = document.getElementById(target);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  });
});

closeButtons.forEach(close => {
  close.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.remove('active'));
  });
});
