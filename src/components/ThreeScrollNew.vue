<template>
    <div class="portfolio-root" ref="root">
        <!-- Hero section: tall scroll container -->
        <div class="hero-scroll-container" ref="heroScroll">
            <!-- Sticky canvas + overlay viewport -->
            <div class="sticky-hero" ref="container">
                <canvas ref="canvas" class="three-canvas" :style="{ opacity: canvasOpacity }"></canvas>

                <!-- HUD overlay text (fades out on scroll) -->
                <div class="content" :style="{ opacity: textOpacity, transform: `translateY(${textSlide}px)` }">
                    <div class="hud-corner top-left"></div>
                    <div class="hud-corner top-right"></div>
                    <div class="hud-corner bottom-left"></div>
                    <div class="hud-corner bottom-right"></div>

                    <div class="scan-line"></div>
                    <div class="top-glow"></div>
                <div class="main-text">
                    <div class="name-block">
                        <h1 class="name">JAZZ STOCKER-WITTERICK</h1>
                    </div>

                    <p class="bio">
                        WELCOME TO MY PORTFOLIO! I'M A SOFTWARE DEVELOPER AND UI/UX DESIGNER CURRENTLY PURSUING A DEGREE
                        IN SOFTWARE
                        ENGINEERING AND WORKING AS A UX DESIGN INTERN AT RWDI'S ORBITAL STACK
                    </p>

                    <div class="hud-data">
                        <span class="hud-label">VUE</span>
                        <span class="hud-sep">|</span>
                        <span class="hud-label">TS/JS</span>
                        <span class="hud-sep">|</span>
                        <span class="hud-label">C</span>
                        <span class="hud-sep">|</span>
                        <span class="hud-label">Python</span>
                        <span class="hud-sep">|</span>
                        <span class="hud-label">Figma</span>


                    </div>
                </div>

                    <!-- Scroll hint -->
                    <div class="scroll-hint" :style="{ opacity: scrollHintOpacity }">
                        <span class="scroll-hint-text">SCROLL</span>
                        <div class="scroll-hint-line"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import * as THREE from 'three';

export default {
    name: 'JazzPortfolio',

    data() {
        return {
            animFrame: null,
            mouse: { x: 0, y: 0 },

            // Scroll state
            scrollProgress: 0,   // 0 → 1 over the hero scroll container
            textOpacity: 1,
            textSlide: 0,
            scrollHintOpacity: 1,
            canvasOpacity: 1,
        };
    },

    mounted() {
        this.initThree();
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onScroll, { passive: true });
        // Small entrance delay
        setTimeout(() => { this.contentVisible = true; }, 400);
    },

    beforeUnmount() {
        cancelAnimationFrame(this.animFrame);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('scroll', this.onScroll);
        this.renderer?.dispose();
    },

    methods: {
        // ─── THREE.JS SETUP ──────────────────────────────────────────────────────

        initThree() {
            const canvas = this.$refs.canvas;
            const w = window.innerWidth;
            const h = window.innerHeight;

            this.scene = new THREE.Scene();

            const topLight = new THREE.PointLight(0xffffff, 1.8, 12);
            topLight.position.set(0, 5, 2);
            this.scene.add(topLight);
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.08);
            this.scene.add(ambientLight);

            this.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
            this.camera.position.set(0, 0, 5);

            this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setSize(w, h);
            this.renderer.setClearColor(0x000000, 1);

            this.buildScene();
            this.animate();
        },

        buildScene() {
            const scene = this.scene;

            // Main arc (semicircle)
            const arcGeo = new THREE.TorusGeometry(1.68, 0.012, 8, 200, Math.PI);
            const arcMat = new THREE.MeshBasicMaterial({ color: 0x555555 });
            this.arc = new THREE.Mesh(arcGeo, arcMat);
            this.arc.rotation.z = Math.PI;
            this.arc.position.y = 0.2;
            scene.add(this.arc);

            // Tick marks
            this.tickGroup = new THREE.Group();
            const tickMat = new THREE.MeshBasicMaterial({ color: 0x444444 });
            for (let i = 0; i <= 120; i++) {
                const angle = (i / 120) * Math.PI;
                const r = 1.68;
                const isLong = i % 10 === 0;
                const len = isLong ? 0.18 : 0.07;
                const geo = new THREE.PlaneGeometry(0.008, len);
                const tick = new THREE.Mesh(geo, tickMat);
                const x = -Math.cos(angle) * r;
                const y = Math.sin(angle) * r + 0.2;
                tick.position.set(x, y, 0);
                tick.rotation.z = -angle + Math.PI / 2;
                this.tickGroup.add(tick);
            }
            scene.add(this.tickGroup);

            // Outer ring (full circle)
            const ringGeo = new THREE.TorusGeometry(1.785, 0.005, 6, 160);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x333333 });
            this.ring = new THREE.Mesh(ringGeo, ringMat);
            this.ring.position.y = 0.2;
            scene.add(this.ring);

            // Ground grid
            this.gridGroup = new THREE.Group();
            const gridMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a });
            for (let i = 0; i < 18; i++) {
                const z = -i * 0.5;
                const spread = 6 + i * 0.6;
                const pts = [new THREE.Vector3(-spread, -2.8, z), new THREE.Vector3(spread, -2.8, z)];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                this.gridGroup.add(new THREE.Line(geo, gridMat));
            }
            for (let i = -10; i <= 10; i++) {
                const pts = [new THREE.Vector3(i * 0.65, -2.8, 0), new THREE.Vector3(i * 0.1, -2.8, -8)];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                this.gridGroup.add(new THREE.Line(geo, gridMat));
            }
            scene.add(this.gridGroup);

            // Particles
            const pCount = 180;
            const pPositions = new Float32Array(pCount * 3);
            for (let i = 0; i < pCount; i++) {
                pPositions[i * 3] = (Math.random() - 0.5) * 14;
                pPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
                pPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
            }
            const pGeo = new THREE.BufferGeometry();
            pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
            const pMat = new THREE.PointsMaterial({ color: 0x888888, size: 0.012 });
            this.particles = new THREE.Points(pGeo, pMat);
            scene.add(this.particles);

            // Corner brackets
            const bracketMat = new THREE.LineBasicMaterial({ color: 0x666666 });
            const brackets = [
                { x: -3.8, y: 1.8 }, { x: 3.8, y: 1.8 },
                { x: -3.8, y: -2.0 }, { x: 3.8, y: -2.0 }
            ];
            brackets.forEach(({ x, y }) => {
                const sx = Math.sign(x) * 0.2;
                const sy = Math.sign(y) * 0.2;
                const pts = [
                    new THREE.Vector3(x + sx, y, 0),
                    new THREE.Vector3(x, y, 0),
                    new THREE.Vector3(x, y - sy, 0)
                ];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                scene.add(new THREE.Line(geo, bracketMat));
            });

            // Ambient glow
            const glowGeo = new THREE.SphereGeometry(2.2, 32, 32);
            const glowMat = new THREE.MeshBasicMaterial({
                color: 0x111111, transparent: true, opacity: 0.18, side: THREE.BackSide
            });
            scene.add(new THREE.Mesh(glowGeo, glowMat));

            // Spinner + trail
            const spinnerGeo = new THREE.TorusGeometry(1.68, 0.045, 12, 60, Math.PI / 6);
            const spinnerMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.6 });
            this.spinner = new THREE.Mesh(spinnerGeo, spinnerMat);
            this.spinner.position.y = 0.2;
            scene.add(this.spinner);

            const trailGeo = new THREE.TorusGeometry(1.68, 0.022, 8, 60, Math.PI / 3.6);
            const trailMat = new THREE.MeshStandardMaterial({
                color: 0x888888, transparent: true, opacity: 0.35, roughness: 0.5, metalness: 0.3
            });
            this.spinnerTrail = new THREE.Mesh(trailGeo, trailMat);
            this.spinnerTrail.position.y = 0.2;
            scene.add(this.spinnerTrail);

            // Group the whole ring assembly so we can scale + rotate it together
            this.ringAssembly = new THREE.Group();
            this.ringAssembly.add(this.arc);
            this.ringAssembly.add(this.tickGroup);
            this.ringAssembly.add(this.ring);
            this.ringAssembly.add(this.spinner);
            this.ringAssembly.add(this.spinnerTrail);
            // Note: already added individually above; remove and re-add under group
            scene.remove(this.arc);
            scene.remove(this.tickGroup);
            scene.remove(this.ring);
            scene.remove(this.spinner);
            scene.remove(this.spinnerTrail);
            scene.add(this.ringAssembly);
        },

        animate() {
            this.animFrame = requestAnimationFrame(this.animate);
            const t = performance.now() * 0.001;
            const p = this.scrollProgress; // 0 → 1

            // Mouse parallax
            const mouseInfluence = 1 - Math.min(p * 2, 1);
            this.camera.position.x += (this.mouse.x * 0.4 * mouseInfluence - this.camera.position.x * mouseInfluence) * 0.04;
            this.camera.position.y += (-this.mouse.y * 0.2 * mouseInfluence - this.camera.position.y * mouseInfluence) * 0.04;

            // p 0→1: z goes from 5 → -0.5 (through the ring), y comes back to 0
            const camZ = 5 - p * 5.8;
            const camY = this.camera.position.y * (1 - p * 0.05);
            this.camera.position.z = camZ;
            if (p > 0.05) this.camera.position.y = camY;
            this.camera.lookAt(0, 0.2, 0);

            if (this.ringAssembly) {
                // Spin the whole assembly around Z as you scroll
                const baseRotZ = Math.PI + Math.sin(t * 0.12) * 0.015;
                this.ringAssembly.rotation.z = baseRotZ + p * Math.PI * 2.5;

                const s = 1 + p * 5.5;
                this.ringAssembly.scale.set(s, s, s);

                const throughRing = p >= 0.86;
                this.ringAssembly.visible = !throughRing;
            }

            if (this.spinner) this.spinner.rotation.z = t * 0.5;
            if (this.spinnerTrail) this.spinnerTrail.rotation.z = t * 0.5 - 0.3;

            if (this.particles) {
                this.particles.visible = p < 0.86;
                this.particles.rotation.y = t * 0.015;
                this.particles.rotation.x = Math.sin(t * 0.1) * 0.02;
                this.particles.scale.setScalar(1 + p * 3);
            }

            this.renderer.render(this.scene, this.camera);
        },


        onScroll() {
            const heroEl = this.$refs.heroScroll;
            if (!heroEl) return;


            // Total scrollable range = heroScroll height - viewport height
            const scrollTop = window.scrollY;
            const totalRange = heroEl.offsetHeight - 200;
            const p = Math.min(Math.max(scrollTop / totalRange, 0), 1);
            this.scrollProgress = p;

            const textP = Math.min(p / 0.5, 1);
            this.textOpacity = 1 - textP;
            this.textSlide = - textP * 40;

            const canvasP = Math.min(p / 0.9, 1);
            this.canvasOpacity = 1 - canvasP;

            this.scrollHintOpacity = Math.max(1 - p * 8, 0);

        },

        onMouseMove(e) {
            this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        },

        onResize() {
            const canvas = this.$refs.canvas;
            if (!canvas) return;
            const w = window.innerWidth;
            const h = window.innerHeight;
            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(w, h);
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-text{
    margin-top:5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.portfolio-root {
    background: #000;
}

.hero-scroll-container {
    height: 200vh;
    position: relative;
}

.sticky-hero {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    cursor: crosshair;
}

.three-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: none;
    /* driven by JS */
}

.name-block {
    text-align: center;
    line-height: 0.9;
    margin-bottom: 18px;
}

.name {
    color: rgb(236, 236, 236);
    font-family: "Montserrat", sans-serif;
    width: 90vw;
    font-size: clamp(1.8rem, 6vw, 5rem);
    font-weight: 300;
    letter-spacing: 0.05em;
    text-shadow:
        0 0 40px rgba(255, 255, 255, 0.35),
        0 0 80px rgba(255, 255, 255, 0.15),
        0 0 120px rgba(255, 255, 255, 0.08);
    user-select: none;
}

.bio {
    font-family: "Montserrat", sans-serif;
    font-size: clamp(0.45rem, 1vw, 0.72rem);
    letter-spacing: 0.12em;
    color: rgb(236, 236, 236);
    text-align: center;
    max-width: 900px;
    line-height: 1.7;
    padding: 0 24px;
    margin-bottom: 28px;
}

.hud-data {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: #3a3a3a;
    display: flex;
    gap: 10px;
    align-items: center;
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

.scroll-hint {
    position: absolute;
    bottom: 8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    pointer-events: none;
}

.scroll-hint-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.3em;
    color: #444;
}

.scroll-hint-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, #444, transparent);
    animation: scrollPulse 1.8s ease-in-out infinite;
}

@keyframes scrollPulse {

    0%,
    100% {
        transform: scaleY(1);
        opacity: 0.6;
    }

    50% {
        transform: scaleY(0.4);
        opacity: 0.2;
    }
}

.hud-corner {
    position: absolute;
    width: 24px;
    height: 24px;
    opacity: 0.45;
}

.hud-corner::before,
.hud-corner::after {
    content: '';
    position: absolute;
    background: #555;
}

.hud-corner::before {
    width: 100%;
    height: 1px;
}

.hud-corner::after {
    width: 1px;
    height: 100%;
}

.top-left {
    top: 28px;
    left: 28px;
}

.top-left::before {
    top: 0;
    left: 0;
}

.top-left::after {
    top: 0;
    left: 0;
}

.top-right {
    top: 28px;
    right: 28px;
}

.top-right::before {
    top: 0;
    right: 0;
}

.top-right::after {
    top: 0;
    right: 0;
}

.bottom-left {
    bottom: 28px;
    left: 28px;
}

.bottom-left::before {
    bottom: 0;
    left: 0;
}

.bottom-left::after {
    bottom: 0;
    left: 0;
}

.bottom-right {
    bottom: 28px;
    right: 28px;
}

.bottom-right::before {
    bottom: 0;
    right: 0;
}

.bottom-right::after {
    bottom: 0;
    right: 0;
}

.scan-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent);
    animation: scan 6s linear infinite;
    pointer-events: none;
}

@keyframes scan {
    0% {
        top: -2px;
    }

    100% {
        top: 100%;
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