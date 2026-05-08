<script setup>
import router from './router';
import Footer from './components/Footer.vue';

</script>

<template>

<div id="navbar" class="navbar">
  <router-link class="navbar_link" to="/">Home</router-link>
  <a href="/#projects"><p class="navbar_p_link">Projects</p></a>
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
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1rem;
  z-index: 10;
}

.navbar_link {
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
}

.navbar_p_link {
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
}

a{
  text-decoration: none;
}

a:visited{
  color:rgb(236, 236, 236);
  background-color: rgb(236, 236, 236);;
  text-decoration: none;
}

.navbar_link:hover{
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.navbar_p_link{
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

.logo {
  width: 5rem;
  height: 5rem;
}
.logo:hover, a:hover{
  transform: scale(1.1);
  transition: transform 0.3s ease;
}



</style>