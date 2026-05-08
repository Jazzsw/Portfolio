<template>
    <div class="project-page">
        <div class="top-glow"></div>

        <div class="project-hero">
            <div class="project-hero-inner">
                <span class="project-tag">// WORK / PROJECTS</span>
                <h1 class="project-title">SIMULATION SOFTWARE<br>USABILITY STUDY</h1>
                <p class="project-subtitle">
                    An analysis of usability and potential improvements for Orbital Stack's Climate Simulation Software.
                </p>
                <div class="hud-row">
                    <span class="hud-label">TYPE</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">UX RESEARCH & DESIGN</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-label">CLIENT</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">RWDI — ORBITAL STACK</span>
                </div>
            </div>
            <img class="hero-img" src="../assets/Sim_TitleImg.png" alt="Simulation Usability Title Image" />
        </div>

        <div class="project-content">

            <div class="content-block">
                <span class="section-tag">// 01</span>
                <h2 class="section-title">DESIGN AUDIT AND PROBLEM IDENTIFICATION</h2>
                <p class="body-text">
                    Orbital Stack's core simulation interface required a structural overhaul to better align with
                    industry-standard
                    engineering workflows. The goal was to modernize the aesthetic while significantly improving the UX
                    for
                    high-precision data analysis.
                </p>
                <img class="inline-img" src="../assets/Sim_Before.png"
                    alt="The main simulation page prior to changes" />
                <p class="body-text">
                    The first main task was to create an accurate user profile for the intended users of the software.
                    Some of the key takeaways from our typical user are as follows.
                </p>
                <ul class="item-list">
                    <li><span class="list-label">DOMAIN EXPERTISE</span> — Users are predominantly engineers with
                        extensive experience in CAD environments (AutoCAD, Revit, etc.).</li>
                    <li><span class="list-label">PLATFORM</span> — Exclusively desktop-based; requires high information
                        density over mobile-friendly spacing.</li>
                    <li><span class="list-label">WORKFLOW NEEDS</span> — Fast, intuitive controls for live demos and
                        high-fidelity results for stakeholder presentations.</li>
                </ul>
            </div>

            <div class="content-block">
                <span class="section-tag">// 02</span>
                <h2 class="section-title">COMPETITIVE ANALYSIS & BENCHMARKING</h2>
                <p class="body-text">
                    Working off of the user profile I created, I performed a Heuristic Evaluation and competitive audit
                    of other
                    industry-standard CAD and data analysis tools. I primarily focused on software with manipulable
                    workspaces
                    and the ability to create, edit, or analyze a virtual artifact — including Altium, Blender, and
                    Autodesk Fusion 360.
                </p>
                <img class="inline-img" src="../assets/Altium_ExampleImg.png" alt="Altium example interface" />
                <p class="body-text">
                    Altium showcases recurring trends across the comparison software. It leans into the knowledge that
                    its users are
                    exclusively on desktop, allowing UI elements to be much more compressed and geared toward precise
                    mouse control.
                    This also allows the view space to be larger, ensuring the main virtual artifact is prominently
                    displayed and
                    precise analysis can be performed.
                </p>
            </div>

            <div class="content-block">
                <span class="section-tag">// 03</span>
                <h2 class="section-title">IDENTIFYING FRICTION POINTS</h2>
                <p class="body-text">
                    When auditing the legacy Orbital Stack UI against these benchmarks, I identified several areas of UX
                    debt:
                </p>
                <ul class="item-list">
                    <li><span class="list-label">TOOLBAR</span> — Large and airy, leaning on mobile-friendly standards
                        unsuitable for the desktop-only user base.</li>
                    <li><span class="list-label">MARGINS</span> — Excessive margins reduced the available area for the
                        simulation window.</li>
                    <li><span class="list-label">CANVAS CLUTTER</span> — The simulation window was cluttered with
                        fragmented popup decorations, forcing users to search for specific toggles.</li>
                    <li><span class="list-label">WHITESPACE</span> — Sidebar and footer had excessive whitespace that
                        could be better utilised to maximize view space.</li>
                </ul>
            </div>

            <div class="content-block">
                <span class="section-tag">// 04</span>
                <h2 class="section-title">DESIGN SOLUTIONS</h2>
                <img class="inline-img" src="../assets/Sim_After.png" alt="The main simulation page after changes" />
                <p class="body-text">
                    With these in mind, I developed high-fidelity mockups focused on spatial optimisation and control
                    consolidation.
                    By reducing excess margins and cutting down whitespace in the footer, the space allocated to the
                    main simulation
                    window was greatly increased.
                </p>
                <p class="body-text">
                    I redesigned the toolbar to serve as a centralised hub, unifying the control architecture. By
                    migrating
                    "decoration" controls from the canvas into a consolidated menu, I streamlined the user's mental
                    model and
                    made finding controls more intuitive.
                </p>
            </div>

        </div>
    </div>
</template>

<style scoped>
@import '../assets/project-shared.css';
</style>