<template>
    <div class="project-page">
        <div class="top-glow"></div>

        <div class="project-hero">
            <div class="project-hero-inner">
                <span class="project-tag">// WORK / PROJECTS</span>
                <h1 class="project-title">PAGE UI/UX<br>UPDATES</h1>
                <p class="project-subtitle">
                    Updates to the UI/UX of individual pages of the Orbital Stack software — both design and
                    implementation.
                </p>
                <div class="hud-row">
                    <span class="hud-label">TYPE</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">UI/UX DESIGN & IMPLEMENTATION</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-label">CLIENT</span>
                    <span class="hud-sep">|</span>
                    <span class="hud-value">RWDI — ORBITAL STACK</span>
                </div>
            </div>
            <img class="hero-img" src="../assets/Insight_TitleImg.png" alt="Page UI/UX Updates Title Image" />
        </div>

        <div class="project-content">

            <div class="content-block">
                <span class="section-tag">// 01</span>
                <h2 class="section-title">WORKFLOW OPTIMISATION: UPLOAD & ASSET SELECTION</h2>
                <p class="body-text">
                    Orbital Stack's expansive feature set contained legacy "initial-state" UIs that lacked the polish of
                    newer modules.
                    This initiative focused on refactoring two high-traffic areas: the Image Gallery/Upload component
                    and the
                    Metadata Definition workflow for custom file uploads.
                </p>
                <img class="inline-img" src="../assets/Insight_Before.png" alt="Legacy image gallery interface" />
                <p class="body-text">
                    Analysing the friction points of the legacy Image Gallery/Upload page revealed the original design
                    separated
                    Gallery and Upload functions into disparate tabs, creating several UX bottlenecks:
                </p>
                <ul class="item-list">
                    <li><span class="list-label">FRAGMENTED WORKFLOW</span> — Users had to switch between tabs to view
                        existing assets and upload new ones, disrupting task flow.</li>
                    <li><span class="list-label">INEFFICIENT SPACE</span> — The page layout concentrated all controls in
                        a small section, leaving the majority of the space unused.</li>
                    <li><span class="list-label">WEAK FEEDBACK</span> — The "currently selected" state was marginalised
                        on the far right with poor labelling, leading to user uncertainty.</li>
                </ul>
            </div>

            <div class="content-block">
                <span class="section-tag">// 02</span>
                <h2 class="section-title">DESIGN SOLUTIONS</h2>
                <p class="body-text">
                    I first expanded the size of the usable area — this new layout puts all functionality on one page,
                    streamlining
                    the upload process. By merging the gallery and upload tabs, I eliminated unnecessary tab-switching,
                    allowing for
                    a more linear and intuitive "Upload-to-Select" pipeline.
                </p>
                <p class="body-text">
                    I also increased the size of the upload area to improve accessibility, and redesigned the "currently
                    selected"
                    state to be more prominent, relocating it to a central position with clearer labelling and visual
                    cues to
                    enhance user confidence.
                </p>
                <img class="inline-img" src="../assets/Insight_After.png" alt="Redesigned image gallery interface" />
            </div>

            <div class="content-block">
                <span class="section-tag">// 03</span>
                <h2 class="section-title">CONTINUITY & METADATA ARCHITECTURE</h2>
                <p class="body-text">
                    Moving on to the second page for uploading metadata. The primary concern here was that the legacy
                    styling broke
                    the application's overall design language, creating a disjointed experience. The format also
                    concentrated
                    everything in a narrow centre row, creating dead space along the sides and extending the scroll
                    content.
                </p>
                <img class="inline-img inline-img--narrow" src="../assets/MetaData_Before.png"
                    alt="Legacy metadata upload page" />
                <p class="body-text">
                    I refactored the page to align with the application's established Modal and Grid Systems, creating a
                    more
                    cohesive user experience. I also restructured the layout to better utilise space, implementing a
                    more efficient
                    grid system that organises content logically and minimises unnecessary scrolling.
                </p>
                <img class="inline-img inline-img--narrow" src="../assets/MetaData_After.png"
                    alt="Redesigned metadata upload page" />
            </div>

        </div>
    </div>
</template>

<style scoped>
@import '../assets/project-shared.css';
</style>