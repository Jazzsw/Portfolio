<script setup>
import SplineBackground from './components/Spline.vue';
</script>

<template>
  <div id="app">

    <section class="hero">
      <SplineBackground />  

      <div class="navbar">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <img src="../src/assets/logo.svg" alt="Logo" class="logo">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div class="hero_content">
        <h1 class="name">JAZZ STOCKER-WITTERICK</h1>

        <div class="blurb">
          <p>Welcome to my portfolio! I'm a software developer and UI/UX designer currently pursuing a degree in Software Engineering and working as a UX design intern at RWDI's Orbital Stack</p>
        </div>
      </div>
    </section>

    <section class="projects">
      <h2 class="projects_title">PROJECTS</h2>
      <p>project info...yay</p>
    </section>

  </div>
</template>

<style scoped>

.logo {
  width: 5rem;
  height: 5rem;
}
.logo:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.navbar {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  pointer-events: none;
}

.hero_content {
  position: relative;
  pointer-events: none; 
}

a{
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
}
a:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.name {
  margin-top: 13rem;
  color:rgb(236, 236, 236);
  font-family: "Montserrat", sans-serif;
  font-size: 5rem;
  font-weight: 200;
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
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: transparent;
  pointer-events: none; 
  z-index: 2;
}

.hero_content, 
.navbar a, 
.navbar img,
.hero a {
  pointer-events: auto !important;
}

.projects {
  min-height: 100vh;
  background-color: #020005; 
  color: white;
  padding: 0px;
  position: relative;
  z-index: 3;
}

.projects_title{
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 3rem;
}


</style>
