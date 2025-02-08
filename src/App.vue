<template>
<div class="setPosition">
  <div class="maine">
    <display/>
  
    <buttonsDisplay/>

  </div>
</div>


</template>




<script setup lang="ts">
import buttonsDisplay  from './button.vue';
import display from './display.vue';

</script>



<style scoped>
.setPosition{
  width: 100%;
  height: 700px;
  display: flex;
  background-color: rgb(0, 0, 0);
  justify-content: center;
  align-items: center;
 
}
.maine{
  height: 80%;
  aspect-ratio: 3/ 4;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 255, 13);
}




</style>
