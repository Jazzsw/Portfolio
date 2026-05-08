<script setup>
import router from '../router';

</script>


<template>
<div class="project_items">
  
  <div class="card_container">
  <div class="mask_border">
    <div class="mask_item">
      <div class="title_block">
        <h3 class="project_title">Sim Usability Study</h3>
      </div>
      <div class="project_body">
        <img src="../assets/Sim_TitleImg.png" alt="Sim Usability Study" class="project_image">
        <div class="project_content">
            <p class="project_discription">I refactored the core simulation interface by benchmarking against industry-standard CAD tools to achieve higher information density. This optimization consolidated fragmented controls and maximized the visual viewport, significantly improving the data analysis experience for engineers.</p>
            <router-link class="navbar_link" to="/Project1">
              <div class="button_border">
                <div class="view_btn">View Project</div>
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="card_container">
  <div class="mask_border">
    <div class="mask_item">
      <div class="title_block">
        <h3 class="project_title">Page UI/UX Updates</h3>
      </div>
      <div class="project_body">
        <img src="../assets/Insight_TitleImg.png" alt="Page UI/UX Updates" class="project_image">
        <div class="project_content">
            <p class="project_discription">I streamlined the digital asset pipeline by consolidating the tab-based upload process into a unified component. Furthermore, I overhauled the metadata entry system to align with the application’s design system, resolving long-standing UX debt.</p>
            <router-link class="navbar_link" to="/Project2">
              <div class="button_border">
                <div class="view_btn">View Project</div>
              </div>
            </router-link>  
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="card_container">
  <div class="mask_border">
    <div class="mask_item">
      <div class="title_block">
        <h3 class="project_title">Component Design</h3>
      </div>
      <div class="project_body">
        <img src="../assets/Component_TitleImg.png" alt="Component Design" class="project_image">
        <div class="project_content">
          <p class="project_discription">Some examples of individual component designs and their implementations across different sections of the application. (full post coming soon)</p>
          <router-link class="navbar_link" to="/Project3">
            <div class="button_border">
              <div class="view_btn">View Project</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </div>

</div>

</template>

<style scoped>
.project_body{
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
}

.project_discription{
  margin-left: 1rem;
  margin-right: 1rem;
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 0.95rem;
  line-height: 1.4;
}

.navbar_link{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-decoration: none;
  margin-top: 0.5rem;
}

.button_border{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 60%;
  max-width: 150px;
  height: 2.5rem;
  padding: 1px;
  background: linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%);
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.view_btn{
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(236, 236, 236);
  font-family: "montserrat", sans-serif;
  border: none;
  border-radius: 10px;
  background: #020005;
}

.project_content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.project_image{
    margin-top: 2rem;
    /* width: 100%;
    height: auto; */
    height:40%;
    width: auto;
    border-radius: 0.5rem;
    margin-top: 1rem;
}

.project_items{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 1200px) {
  .project_items {
    flex-direction: column;
    align-items: center;
  }

  .card_container {
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .card_container {
    width: 100%;
    max-width: 350px;
  }

  .button_border {
    width: 70%;
    height: 2.25rem;
  }

  .view_btn {
    font-size: 0.9rem;
  }

  .project_discription {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    font-size: 0.85rem;
  }

  .project_title {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .project_items {
    width: 95%;
  }

  .card_container {
    width: 100%;
    max-width: 100%;
  }

  .button_border {
    width: 80%;
    max-width: 120px;
    height: 2rem;
  }

  .project_discription {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }

  .project_title {
    font-size: 0.85rem;
  }

  .view_btn {
    font-size: 0.8rem;
  }
}


.mask_item{
  -webkit-mask-image: url('../assets/svg_card_mask.svg');
  mask-image: url('../assets/svg_card_mask.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 10, 10);
}
.mask_item:hover{
  background: #020005;
}

.card_container{
  width:30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 6px 5px rgba(62, 48, 64, 0.3));

}


.mask_border{
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3); 
  padding: 0px; 
  mask-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  
  -webkit-mask-image: url('../assets/svg_card_mask.svg');
  mask-image: url('../assets/svg_card_mask.svg');
  mask-size: contain;
}
.mask_border:hover{
  padding: 1px; 
  background: linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.title_block{
  position: relative;
  width: 55%;
  margin-left: 1rem;
}

.project_title{
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
}

</style>