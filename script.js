const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetPanel = document.getElementById(btn.dataset.panel);

    panels.forEach(p => {
      if (p !== targetPanel) {
        p.classList.remove('show');
        p.style.display = 'none';
      }
    });

    if (targetPanel.classList.contains('show')) {
      targetPanel.classList.remove('show');
      setTimeout(() => targetPanel.style.display = 'none', 300);
    } else {
      targetPanel.style.display = 'block';
      requestAnimationFrame(() => targetPanel.classList.add('show'));
    }
  });
  // Dentro de tu evento click, añade esto:
buttons.forEach(b => b.classList.remove('active')); // Limpiar otros botones
btn.classList.add('active'); // Resaltar el actual
});
