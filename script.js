const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');

// 1. Función para cerrar todo
const closeAll = () => {
  buttons.forEach(b => b.classList.remove('active'));
  panels.forEach(p => {
    p.classList.remove('show');
    setTimeout(() => {
      if (!p.classList.contains('show')) {
        p.style.display = 'none';
      }
    }, 300);
  });
};

// 2. Evento para los botones (Abrir)
buttons.forEach(btn => {
  // Usamos 'click' pero con un stopPropagation reforzado
  btn.addEventListener('click', (e) => {
    e.preventDefault();
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
      }, 20);
    }
  });
});

// 3. Evento para CERRAR (Solo en la X y en el fondo negro)
panels.forEach(panel => {
  const panelContent = panel.querySelector('.panel-content');
  const closeBtn = panel.querySelector('.close-button');

  // Cerramos si toca el fondo negro (el panel mismo)
  panel.addEventListener('click', (e) => {
    if (e.target === panel) {
      closeAll();
    }
  });

  // Cerramos si toca la X
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeAll();
    });
  }

  // IMPORTANTE: Evitamos que clics dentro del texto cierren el panel
  panelContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAll();
});
