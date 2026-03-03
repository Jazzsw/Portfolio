<script setup lang="ts">
import router from './router';
import Footer from './components/Footer.vue';

</script>

<template>

<div class="navbar">
  <router-link class="navbar_link" to="/">Home</router-link>
  <router-link class="navbar_link" to="/projects">Projects</router-link>
  <router-link to="/">
    <img src="/src/assets/logo.svg" alt="Logo" class="logo">
  </router-link>
  <router-link class="navbar_link" to="/about">About</router-link>
  <router-link class="navbar_link" to="/contact">Contact</router-link>
  </div>
  <router-view />

  <Footer />
  

</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  z-index: 10;
}

.navbar_link {
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
}
.navbar_link:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.logo {
  width: 5rem;
  height: 5rem;
}
.logo:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}



</style>