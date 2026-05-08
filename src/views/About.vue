<template>
  <div class="about-section">
    <div class="top-glow"></div>

    <div class="about-header">
      <span class="about-tag">// WHO I AM</span>
      <h2 class="about-title">ABOUT ME</h2>
    </div>

    <div class="about-body">

      <div class="about-intro">
        <span class="hud-value">JAZZ STOCKER-WITTERICK</span>
        <span class="hud-sep">|</span>
        <span class="hud-value">DEVELOPER & DESIGNER</span>
      </div>

      <div class="about-grid">

        <div class="about-block">
          <span class="block-label">// BIO</span>
          <p class="block-text">
            Software Engineering (Co-op) student at the University of Guelph, minoring in Culture and Technology
            Studies.
            My work sits at the intersection of technical architecture and human-centric design.
          </p>
          <p class="block-text">
            Currently a UX Design Intern at RWDI's Orbital Stack, bridging complex engineering requirements
            and intuitive digital experiences.
          </p>
          <p class="block-text">
            My CTS minor lets me critically analyse the interplay between society, culture, and emerging tech —
            ensuring the tools I build are not just functional, but ethical, accessible, and meaningful.
          </p>
        </div>

        <div class="about-block">
          <span class="block-label">// TOOLKIT</span>

          <div class="toolkit-group">
            <span class="toolkit-category">DESIGN</span>
            <div class="toolkit-tags">
              <span class="tile-tag">FIGMA</span>
              <span class="tile-tag">AFFINITY SUITE</span>
              <span class="tile-tag">HEURISTIC EVAL</span>
              <span class="tile-tag">USER RESEARCH</span>
            </div>
          </div>

          <div class="toolkit-group">
            <span class="toolkit-category">DEVELOPMENT</span>
            <div class="toolkit-tags">
              <span class="tile-tag">VUE.JS</span>
              <span class="tile-tag">NEXT.JS</span>
              <span class="tile-tag">ELECTRON</span>
              <span class="tile-tag">TAILWIND CSS</span>
            </div>
          </div>

          <div class="toolkit-group">
            <span class="toolkit-category">EXPLORING</span>
            <div class="toolkit-tags">
              <span class="tile-tag">BLENDER</span>
              <span class="tile-tag">UNREAL ENGINE 5</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-section {
  background: #000;
  padding: 8rem 60px 2rem;
}

.about-header {
  margin-bottom: 2rem;
}

.about-tag {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: #444;
  display: block;
  margin-bottom: 12px;
}

.about-title {
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 200;
  color: #ccc;
  letter-spacing: 0.12em;
}

.about-intro {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1rem;
}

.hud-label {
  color: #4a4a4a;
}

.hud-value {
  color: #666;
}

.hud-sep {
  color: #2a2a2a;
}

/* ── Two-column grid ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  border: 1px solid #1a1a1a;
}

.about-block {
  padding: 36px 32px;
  border: 1px solid #111;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.block-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: #666;
}

.block-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.7rem;
  color: #666;
  line-height: 1.9;
  letter-spacing: 0.04em;
}

/* ── Toolkit ── */
.toolkit-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toolkit-category {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  color: #666;
}

.toolkit-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tile-tag {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.55rem;
  color: #666;
  letter-spacing: 0.12em;
  border: 1px solid #222;
  padding: 3px 8px;
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 24px 80px;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
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