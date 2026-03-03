<template>
<div class="project_items">
        <div class="mask_border">
          <div class="mask_item">
            <div class="title_block">
              <h3 class="project_title">Sim Usability Study</h3>
            </div>
            <div class="project_content">
                <img src="../assets/Sim_TitleImg.png" alt="Sim Usability Study" class="project_image">

            </div>
          </div>
        </div>

        <div class="mask_border">
          <div class="mask_item">
            <div class="title_block">
              <h3 class="project_title">Page UI/UX Updates</h3>
            </div>
            <div class="project_content">
                <img src="../assets/Insight_TitleImg.png" alt="Page UI/UX Updates" class="project_image">
                
            </div>
          </div>
        </div>


        <div class="mask_border">
          <div class="mask_item">
            <div class="title_block">
              <h3 class="project_title">Component Design</h3>
            </div>
            <div class="project_content">
                <img src="../assets/Component_TitleImg.png" alt="Component Design" class="project_image">
            </div>
          </div>
        </div>

    </div>

</template>

<style scoped>

.project_content{
    width: 100%;
    height: auto;
    display: flex;
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

.mask_border{
  /* box-shadow: 0 4px 8px 0 rgba(236, 236, 236, 0.5); */
  width: 30%;
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