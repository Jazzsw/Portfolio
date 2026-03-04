<template>
    <section class="project2">
        <div class="container">
            <div class="projects_title">WORK / PROJECTS</div>
            <div class="projects_title_container">
                <h2 class="projects_tagline">Page UI/UX Updates</h2>
                <p class="subtitle">Updates to the UI/UX of individual pages of the Orbital Stack Software. Both design and implementation.</p>
            </div>

            <img class="title_img" src="../assets/Insight_TitleImg.png" alt="Page UI/UX Updates Title Image">

            <p class="project_text">The Orbital Stack software, with a large feature set there are a few pages that have not been updated, or might only have inital UIs.
                This project is focoused on simply reworking the existing UI, modernizing and improving the user experence for these pages. This particular page will look at
                two pages, the first of which is an upload and select feature for images, and the secound is for defining metadata for uploaded results files. 
            </p>

            <img class="inline_img" src="../assets/Insight_Before.png">

            <p class="project_text">This is the inital UI for the first page, the gallary and upload features are on diffrent tabs, and the currently selected image
                is off to the right and is not well labeled. Athough functional, the UX of this page is quite cumbersome, and takes navagating sevral tabs to properly 
                upload an image. The overall upload space is also quite small and the page has lots of unused space.
            </p>

            <br>

            <p class="project_text">By expanding the size of the upload area, this new layout puts all functionality on one page, streamlining the upload process.
                it also allows for larger display of some of the elements such as the currently selected image.
            </p>

            <img class="inline_img" src="../assets/Insight_After.png">

            <p class="project_text">Continuing with this project, moving on to the secound page for uploading metadata. For this page the main consurn is primaraly the UI
                design rather than the UX or flow of the site. Overall this page feels dated, and does not fit in well with the rest of the app, breaking continuity. The format
                also consentrates everything in a narrow center row, creating dead space along the sides and extending the scroll content.
            </p>

            <img class="inline_img" src="../assets/MetaData_Before.png">

            <p class="project_text">By reformating this page to fit with the existing modal styles for the rest of the app, and redistrabuting 
                some of the elements to better fit the space.
            </p>

            <img class="inline_img" src="../assets/MetaData_After.png">
        </div>
    </section>
    
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



</style>