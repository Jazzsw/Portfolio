<script setup>
import SplineBackground from '../components/Spline.vue';
import SkillsIconList from '../components/SkillsIconList.vue';
import ProjectList from '../components/ProjectList.vue';
</script>

<script>
  window.addEventListener('scroll', () => {
    let scroll = window.scrollY / window.innerHeight;
    const arrow = document.querySelector('.arrow');

    arrow.style.opacity = 1 - scroll*3;
  });

</script>

<template>
  <div id="app">
    <section class="hero">
      <SplineBackground class="background"/>  

      <div class="hero_content">
        <h1 class="name">JAZZ STOCKER-WITTERICK</h1>
        
          <p class="subtitle">Welcome to my portfolio! I'm a software developer and UI/UX designer currently pursuing a degree in Software Engineering and working as a UX design intern at RWDI's Orbital Stack</p>
        
      </div>

      <img src="/src/assets/arrow.svg" alt="Scroll Down" class="arrow">
    </section>

    <section class="projects">
      <div class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#020005"></path></svg>
      </div>

      <div class="projects_title">WORK / PROJECTS</div>
      <div class="projects_title_container">
        <h2 class="projects_tagline">Where human-centered design meets technical precision.</h2>
        <p class="subtitle">A selection of design and full-stack solutions with a focus on polished user experiences.</p>
      </div>

      <SkillsIconList></SkillsIconList>

      <ProjectList></ProjectList>
      
        
    </section>

    <!-- <section class="footer"> -->
      <div class="divider">
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" class="absolute top-0 bg-transparent"><path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill="#0e0c12"></path></svg>
      </div>

    <!-- </section> -->

  </div>
</template>

<style scoped>

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.hero_content {
  position: relative;
  height: auto;
  z-index: 2;
}

.name {
  color:rgb(236, 236, 236);
  font-family: "Montserrat", sans-serif;
  font-size: 5rem;
  font-weight: 300;
  font-style: normal;
  pointer-events: none;
  user-select: none;
}

.subtitle {
  color:rgb(236, 236, 236);
  font-family: "montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  font-style: normal;
  width: 50%;
  margin: 0 auto;
  pointer-events: none;
  text-align: center;
}

.hero{
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;
  pointer-events: none; 
  z-index: 1;
}

.hero_content, 
.navbar a, 
.navbar img,
.hero a {
  pointer-events: auto !important;
}

.projects {
  position: relative;
  z-index: 0; 
  background-color: #0e0c12;
  min-height: 100vh;
  width: 100%;
  margin: 0%;
  color: aliceblue;
}

.projects_title{
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  color: transparent;
  background: #3B0081;
  background: linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-weight: 400;
} 

.projects_title_container{
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects_tagline{
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  color: rgb(236, 236, 236);
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.footer{
  width: 100%;
  height: 20vh;
  background-color: #020005;
}

.arrow {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: auto;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}


</style>
