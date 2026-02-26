<script setup>
import SplineBackground from '../components/Spline.vue';
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
  pointer-events: none;
  height: auto;
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
  position: absolute;
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
  z-index: 2;
}

.hero_content, 
.navbar a, 
.navbar img,
.hero a {
  pointer-events: auto !important;
}


</style>
