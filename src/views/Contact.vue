<template>
  <div class="top-glow"></div>
  <div class="contact-section">
    <div class="contact-header">
      <span class="contact-tag">// GET IN TOUCH</span>
      <h2 class="contact-title">CONTACT</h2>
    </div>
  </div>

</template>

<style scoped>
.contact-section {
  margin-top: 8rem;
}

.contact-header {
  margin-bottom: 60px;
}

.contact-header {
  margin: 0 60px;
}

.contact-tag {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: #444;
  display: block;
  margin-bottom: 12px;
}

.contact-title {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 200;
  color: #ccc;
  letter-spacing: 0.12em;
  margin-top: 1rem;
}

.top-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.13) 0%, transparent 70%);
  pointer-events: none;
}
</style>