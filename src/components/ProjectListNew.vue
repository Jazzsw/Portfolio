<template>
    <div class="projects-section">
        <div class="projects-header">
            <span class="projects-tag">// SELECTED WORK</span>
            <h2 class="projects-title">PROJECTS</h2>
        </div>

        <div class="projects-grid">
            <router-link v-for="(project, i) in projectList" :key="i" :to="project.route" class="project-tile"
                :style="{ transitionDelay: `${i * 80}ms` }">
                <!-- <div
        v-for="(project, i) in projectList"
        :key="i"
        :to="project.route"
        class="project-tile"
        :style="{ transitionDelay: `${i * 80}ms` }"
      > -->
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
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'ProjectList',

    data() {
        return {
            projectList: [
                { title: 'Sim Usability Study', route: '/projects/sim-usability-study', company: 'ORBITAL STACK', desc: 'UX research and design for a climate analysis SaaS platform', tags: ['UX', 'FIGMA', 'SaaS', 'DESIGN RESEARCH'] },
                { title: 'SheetForge', route: '/projects/sheetforge', company: 'TDS', desc: 'Data parsing tool designed to streamline large scale price updates', tags: ['Electron.JS', 'Next.js', 'TAILWIND CSS'] },
                { title: 'Terminal Dungeon Runner', route: '/projects/dungeon-runner', company: 'UOFG', desc: 'Custom game engine development for terminal-based dungeon crawler', tags: ['C', 'Python', 'Curses', "Custom Game Engine"] },
                { title: 'Page UI/UX Updates', route: '/projects/page-ui-ux-updates', company: 'ORBITAL STACK', desc: 'Updates to the user interface and experience of Orbital Stack\'s primary interface', tags: ['VUE', 'FIGMA', 'UX'] },
                { title: 'Component Design', route: '/projects/component-design', company: 'ORBITAL STACK', desc: 'Custom component design and implementation for web applications', tags: ['VUE', 'FIGMA', 'UI'] },
                // { title: 'PROJECT EPSILON', route: '/projects/project-epsilon', company: '', desc: 'Comming Soon', tags: [] },
            ],
        };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.projects-section {
    background: #000;
    padding: 0px 60px 120px;
}

.projects-header {
    margin-bottom: 60px;
}

.projects-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    color: #444;
    display: block;
    margin-bottom: 12px;
}

.projects-title {
    font-family: "Montserrat", sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 200;
    color: #ccc;
    letter-spacing: 0.12em;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1px;
    border: 1px solid #1a1a1a;
}

.project-tile {
    padding: 36px 32px;
    border: 1px solid #111;
    display: flex;
    gap: 20px;
    cursor: pointer;
    position: relative;
    background: #000;
    transition: background 0.3s ease;
    text-decoration: none;
}

.project-tile:hover {
    background: #0a0a0a;
}

.project-tile:hover .tile-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
}

.project-tile:hover .tile-title {
    color: #fff;
}

.tile-number {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    color: #333;
    letter-spacing: 0.1em;
    padding-top: 4px;
    flex-shrink: 0;
}

.tile-body {
    flex: 1;
}

.tile-company {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.18em;
    color: #3a3a3a;
    display: block;
    margin-bottom: 6px;
}

.tile-title {
    font-family: "Montserrat", sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: #aaa;
    letter-spacing: 0.15em;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.tile-desc {
    font-family: "Montserrat", sans-serif;
    font-size: 0.7rem;
    color: #444;
    line-height: 1.7;
    letter-spacing: 0.04em;
    margin-bottom: 16px;
}

.tile-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tile-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.55rem;
    color: #333;
    letter-spacing: 0.12em;
    border: 1px solid #222;
    padding: 3px 8px;
}

.tile-arrow {
    font-size: 1.1rem;
    color: #333;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    align-self: flex-start;
    flex-shrink: 0;
}
</style>