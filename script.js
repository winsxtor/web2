const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

// Función para cerrar todos los paneles
const closeAll = () => {
  panels.forEach(p => {
    p.classList.remove('show');
    setTimeout(() => {
      if (!p.classList.contains('show')) {
        p.style.display = 'none';
      }
    }, 300);
  });
  buttons.forEach(b => b.classList.remove('active'));
};

// Lógica para los botones
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // ESTO ES CLAVE: Evita que el click se pase al fondo y lo cierre
    e.stopPropagation(); 
    
    const targetId = btn.getAttribute('data-panel');
    const targetPanel = document.getElementById(targetId);

    if (targetPanel.classList.contains('show')) {
      closeAll();
    } else {
      closeAll();
      targetPanel.style.display = 'flex';
      btn.classList.add('active');
      
      setTimeout(() => {
        targetPanel.classList.add('show');
      }, 10);
    }
  });
});

// Lógica de cierre (Solo si toca la X o el fondo oscuro, NO el contenido)
panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    const panelContent = panel.querySelector('.panel-content');
    const isCloseBtn = e.target.classList.contains('close-button');
    
    // Si el click NO fue dentro del cuadro de texto, o fue en la X, cerramos
    if (!panelContent.contains(e.target) || isCloseBtn) {
      closeAll();
    }
  });
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAll();
});
