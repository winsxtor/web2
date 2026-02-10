const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.panel;
    const targetPanel = document.getElementById(targetId);

    // Si el panel ya está visible, lo ocultamos y salimos
    if (targetPanel.style.display === 'block') {
      targetPanel.style.display = 'none';
      return; 
    }

    // Ocultar todos los demás antes de mostrar el nuevo
    panels.forEach(p => p.style.display = 'none');

    // Mostrar el panel seleccionado
    if (targetPanel) targetPanel.style.display = 'block';
  });
});
