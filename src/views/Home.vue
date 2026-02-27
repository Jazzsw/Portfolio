<script setup>
import SplineBackground from '../components/Spline.vue';
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
        <div class="blurb">
          <p>Welcome to my portfolio! I'm a software developer and UI/UX designer currently pursuing a degree in Software Engineering and working as a UX design intern at RWDI's Orbital Stack</p>
        </div>
      </div>

      <img src="/src/assets/arrow.svg" alt="Scroll Down" class="arrow">
    </section>

    <section class="projects">
      <div class="projects_title">WORK / PROJECTS</div>

      <div class="project_items">
        <div class="project_item">
          <h3 class="project_title">RWDI ORBITAL STACK</h3>
          <p>some body text...</p>
        </div>
      </div>
      
    
      
    </section>

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

.blurb {
  color:rgb(236, 236, 236);
  font-family: "montserrat", sans-serif;
  font-weight: 300;
  font-style: normal;
  width: 50%;
  margin: 0 auto;
  pointer-events: none;
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
  background-color: #020005;
  min-height: 100vh;
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
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
} 

.project_items{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project_item{
  color:rgb(236, 236, 236);
  font-family: "montserrat", sans-serif;
  border: 0.5px solid transparent;
  background: linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10)) padding-box,
    linear-gradient(20deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3)), border-box;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
.project_item:hover{
  background: linear-gradient(rgb(10, 10, 10), rgb(10, 10, 10)) padding-box,
    linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%), border-box;
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.project_title{
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
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
