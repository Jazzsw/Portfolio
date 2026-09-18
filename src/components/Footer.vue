<template>
    <footer class="footer-section">

        <div class="footer-grid">

            <div class="footer-block">
                <span class="block-label">// IDENTITY</span>
                <p class="footer-name">JAZZ STOCKER-WITTERICK</p>
                <div class="hud-row">
                    <span class="hud-label">LOC</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">43.6532° N, 79.3832° W</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-label">STATUS</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">AVAILABLE FOR WORK</span>
                </div>
            </div>

            <div class="footer-block">
                <span class="block-label">// LINKS</span>
                <div class="links">
                    <a href="https://github.com/Jazzsw" target="_blank" rel="noopener noreferrer" class="footer-link">
                        <img src="../assets/github.svg" alt="GitHub" class="footer-icon" />
                        <span>GITHUB</span>
                    </a>
                    <a href="https://www.linkedin.com/in/jazzsw/" target="_blank" rel="noopener noreferrer"
                        class="footer-link">
                        <img src="../assets/linkedin.svg" alt="LinkedIn" class="footer-icon" />
                        <span>LINKEDIN</span>
                    </a>
                    <a href="mailto:jazzswdev@gmail.com" class="footer-link">
                        <img src="../assets/gmail.svg" alt="Email" class="footer-icon" />
                        <span>EMAIL</span>
                    </a>
                </div>
            </div>

        </div>

        <div class="footer-bottom">
            <span class="hud-value">© 2025 JAZZ STOCKER-WITTERICK — ALL RIGHTS RESERVED</span>
        </div>

    </footer>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.footer-section {
    background: #000;
    padding: 10px 60px 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    border-top: 1px solid #1a1a1a;
    margin-bottom: 1px;
}

.footer-block {
    padding: 36px 32px;
    /* border: 1px solid #111; */
    background: #000;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.block-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.25em;
    color: #444;
}

.footer-name {
    font-family: "Montserrat", sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 300;
    color: #aaa;
    letter-spacing: 0.12em;
}

.hud-row {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
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

.links {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.footer-link {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: #444;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #888;
}

.footer-icon {
    width: 1rem;
    height: 1rem;
    object-fit: contain;
    filter: invert(30%) sepia(0%) brightness(80%);
    transition: filter 0.3s ease;
    flex-shrink: 0;
}

.footer-link:hover .footer-icon {
    filter: invert(60%) sepia(0%) brightness(100%);
}


.footer-bottom {
    padding: 20px 32px;
    border-top: 1px solid #111;
    background: #000;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .footer-section {
        padding: 60px 24px 0;
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }
}
</style>