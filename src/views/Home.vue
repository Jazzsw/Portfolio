<script setup>
import SplineBackground from '../components/Spline.vue';
import SkillsIconList from '../components/SkillsIconList.vue';
import ProjectList from '../components/ProjectList.vue';
import ThreeScrollNew from '@/components/ThreeScrollNew.vue';
import ProjectListNew from '@/components/ProjectListNew.vue';

</script>

<template>
  <div id="app">
    <div>
      <!-- <ThreeScrollNew /> -->
      <div id="projects"></div>
      <ProjectListNew />
    </div>
  </div>
</template>

<style scoped>
#projects {
  
}

.footer {
  width: 100%;
  height: 20vh;
  background-color: #020005;
}
</style>
