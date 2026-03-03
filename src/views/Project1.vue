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

    <section>
        <div class="project_content_container">

            <h2 class="project_subtitle">Prior UI</h2>
            <p class="project_text">The goal is to study the current UI for Orbital Stack's main simulation page, compare it with other industry standard software, 
                and come up with a set of suggestions to modernize the feel and improve the page's UX</p>
            <img class= "inline_img" src="../assets/Sim_Before.png" alt="The main simulation page prior to changes">
            <p class="project_text">The first main task was to create an acurate user profile for the intended users of the software. Some of the key takeaways from our 
                typical user are as follows.
            </p>
            <ul class="list">
                <li class="project_text">Largly familiar with CAD software</li>
                <li class="project_text">Primaraly Engineering Backgrounds</li>
                <li class="project_text">Exclusicly Desktop Users</li>
                <li class="project_text">Need for fast and simple controls to streamline demos and presentations</li>
                <li class="project_text">Focous on clear results that can be shared with clients and other engineers</li>
            </ul>
            <p class="project_text">Working off of the user profile I created, I identified some software that targets the same audence. This included an extencive list
                of CAD and data analisis tools, mainly focousing on software with manipulable workspaces and the ability to create, edit or analize a virtual artifact. 
                Some examples of software I refrenced in this analisis are, Altium, Blender, Affinity, Autodesk Fusion 360, Autodesk Forma and more. 
            </p>
            <img class="inline_img" src="../assets/Altium_ExampleImg.png">
            <p class="project_text">Altium is a prime example showcasing some of the recuring trends that showed up across the comparison software. 
                it leans into the knowlage that its users are exclusicivly on desktop, allowing the UI elements to much more compressed, and geared toward
                precice mouse controll, rather than acoounting for larger mobile-frendly elements. This also allows for the view space to be larger, which is another
                reocouring trend. Maxamized view space to highlight the primary digital artifact, with surrounding controls often more condenced and compact. 
            </p>
            <br><br>
            <p class="project_text">Returning to the orignal Orbital Stack UI, there are some primary things to note, given these observed trends, namely:</p>
            <ul class="list">
                <li class="project_text">Toolbar is large, airy and leans more on mobile-frendly standards</li>
                <li class="project_text">Margins across the board are quite large, leading to less space for the main simulation window</li>
                <li class="project_text">The main sim window is cluttered with popup decorations</li>
                <li class="project_text">Sidebar and footer have excessive amounts of whitespace that could be better utilized to maximize view space</li>
            </ul>

            <img class= "inline_img" src="../assets/Sim_After.png" alt="The main simulation page after changes">

            <p class="project_text">With these in mind, I created some high-fedelity mockups illistrating a moderninzed and improved UX. By reducing excesss margins, 
                cutting down on unnessarary white space in the footer, and compleatly reworking the toolbar (including moving the decoration controls into the toolbar), 
                the new UI better fits the needs of the intended user. By maximaizing the sim window, engineers will better see and analize the data being displayed, 
                also making presentatons and demos more productive and informitive. Addionaly, consolodationg controls into the newly reworked toolbar will allow users 
                to stop searching around the view for the decoration they wish to show, and rather have all toggles in a central, easy to access location, streamiling 
                on-the-fly demos.
            </p>
        </div>

    </section>
    
</template>

<style scoped>

.project1{
    margin-top: 10rem;
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




</style>