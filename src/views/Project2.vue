<template>
    <section class="project2">
        <div class="container">
            <div class="projects_title">WORK / PROJECTS</div>
            <div class="projects_title_container">
                <h2 class="projects_tagline">Page UI/UX Updates</h2>
                <p class="subtitle">Updates to the UI/UX of individual pages of the Orbital Stack Software. Both design and implementation.</p>
            </div>

            <img class="title_img" src="../assets/Insight_TitleImg.png" alt="Page UI/UX Updates Title Image">
        </div>
    </section>

    <section class ="project_content">

        <div class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#020005"></path></svg>
        </div>
        <h2 class="project_subtitle">01. Workflow Optimization: Upload & Asset Selection</h2>

        <p class="project_text">Orbital Stack’s expansive feature set contained legacy "initial-state" UIs that lacked the polish of newer modules. This initiative focused on refactoring two 
            high-traffic areas: the Image Gallery/Upload component and the Metadata Definition workflow for custom file uploads.
            </p>

            <img class="inline_img" src="../assets/Insight_Before.png">

            <p class="project_text">First analyzing the friction points of the legacy Image Gallery/Upload page. The original design separated the Gallery and Upload functions into disparate tabs, creating several UX bottlenecks:
            </p>  
            <ul class="list">
                <li class="project_text">Fragmented Workflow: Users had to switch between tabs to view existing assets and upload new ones, disrupting task flow.</li>
                <li class="project_text">Inefficient Use of Space: The page layout concentrated all controls in a small section, leaving the majority of the space unused.</li>
                <li class="project_text">Weak Visual Feedback: The "currently selected" state was marginalized on the far right with poor labeling, leading to user uncertainty.</li>
            </ul>
            
            <h2 class="project_subtitle">02. Design Solutions</h2>

            <p class="project_text">I first expanded the size of the usable area, this new layout puts all functionality on one page, streamlining the upload process.
                By merging the gallery and upload tabs, I also eliminated unnecessary tab-switching, allowing for a more linear and intuitive "Upload-to-Select" pipeline.
                I was also able to increase the size of the upload area improving accessibility. Finally, I redesigned the "currently selected" state to be more prominent and intuitive,
                relocating it to a central position with clearer labeling and visual cues, enhancing user confidence in their selections.
            </p>

            <img class="inline_img" src="../assets/Insight_After.png">

            <h2 class="project_subtitle">03. Continuity & Metadata Architecture</h2>

            <p class="project_text">Continuing with this project, moving on to the second page for uploading metadata. For this page the main concern is primarily the 
                fact the legacy styling broke the application's overall design language, creating a disjointed experience for the user. The format
                also concentrates everything in a narrow center row, creating dead space along the sides and extending the scroll content.
            </p>

            <img class="inline_img" style="width:30%" src="../assets/MetaData_Before.png">

            <p class="project_text">I refactored the page to align with the application’s established Modal and Grid Systems to create a more cohesive user experience.
                I also restructured the layout to better utilize space, implementing a more efficient grid system that organizes content logically and minimizes unnecessary scrolling.
            </p>

            <img class="inline_img" style="width:30%" src="../assets/MetaData_After.png">
    </section>

    <div id="contact" class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#0e0c12"></path></svg>
      </div>
    
</template>


<style scoped>
.project2{
    margin-top: 10rem;
    display: flex;
    justify-content: center;
}

.container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.project_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0e0c12;
}

.divider{
    width: 100%;
}



</style>