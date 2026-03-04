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
            <p class="project_discription">some discription text here about this particular project. lots of text sould wrap</p>
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
            <p class="project_discription">some discription text here about this particular project. lots of text sould wrap</p>
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
          <p class="project_discription">some discription text here about this particular project. lots of text sould wrap</p>
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
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project_discription{
  margin-left: 1rem;
  margin-right: 1rem;
  color:rgb(236, 236, 236);
  font-family: "Host Grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.navbar_link{
  width:100%;
  align-items: end;
  text-decoration: none;
}

.button_border{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40%;
  height: 3rem;
  padding: 1px;
  background: linear-gradient(20deg, rgba(59, 0, 129, 1) 0%, rgba(196, 94, 221, 1) 100%);
  margin-bottom: 1rem;
  margin-right: 1rem;
  justify-self: flex-end;
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
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-top: 1rem;
}

.project_items{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}


.mask_item{
  -webkit-mask-image: url('../assets/svg_card_mask.svg');
  mask-image: url('../assets/svg_card_mask.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  width: 101%;
  height: 101%;
  aspect-ratio: 30 / 42;
  background-color: rgb(10, 10, 10);
}
.mask_item:hover{
  background: #020005;
}

.card_container{
  width:30%;
  filter: drop-shadow(0px 6px 5px rgba(62, 48, 64, 0.3));

}


.mask_border{
  width: 100%;
  height: auto;
  aspect-ratio: 30 / 42;
  background: rgba(255, 255, 255, 0.3); 
  padding: 0px; 
  mask-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
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