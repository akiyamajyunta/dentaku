<template>
<div class="displayPosition">
    <div class="Kinds">
        <p  class="symbol">{{ option }}</p>
    </div>
    <div class="Kinds">
       <p  class="symbol"> {{ method }}</p>
    </div>
    <div class="number">
       <p class="numberResult">{{ result }}</p> 
    </div>

</div>

</template>
    
    
    
    
<script setup lang="ts">
import { result ,method,option } from './Constant';

</script>



<style scoped>
.displayPosition{
    justify-content: center;
    display: flex;
    width: 100%;
    height: 10%;
    position: relative;
    top:5%;
    background-color: rgb(5, 5, 5);
}
.number{
    justify-content: center;
    display: flex;
    width: 80%;
    height: 80%;
    position: relative;
    top:5%;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
}
.Kinds{
    justify-content: center;
    display: flex;
    width: 10%;
    height: 80%;
    position: relative;
    top:5%;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
}
.numberResult{
    position: relative;
    bottom:50%;
    font-size: 30px;
    font-family: 'Century', sans-serif;
}
.symbol{
    position: relative;
    bottom:50%;
    font-size: 20px;
    font-family: 'Century', sans-serif;
}

</style>