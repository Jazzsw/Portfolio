<template>
    <section class="project1">
        <div class="container">
            <div class="projects_title">WORK / PROJECTS</div>
            <div class="projects_title_container">
                <h2 class="projects_tagline">Simulation Software Usability Study</h2>
                <p class="subtitle">An analisis of usability and potental improvements for Orbital Stack's Climate Simulation Software</p>
            </div>

            <img class="title_img" src="../assets/Sim_TitleImg.png" alt="Simulation Usibility Title Image">
        </div>
    </section>

    <section class ="project_content">
        <div class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#020005"></path></svg>
        </div>

        <div class="project_content_container">

            <h2 class="project_subtitle">01. Design Audit and Problem Identification</h2>
            <p class="project_text">Orbital Stack’s core simulation interface required a structural overhaul to better align with industry-standard
                engineering workflows. The goal was to modernize the aesthetic while significantly improving the UX for high-precision data analysis.</p>
            <img class= "inline_img" src="../assets/Sim_Before.png" alt="The main simulation page prior to changes">
            <p class="project_text">The first main task was to create an accurate user profile for the intended users of the software. Some of the key takeaways from our 
                typical user are as follows.
            </p>
            <ul class="list">
                <li class="project_text">Domain Expertise: Users are predominantly engineers with extensive experience in CAD environments (AutoCAD, Revit, etc.).</li>
                <li class="project_text">Platform Specifics: Exclusively desktop-based; requires high information density over mobile-friendly spacing.</li>
                <li class="project_text">Workflow Needs: Fast, intuitive controls for live demos and high-fidelity results for stakeholder presentations.</li>
            </ul>

            <h2 class="project_subtitle">02. Competitive Analysis & Benchmarking</h2>
            <p class="project_text">Working off of the user profile I created, I performed a Heuristic Evaluation and competitive audit of other 
                industry-standard CAD and data analysis tools. I primarily focused on software with manipulable workspaces and the ability to create,
                 edit or analyze a virtual artifact. These software included Altium, Blender, Autodesk Fusion 360, and more. 
            </p>
            <img class="inline_img" src="../assets/Altium_ExampleImg.png">
            <p class="project_text">Altium is a prime example showcasing some of the recurring trends that showed up across the comparison software. 
                it leans into the knowledge that its users are exclusivity on desktop, allowing the UI elements to much more compressed, and geared toward
                precise mouse control, rather than accounting for larger mobile-friendly elements. This also allows for the view space to be larger, ensuring
                the main virtual artifact is prominently displayed, and precise analysis can be performed.
            </p>
            
            <h2 class="project_subtitle">03. Identifying Friction Points</h2>

            <p class="project_text">When auditing the legacy Orbital Stack UI against these benchmarks, I identified several areas of UX Debt:</p>
            <ul class="list">
                <li class="project_text">Toolbar is large, airy and leans more on mobile-friendly standards</li>
                <li class="project_text">Excessive margins reduced the available area for the simulation window.</li>
                <li class="project_text">The main simulation window was cluttered with fragmented popup decorations, forcing users to search the screen for specific toggles.</li>
                <li class="project_text">Sidebar and footer have excessive amounts of whitespace that could be better utilized to maximize view space</li>
            </ul>

            <h2 class="project_subtitle">04. Design Solutions</h2>

            <img class= "inline_img" src="../assets/Sim_After.png" alt="The main simulation page after changes">

            <p class="project_text">With these in mind, I developed high-fidelity mockups focused on spatial optimization and control consolidation. By reducing excess margins, 
                cutting down on white space in the footer, the space allocated to the main simulation window can be greatly increased. 

                I redesigned the toolbar to serve as a centralized hub I unified the control architecture. By migrating "decoration" controls from the canvas into a consolidated menu,
                I streamlined the user’s mental model, and made finding controls more intuitive.
                
                
            </p>
        </div>

    </section>

    <div id="contact" class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#0e0c12"></path></svg>
    </div>
    
</template>

<style scoped>

.project1{
    margin-top: 10rem;
    display: flex;
    justify-content: center;
}

.list{
    width: 65%;
}

.container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.project_content_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project_content{
    background-color: #0e0c12;
}




</style>