* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}

/* VIDEO */
.video-container {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* OVERLAY - Mejorado con degradado para lectura */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    transparent 20%,
    transparent 80%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

/* LOGO */
.logo {
  position: absolute;
  top: env(safe-area-inset-top, 6vh);
  left: 50%;
  transform: translateX(-50%);
  animation:
    logoIntro 1.2s ease-out forwards,
    logoFloat 5s ease-in-out infinite 1.2s;
}

.logo img {
  width: clamp(120px, 18vw, 220px);
  height: auto;
  filter:
    drop-shadow(0 6px 20px rgba(0,0,0,0.6))
    drop-shadow(0 0 12px rgba(255,255,255,0.25));
}

@keyframes logoIntro {
  from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes logoFloat {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.95; }
  50% { transform: translateX(-50%) translateY(-6px); opacity: 1; }
}

/* SOCIALS */
.socials {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  gap: 15px;
  z-index: 20;
}

.socials a {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.6);
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}

.socials a:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}

/* BUTTONS */
.buttons {
  position: absolute;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
  flex-wrap: wrap;
  z-index: 15;
}

.buttons button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 12px 24px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 50px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.buttons button:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  border-color: #fff;
  transform: translateY(-3px);
}

/* PANELS - Transformados en Modales */
.panel {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: none; /* Oculto por defecto */
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.panel.show {
  display: flex;
  opacity: 1;
}

.panel-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  width: 100%;
  padding: clamp(30px, 5vw, 60px);
  position: relative;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.panel-content h2 {
  font-size: clamp(24px, 4vw, 42px);
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: 1px;
}

.panel-content p {
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 35px;
  cursor: pointer;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.close-button:hover {
  opacity: 1;
}

/* MOBILE ADAPTATION */
@media (max-width: 768px) {
  .buttons {
    bottom: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  .socials {
    top: 20px;
    right: 20px;
  }

  .panel-content {
    width: 95%;
    padding: 30px 20px;
  }
}
