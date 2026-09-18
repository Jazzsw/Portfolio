<template>
    <div class="portfolio-root" ref="root">
        <!-- Hero + street scroll container: ring flythrough, then project tiles -->
        <div class="hero-scroll-container" ref="heroScroll" :style="{ height: totalHeightVh + 'vh' }">
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

                <!-- Project tiles: real, clickable DOM elements positioned in 3D space -->
                <div class="street-tiles">
                    <div v-for="(project, i) in projectList" :key="project.route" class="street-tile-anchor"
                        :ref="el => setTileRef(el, i)">
                        <router-link :to="project.route" class="street-tile"
                            :class="i % 2 === 0 ? 'tile-left' : 'tile-right'">
                            <div class="tile-number">0{{ i + 1 }}</div>
                            <div class="tile-body">
                                <span v-if="project.company" class="tile-company">{{ project.company }}</span>
                                <h3 class="tile-title">{{ project.title }}</h3>
                                <p class="tile-desc">{{ project.desc }}</p>
                                <div class="tile-tags">
                                    <span v-for="tag in project.tags" :key="tag" class="tile-tag">{{ tag }}</span>
                                </div>
                            </div>
                            <div class="tile-arrow">↗</div>
                        </router-link>
                    </div>

                    <!-- Outro card: the footer, parked centre-road at the end -->
                    <div class="street-tile-anchor" :ref="el => setTileRef(el, projectList.length)">
                        <div class="street-tile tile-outro">
                            <div class="outro-block">
                                <span class="outro-label">// IDENTITY</span>
                                <p class="outro-name">JAZZ STOCKER-WITTERICK</p>
                                <div class="outro-row">
                                    <span class="outro-key">LOC</span>
                                    <span class="outro-sep">|</span>
                                    <span class="outro-value">43.6532° N, 79.3832° W</span>
                                </div>
                                <div class="outro-row">
                                    <span class="outro-key">STATUS</span>
                                    <span class="outro-sep">|</span>
                                    <span class="outro-value">AVAILABLE FOR WORK</span>
                                </div>
                            </div>

                            <div class="outro-block">
                                <span class="outro-label">// LINKS</span>
                                <div class="outro-links">
                                    <a href="https://github.com/Jazzsw" target="_blank"
                                        rel="noopener noreferrer" class="outro-link">
                                        <img :src="icons.github" alt="GitHub" class="outro-icon" />
                                        <span>GITHUB</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jazzsw/" target="_blank"
                                        rel="noopener noreferrer" class="outro-link">
                                        <img :src="icons.linkedin" alt="LinkedIn" class="outro-icon" />
                                        <span>LINKEDIN</span>
                                    </a>
                                    <a href="mailto:jazzswdev@gmail.com" class="outro-link">
                                        <img :src="icons.gmail" alt="Email" class="outro-icon" />
                                        <span>EMAIL</span>
                                    </a>
                                </div>
                            </div>

                            <div class="outro-bottom">
                                <span class="outro-value">© 2025 JAZZ STOCKER-WITTERICK — ALL RIGHTS RESERVED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
// Same relative paths Footer.vue uses — adjust if this component doesn't sit in
// the same directory as Footer.vue.
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import gmailIcon from '../assets/gmail.svg';

// ── Street / tile tuning ────────────────────────────────────────────────────
// Everything below is in "world units" (Three.js scene space) or "vh" (scroll
// distance). Tweak these to change pacing/feel without touching the logic.
const RING_END_Z = -0.8;            // camera z where the ring flythrough ends
const TILE_SPACING = 10.6;           // world units between consecutive tiles along Z
const TILE_START_Z = -5.0;          // z of the first tile (short gap after the ring)
const TILE_Y = 0.25;                // height of tiles above the "road"
const TILE_SPAWN_DIST = TILE_SPACING * 0.95; // how far ahead a tile starts becoming visible
const TILE_PASS_FADE = 0.5;         // world units over which a tile fades out as it passes
const TILE_MIN_SCALE = 0.2;         // scale when a tile first spawns, far ahead
const TILE_MAX_SCALE = 2.5;        // scale at closest approach

const RING_SCROLL_VH = 140;         // scrollable vh spent flying through the ring
const PER_TILE_VH = 70;             // scrollable vh spent approaching + passing each tile
const END_FADE_VH = 20;             // scrollable vh at the end where the whole scene fades

const CAM_START_Z = 5;                              // camera z at scroll 0
const RING_TRAVEL_Z = CAM_START_Z - RING_END_Z;     // world units covered during the ring phase
// The ring phase and the street move at very different speeds per scrolled pixel
// (the street is ~3.7x faster). Ramping from one to the other over this many vh of
// street scroll keeps the forward velocity continuous instead of lurching at the
// handoff. Set to 0 to go back to an instant speed change.
const STREET_EASE_VH = 45;

const RING_SPEED_PER_VH = RING_TRAVEL_Z / RING_SCROLL_VH;
const STREET_SPEED_PER_VH = TILE_SPACING / PER_TILE_VH;

// ── Outro card (the footer, parked in the middle of the road) ───────────────
// It sits one tile-spacing past the last project, on the centre line rather than
// off to a side, and the camera coasts to a stop in front of it instead of flying
// through — it's the destination, not another thing you pass.
const OUTRO_VIEW_DIST = 4.2;        // world units the camera parks in front of the card
const OUTRO_DECEL_VH = 60;          // vh spent easing from cruise speed down to a stop
const OUTRO_HOLD_VH = 45;           // vh of dead stop before the end fade, to read/click

const LOOK_AHEAD_DIST = 10;         // how far ahead of the camera the aim point sits

const clamp01 = v => Math.min(Math.max(v, 0), 1);
const smoothstep01 = v => { const u = clamp01(v); return u * u * (3 - 2 * u); };

export default {
    name: 'JazzPortfolio',

    data() {
        return {
            animFrame: null,
            mouse: { x: 0, y: 0 },
            icons: { github: githubIcon, linkedin: linkedinIcon, gmail: gmailIcon },

            projectList: [
                { title: 'Sim Usability Study', route: '/projects/sim-usability-study', company: 'ORBITAL STACK', desc: 'UX research and design for a climate analysis SaaS platform', tags: ['UX', 'FIGMA', 'SaaS', 'DESIGN RESEARCH'] },
                { title: 'SheetForge', route: '/projects/sheetforge', company: 'TDS', desc: 'Data parsing tool designed to streamline large scale price updates', tags: ['Electron.JS', 'Next.js', 'TAILWIND CSS'] },
                { title: 'Terminal Dungeon Runner', route: '/projects/dungeon-runner', company: 'UOFG', desc: 'Custom game engine development for terminal-based dungeon crawler', tags: ['C', 'Python', 'Curses', "Custom Game Engine"] },
                { title: 'Page UI/UX Updates', route: '/projects/page-ui-ux-updates', company: 'ORBITAL STACK', desc: 'Updates to the user interface and experience of Orbital Stack\'s primary interface', tags: ['VUE', 'FIGMA', 'UX'] },
                { title: 'Component Design', route: '/projects/component-design', company: 'ORBITAL STACK', desc: 'Custom component design and implementation for web applications', tags: ['VUE', 'FIGMA', 'UI'] },
            ],

            // Scroll state
            scrollProgress: 0,   // 0 → 1 over the ring-flythrough portion only
            textOpacity: 1,
            textSlide: 0,
            scrollHintOpacity: 1,
            canvasOpacity: 1,
        };
    },

    computed: {
        // Total height of the scroll container: 1 viewport to rest on, plus the
        // ring flythrough, plus one segment per project tile, plus an end fade.
        totalHeightVh() {
            const { cruiseVh } = this.streetPlan;
            return 100 + RING_SCROLL_VH
                + STREET_EASE_VH + cruiseVh + OUTRO_DECEL_VH + OUTRO_HOLD_VH
                + END_FADE_VH;
        },

        // Where the street ends, and how much scroll each of its three sub-phases
        // (speed-up ramp → cruise → coast to a stop) gets. Derived rather than
        // hardcoded, so adding a project still lands the camera exactly
        // OUTRO_VIEW_DIST in front of the outro card with nothing to retune.
        streetPlan() {
            const outroZ = TILE_START_Z - this.projectList.length * TILE_SPACING;
            const stopZ = outroZ + OUTRO_VIEW_DIST;
            const totalDist = RING_END_Z - stopZ;          // world units of street travel
            // Distance covered by the two variable-speed sections (mean speed x length).
            const easeDist = STREET_EASE_VH * (RING_SPEED_PER_VH + STREET_SPEED_PER_VH) / 2;
            const decelDist = OUTRO_DECEL_VH * STREET_SPEED_PER_VH / 2;
            // Whatever's left runs at full speed, so each project still gets PER_TILE_VH.
            const cruiseVh = Math.max((totalDist - easeDist - decelDist) / STREET_SPEED_PER_VH, 0);
            return { outroZ, stopZ, totalDist, cruiseVh };
        },
    },

    created() {
        // Plain (non-reactive) instance state — same pattern as scene/camera/renderer
        // below, kept out of `data()` since none of this drives the template directly.
        this.tileEls = [];
        this.tileAnchors = [];
        this.ringFadeMats = [];
        this.lateralOffset = 2.15;
        this.streetCameraZ = RING_END_Z;
        this._tmpVec1 = new THREE.Vector3();
        this._tmpVec2 = new THREE.Vector3();
        this._tmpVec3 = new THREE.Vector3();
        this._tmpForward = new THREE.Vector3();
    },

    mounted() {
        this.updateResponsiveTileConfig(); // sets lateralOffset + tileAnchors before first frame
        this.initThree();
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll(); // sync immediately in case the page didn't load at scrollY 0
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
        setTileRef(el, i) {
            if (el) this.tileEls[i] = el;
        },

        // Narrower screens get tiles placed closer to center so they stay on-screen.
        updateResponsiveTileConfig() {
            const w = window.innerWidth;
            this.lateralOffset = w < 640 ? 1.15 : w < 1024 ? 1.7 : 2.15;
            this.updateTileAnchors();
        },

        updateTileAnchors() {
            this.tileAnchors = this.projectList.map((_, i) => {
                const side = i % 2 === 0 ? -1 : 1; // alternate left/right
                const z = TILE_START_Z - i * TILE_SPACING;
                return new THREE.Vector3(side * this.lateralOffset, TILE_Y, z);
            });
            // The outro card is the last anchor: dead centre, end of the road.
            this.tileAnchors.push(new THREE.Vector3(0, TILE_Y, this.streetPlan.outroZ));
        },

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
            this.camera.position.set(0, 0, CAM_START_Z);

            this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setSize(w, h);
            this.renderer.setClearColor(0x000000, 1);

            this.buildScene();
            this.animate();
        },

        buildScene() {
            const scene = this.scene;

            // How far down -Z the "street" runs, so the ground/atmosphere reach every tile.
            const lastTileZ = TILE_START_Z - (this.projectList.length - 1) * TILE_SPACING;
            const streetDepth = Math.abs(lastTileZ) + 6;

            // Main arc (semicircle)
            const arcGeo = new THREE.TorusGeometry(1.68, 0.012, 8, 200, Math.PI);
            const arcMat = new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true });
            this.arc = new THREE.Mesh(arcGeo, arcMat);
            this.arc.rotation.z = Math.PI;
            this.arc.position.y = 0.2;
            scene.add(this.arc);

            // Tick marks
            this.tickGroup = new THREE.Group();
            const tickMat = new THREE.MeshBasicMaterial({ color: 0x444444, transparent: true });
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
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x333333, transparent: true });
            this.ring = new THREE.Mesh(ringGeo, ringMat);
            this.ring.position.y = 0.2;
            scene.add(this.ring);

            // Ground grid — the near-camera portion is unchanged from the original;
            // it's simply extended so the "road" runs the full length of the street.
            this.gridGroup = new THREE.Group();
            const gridMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a });
            const crossLineCount = Math.ceil(streetDepth / 0.5) + 2;
            for (let i = 0; i < crossLineCount; i++) {
                const z = -i * 0.5;
                const spread = Math.min(6 + i * 0.6, 42);
                const pts = [new THREE.Vector3(-spread, -2.8, z), new THREE.Vector3(spread, -2.8, z)];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                this.gridGroup.add(new THREE.Line(geo, gridMat));
            }
            // Converging "lane" lines near the camera (unchanged)...
            for (let i = -10; i <= 10; i++) {
                const pts = [new THREE.Vector3(i * 0.65, -2.8, 0), new THREE.Vector3(i * 0.1, -2.8, -8)];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                this.gridGroup.add(new THREE.Line(geo, gridMat));
            }
            // ...continuing near-parallel down the rest of the street.
            for (let i = -10; i <= 10; i += 2) {
                const pts = [new THREE.Vector3(i * 0.1, -2.8, -8), new THREE.Vector3(i * 0.1, -2.8, -streetDepth)];
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                this.gridGroup.add(new THREE.Line(geo, gridMat));
            }
            scene.add(this.gridGroup);

            // Ring-phase particles — identical to the original "flying through stars" field.
            const pCount = 180;
            const pPositions = new Float32Array(pCount * 3);
            for (let i = 0; i < pCount; i++) {
                pPositions[i * 3] = (Math.random() - 0.5) * 14;
                pPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
                pPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
            }
            const pGeo = new THREE.BufferGeometry();
            pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
            const pMat = new THREE.PointsMaterial({ color: 0x888888, size: 0.012, transparent: true });
            this.particles = new THREE.Points(pGeo, pMat);
            scene.add(this.particles);

            // Street-phase particles — a second, separate field spread across the
            // whole street length, so the "sky" isn't empty once the ring flourish ends.
            const spCount = Math.min(180 + Math.round(streetDepth * 14), 900);
            const spPositions = new Float32Array(spCount * 3);
            for (let i = 0; i < spCount; i++) {
                spPositions[i * 3] = (Math.random() - 0.5) * 16;
                spPositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
                spPositions[i * 3 + 2] = 3 - Math.random() * (streetDepth + 6);
            }
            const spGeo = new THREE.BufferGeometry();
            spGeo.setAttribute('position', new THREE.BufferAttribute(spPositions, 3));
            const spMat = new THREE.PointsMaterial({ color: 0x666666, size: 0.01, transparent: true, opacity: 0.7 });
            this.streetParticles = new THREE.Points(spGeo, spMat);
            scene.add(this.streetParticles);

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
            const spinnerMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.6, transparent: true });
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

            // Materials faded together as the ring flourish ends (base opacity kept
            // so the trail stays semi-transparent rather than snapping to full).
            this.ringFadeMats = [
                { mat: arcMat, base: 1 },
                { mat: tickMat, base: 1 },
                { mat: ringMat, base: 1 },
                { mat: spinnerMat, base: 1 },
                { mat: trailMat, base: 0.35 },
            ];

            // Group the whole ring assembly so we can scale + rotate it together
            this.ringAssembly = new THREE.Group();
            this.ringAssembly.add(this.arc);
            this.ringAssembly.add(this.tickGroup);
            this.ringAssembly.add(this.ring);
            this.ringAssembly.add(this.spinner);
            this.ringAssembly.add(this.spinnerTrail);
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
            const pRing = this.scrollProgress; // 0 → 1, ring phase only
            const camera = this.camera;

            // ── Camera position ────────────────────────────────────────────────
            const ringZ = CAM_START_Z - pRing * RING_TRAVEL_Z;
            camera.position.z = pRing < 1 ? ringZ : this.streetCameraZ;

            // Ring parallax and street drift are blended into a single target rather
            // than swapped at pRing === 1. Mouse parallax fades out over the first
            // half of the ring phase; the street pose (raised eye-line + idle drift)
            // fades in over the second half, so by the time the phases hand over the
            // camera is already sitting exactly where the street phase wants it.
            const mouseInfluence = 1 - smoothstep01(pRing * 2);
            const streetInfluence = smoothstep01((pRing - 0.5) / 0.5);

            const targetX =
                this.mouse.x * 0.4 * mouseInfluence +
                Math.sin(t * 0.12) * 0.12 * streetInfluence;
            const targetY =
                -this.mouse.y * 0.2 * mouseInfluence +
                (TILE_Y * 0.4 + Math.sin(t * 0.2) * 0.02) * streetInfluence;

            camera.position.x += (targetX - camera.position.x) * 0.04;
            camera.position.y += (targetY - camera.position.y) * 0.04;

            // ── Look target ────────────────────────────────────────────────────
            // The aim point is always a fixed distance AHEAD of the camera. It used
            // to be the ring's centre (0, 0.2, 0), which the camera flies through at
            // pRing ≈ 0.86 — as the distance to that point collapses toward zero the
            // angle to it explodes, so lookAt() whipped the camera up and around just
            // before the street appeared. A target that travels with the camera can
            // never be passed, so the orientation stays stable the whole way through.
            const lookBlend = smoothstep01((pRing - 0.5) / 0.5);
            const aimY = 0.2 + (TILE_Y * 0.4 - 0.2) * lookBlend;
            // Ring phase aims at the world centre line (so mouse parallax still swings
            // the view slightly); street phase aims straight down the camera's own axis.
            const aimX = camera.position.x * lookBlend;
            const lookTarget = this._tmpVec1.set(aimX, aimY, camera.position.z - LOOK_AHEAD_DIST);
            camera.lookAt(lookTarget);
            camera.updateMatrixWorld(); // keep matrices current for this frame's tile projection

            // Ring + ring-particles used to be switched off outright at pRing 0.86,
            // which popped — the scaled particle field still reaches well past the
            // camera at that point. Fade them out over a window instead.
            const ringFade = 1 - smoothstep01((pRing - 0.74) / 0.12);

            if (this.ringAssembly) {
                const baseRotZ = Math.PI + Math.sin(t * 0.12) * 0.015;
                this.ringAssembly.rotation.z = baseRotZ + pRing * Math.PI * 2.5;
                const s = 1 + pRing * 5.5;
                this.ringAssembly.scale.set(s, s, s);
                this.ringAssembly.visible = ringFade > 0.001;
                this.ringFadeMats.forEach(({ mat, base }) => { mat.opacity = base * ringFade; });
            }

            if (this.spinner) this.spinner.rotation.z = t * 0.5;
            if (this.spinnerTrail) this.spinnerTrail.rotation.z = t * 0.5 - 0.3;

            if (this.particles) {
                this.particles.visible = ringFade > 0.001;
                this.particles.material.opacity = ringFade;
                this.particles.rotation.y = t * 0.015;
                this.particles.rotation.x = Math.sin(t * 0.1) * 0.02;
                this.particles.scale.setScalar(1 + pRing * 3);
            }
            if (this.streetParticles) {
                this.streetParticles.rotation.y = t * 0.008;
            }

            this.updateStreetTiles();
            this.renderer.render(this.scene, this.camera);
        },

        // Positions each project tile's real DOM element by projecting its 3D
        // anchor into screen space every frame — the tiles stay actual, clickable
        // <router-link> elements, just transformed to look like they're in 3D.
        updateStreetTiles() {
            const camera = this.camera;
            const forward = camera.getWorldDirection(this._tmpForward);
            const w = window.innerWidth;
            const h = window.innerHeight;

            this.tileAnchors.forEach((anchor, i) => {
                const el = this.tileEls[i];
                if (!el) return;

                const diff = this._tmpVec3.subVectors(anchor, camera.position);
                const dot = diff.dot(forward); // depth "ahead" of the camera along its view direction

                if (dot <= 0.04) {
                    // Behind (or right at) the camera — hide to avoid projection artifacts.
                    el.style.opacity = 0;
                    el.style.pointerEvents = 'none';
                    return;
                }

                const ndc = this._tmpVec2.copy(anchor).project(camera);
                const screenX = (ndc.x + 1) / 2 * w;
                const screenY = (1 - ndc.y) / 2 * h;

                // proximity: 0 = just spawned far ahead, 1 = right at the camera
                const proximity = 1 - Math.min(Math.max(dot / TILE_SPAWN_DIST, 0), 1);
                const scale = TILE_MIN_SCALE + proximity * (TILE_MAX_SCALE - TILE_MIN_SCALE);

                let opacity = 1;
                if (proximity < 0.12) opacity = proximity / 0.12;        // fade in on spawn
                opacity = Math.min(opacity, dot / TILE_PASS_FADE);       // fade out on pass
                opacity = Math.max(0, Math.min(1, opacity));

                el.style.opacity = String(opacity);
                el.style.pointerEvents = opacity > 0.15 ? 'auto' : 'none';
                el.style.zIndex = String(1000 - Math.round(dot * 10)); // nearer tiles stack above farther ones
                el.style.transform =
                    `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%) scale(${scale})`;
            });
        },

        onScroll() {
            const heroEl = this.$refs.heroScroll;
            if (!heroEl) return;

            const viewportH = window.innerHeight;
            // Position relative to the container itself, not raw window.scrollY, so this
            // still works correctly regardless of what's above this section on the page.
            const scrolled = Math.max(-heroEl.getBoundingClientRect().top, 0);
            const totalRange = Math.max(heroEl.offsetHeight - viewportH, 1);
            const clampedScroll = Math.min(scrolled, totalRange);

            // ── Phase A: ring flythrough ──
            const ringRangePx = (RING_SCROLL_VH / 100) * viewportH;
            const pRing = Math.min(Math.max(clampedScroll / ringRangePx, 0), 1);
            this.scrollProgress = pRing;

            const textP = Math.min(pRing / 0.5, 1);
            this.textOpacity = 1 - textP;
            this.textSlide = -textP * 40;
            this.scrollHintOpacity = Math.max(1 - pRing * 8, 0);

            // ── Phase B: street (project tiles) ──
            // Position stayed continuous across the handoff, but SPEED did not: the
            // ring covers RING_TRAVEL_Z over RING_SCROLL_VH while the street covers
            // TILE_SPACING over PER_TILE_VH — roughly 3.7x faster. Jumping straight to
            // street speed reads as a bump even though the camera never teleports, so
            // ease from one velocity to the other over the first STREET_EASE_VH.
            const streetPx = Math.max(clampedScroll - ringRangePx, 0);
            const perTilePx = (PER_TILE_VH / 100) * viewportH;
            const ringSpeed = RING_TRAVEL_Z / ringRangePx;   // world units per scroll px at handoff
            const streetSpeed = TILE_SPACING / perTilePx;    // world units per scroll px at cruise
            const easePx = (STREET_EASE_VH / 100) * viewportH;

            const cruisePx = (this.streetPlan.cruiseVh / 100) * viewportH;
            const decelPx = (OUTRO_DECEL_VH / 100) * viewportH;
            const easeDist = easePx * (ringSpeed + streetSpeed) / 2;  // mean speed x length
            const cruiseDist = streetSpeed * cruisePx;

            let travelled;
            if (easePx > 0 && streetPx < easePx) {
                // Speed up. Integral of smoothstep, so velocity AND acceleration are
                // continuous at both ends of the ramp.
                const u = streetPx / easePx;
                travelled = ringSpeed * streetPx
                    + (streetSpeed - ringSpeed) * easePx * (u * u * u - (u * u * u * u) / 2);
            } else if (streetPx < easePx + cruisePx) {
                // Cruise past the projects at TILE_SPACING per PER_TILE_VH.
                travelled = easeDist + streetSpeed * (streetPx - easePx);
            } else if (streetPx < easePx + cruisePx + decelPx) {
                // Coast to a stop in front of the outro card: the same smoothstep
                // integral mirrored, so the camera leaves cruise speed and arrives at
                // zero with no kick at either end.
                const u = (streetPx - easePx - cruisePx) / decelPx;
                travelled = easeDist + cruiseDist
                    + streetSpeed * decelPx * (u - (u * u * u - (u * u * u * u) / 2));
            } else {
                // Parked. The remaining scroll is the hold + end fade.
                travelled = easeDist + cruiseDist + streetSpeed * decelPx * 0.5;
            }
            this.streetCameraZ = RING_END_Z - travelled;

            // ── End fade (after the last tile has passed) ──
            const endFadePx = (END_FADE_VH / 100) * viewportH;
            const remaining = totalRange - clampedScroll;
            this.canvasOpacity = remaining < endFadePx ? Math.max(remaining / endFadePx, 0) : 1;
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
            this.updateResponsiveTileConfig();
            this.onScroll();
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

.main-text {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.portfolio-root {
    background: #000;
}

.hero-scroll-container {
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
    z-index: 1;
    pointer-events: none;
}

.content {
    position: absolute;
    inset: 0;
    z-index: 2;
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

/* ── Project street tiles ─────────────────────────────────────────────── */

.street-tiles {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    perspective: 1000px;
}

.street-tile-anchor {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    will-change: transform, opacity;
}

.street-tile {
    display: block;
    width: min(320px, 78vw);
    padding: 28px 26px;
    background: rgba(0, 0, 0, 0.62);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid #1c1c1c;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;
}

.street-tile.tile-left {
    transform: rotateY(9deg);
    transform-origin: right center;
}

.street-tile.tile-right {
    transform: rotateY(-9deg);
    transform-origin: left center;
}

.street-tile:hover {
    background: rgba(12, 12, 12, 0.82);
    border-color: #333;
}

.street-tile:hover .tile-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
}

.street-tile:hover .tile-title {
    color: #fff;
}

.tile-number {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    color: #444;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
}

.tile-body {
    display: flex;
    flex-direction: column;
}

.tile-company {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.18em;
    color: #4a4a4a;
    display: block;
    margin-bottom: 6px;
}

.tile-title {
    font-family: "Montserrat", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #bbb;
    letter-spacing: 0.12em;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.tile-desc {
    font-family: "Montserrat", sans-serif;
    font-size: 0.72rem;
    color: #555;
    line-height: 1.7;
    letter-spacing: 0.02em;
    margin-bottom: 16px;
}

.tile-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
}

.tile-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    color: #444;
    letter-spacing: 0.1em;
    border: 1px solid #222;
    padding: 3px 8px;
}

.tile-arrow {
    font-size: 1.1rem;
    color: #444;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* ── Outro card ───────────────────────────────────────────────────────────
   Uses the same .street-tile shell as the projects so it spawns, scales and
   fades through the identical code path. Width is deliberately small: the tile
   projection scales it up by ~1.6x at the parked distance, so 46vw lands at
   ~75vw on screen instead of overflowing on narrow viewports. */

.street-tile.tile-outro {
    width: min(300px, 46vw);
    padding: 24px 22px;
    transform: none;
    cursor: default;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.street-tile.tile-outro:hover {
    background: rgba(0, 0, 0, 0.62);
    border-color: #1c1c1c;
}

.outro-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.outro-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.25em;
    color: #444;
}

.outro-name {
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #aaa;
    letter-spacing: 0.12em;
}

.outro-row {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
}

.outro-key {
    color: #4a4a4a;
}

.outro-value {
    color: #666;
}

.outro-sep {
    color: #2a2a2a;
}

.outro-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.outro-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    color: #444;
    transition: color 0.3s ease;
}

.outro-link:hover {
    color: #888;
}

.outro-icon {
    width: 0.9rem;
    height: 0.9rem;
    object-fit: contain;
    filter: invert(30%) sepia(0%) brightness(80%);
    transition: filter 0.3s ease;
    flex-shrink: 0;
}

.outro-link:hover .outro-icon {
    filter: invert(60%) sepia(0%) brightness(100%);
}

.outro-bottom {
    padding-top: 14px;
    border-top: 1px solid #111;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
}
</style>