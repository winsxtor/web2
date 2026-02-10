const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    panels.forEach(p => p.style.display = 'none');

    const panel = document.getElementById(btn.dataset.panel);
    if (panel) panel.style.display = 'block';
  });
});
