const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

// Función única para cerrar todo
const closeAll = () => {
  panels.forEach(p => {
    p.classList.remove('show');
    setTimeout(() => { p.style.display = 'none'; }, 300);
  });
  buttons.forEach(b => b.classList.remove('active'));
};

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const targetId = btn.getAttribute('data-panel');
    const targetPanel = document.getElementById(targetId);

    // Si ya está abierto este panel, lo cerramos
    if (targetPanel.classList.contains('show')) {
      closeAll();
    } else {
      // Cerramos cualquier otro abierto antes
      closeAll();

      // Mostramos el nuevo
      targetPanel.style.display = 'flex';
      btn.classList.add('active');
      
      // Forzamos el reflow para que la animación funcione
      setTimeout(() => {
        targetPanel.classList.add('show');
      }, 10);
    }
  });
});

// Cerrar al hacer clic en la X o fuera del contenido
window.addEventListener('click', (e) => {
  panels.forEach(p => {
    const isClickInside = p.querySelector('.panel-content').contains(e.target);
    const isCloseBtn = e.target.classList.contains('close-button');

    if (p.classList.contains('show') && (!isClickInside || isCloseBtn)) {
      closeAll();
    }
  });
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAll();
});
