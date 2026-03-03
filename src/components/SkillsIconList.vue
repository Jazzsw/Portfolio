<template>
    <div class="container">
        <img src="../assets/figma.svg" alt="Figma Logo" class="figma-logo">
        <img src="../assets/nextdotjs.svg" alt="Next.js Logo" class="next-logo">
        <img src="../assets/nodedotjs.svg" alt="Node.js Logo" class="node-logo">
        <img src="../assets/vuedotjs.svg" alt="Vue.js Logo" class="vue-logo">
        <img src="../assets/wordpress.svg" alt="WordPress Logo" class="wordpress-logo">
        <img src="../assets/electron.svg" alt="Electron Logo" class="electron-logo">
        <img src="../assets/tailwindcss.svg" alt="Tailwind CSS Logo" class="tailwind-logo">
    </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-around;
  margin-bottom: 4rem;
}
.vue-logo, .figma-logo, .node-logo, .wordpress-logo, .next-logo, .electron-logo, .github-logo, .tailwind-logo{
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  filter: invert(97%) sepia(6%) saturate(261%) hue-rotate(234deg) brightness(115%) contrast(85%);
}
</style>