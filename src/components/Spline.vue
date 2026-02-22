<template>
  <div class="spline_container">
    <canvas ref="canvas3d"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Application } from '@splinetool/runtime';

const canvas3d = ref(null);

onMounted(() => {
  if (canvas3d.value) {
    const spline = new Application(canvas3d.value);
    spline.load('https://prod.spline.design/wv3kZ1pEz0s-qMgE/scene.splinecode');
  }
});
</script>

<style scoped>
.spline-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;           
  pointer-events: auto;
}

canvas {
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  pointer-events: auto !important;
  touch-action: none;
}
</style>