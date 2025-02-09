<template>
<div class="displayPosition">
    <div class="Kinds">
        {{ calculationKinds }}
    </div>
    <div class="number">
        {{ calculationResult }}
    </div>

</div>

</template>
    
    
    
    
<script setup lang="ts">
import { calculationResult ,calculationKinds } from './Constant';

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
    width: 60%;
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
    width: 20%;
    height: 80%;
    position: relative;
    top:5%;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
}
    
    
    
</style>