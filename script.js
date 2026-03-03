const buttons = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('.panel');
const body = document.body;

// ==============================
// CERRAR TODO
// ==============================
function closeAllPanels() {
  buttons.forEach(btn => btn.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('show'));
  body.classList.remove('panel-open');
}

// ==============================
// ABRIR PANEL
// ==============================
function openPanel(targetId, button) {
  const panel = document.getElementById(targetId);
  if (!panel) return;

  closeAllPanels();

  panel.classList.add('show');
  button.classList.add('active');
  body.classList.add('panel-open');
}

// ==============================
// EVENTOS BOTONES
// ==============================
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const targetId = button.dataset.panel;
    const targetPanel = document.getElementById(targetId);

    if (targetPanel.classList.contains('show')) {
      closeAllPanels();
    } else {
      openPanel(targetId, button);
    }
  });
});

// ==============================
// CERRAR POR FONDO O X
// ==============================
panels.forEach(panel => {
  const content = panel.querySelector('.panel-content');
  const closeBtn = panel.querySelector('.close-button');

  // Cerrar si clic fondo
  panel.addEventListener('click', (e) => {
    if (e.target === panel) closeAllPanels();
  });

  // Cerrar con X
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeAllPanels();
    });
  }

  // Evitar cierre al hacer clic dentro
  content.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// ==============================
// CERRAR CON ESC
// ==============================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllPanels();
});
