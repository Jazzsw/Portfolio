<template>

<div class="footer">

    <div class="contact_title">CONTACT ME</div>
    <h2 class="contact_name">Jazz Stocker-Witterick</h2>

    <div class="contact_info">
        <a href="https://github.com/Jazzsw" target="_blank" rel="noopener noreferrer">
            <img src="../assets/github.svg" alt="GitHub" class="footer_icon">
        </a>
        <a href="https://www.linkedin.com/in/jazzsw/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/linkedin.svg" alt="LinkedIn" class="footer_icon">
        </a>
        <a href="mailto:jazzswdev@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/gmail.svg" alt="Email" class="footer_icon">
        </a>
    </div>

    <p class="copyright">Copyright © 2025 Jazz Stocker-Witterick. All rights reserved.</p>
</div>

</template>


<style scoped> 
.contact_title{
    color: transparent;
    background: #3B0081;
    background: linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: 400;
}
.contact_name{
    color: rgb(236, 236, 236);
    font-family: "Montserrat", sans-serif;
    font-size: 3rem;
    font-weight: 300;
    font-style: normal;
    text-align: center;
    margin-top: 0;
    margin-bottom: 1.5rem;
}

.contact_info{
    width:40%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    color: rgb(236, 236, 236);
}
.copyright{
    margin-top: 2rem;
    color: rgb(236, 236, 236);
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
    text-align: center;
}

.footer_icon {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    filter: invert(97%) sepia(6%) saturate(261%) hue-rotate(234deg) brightness(115%) contrast(85%);
    margin: 0.5rem;
}


</style>