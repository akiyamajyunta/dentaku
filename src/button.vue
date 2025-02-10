<template>
  <v-card class="buttonPosition">
    <div class="buttonSpace  justify-content">
      <div class="buttonNumber" @click="inputNumber()">
        <v-btn class="button" @click="number=7">7</v-btn>
        <v-btn class="button" @click="number=8">8</v-btn>
        <v-btn class="button" @click="number=9">9</v-btn>
      </div>
      <div class="buttonCalculation " @click="inputSymbol()">
          <v-btn class="button" @click="symbol='DEL'">DEL</v-btn>
          <v-btn class="button" @click="symbol='AC'">AC</v-btn>
      </div>    
    </div>
  </v-card>
  <v-card class="buttonPosition">
    <div class="buttonSpace  justify-content">
      <div class="buttonNumber" @click="inputNumber()">
        <v-btn class="button" @click="number=4">4</v-btn>
        <v-btn class="button" @click="number=5">5</v-btn>
        <v-btn class="button" @click="number=6">6</v-btn>
      </div>
      <div class="buttonCalculation" @click="inputSymbol()">
          <v-btn class="button" @click="symbol='X'">X</v-btn>
          <v-btn class="button" @click="symbol='÷'">÷</v-btn>
      </div>    
    </div>
  </v-card>
  
  <v-card class="buttonPosition">
    <div class="buttonSpace  justify-content">
      <div class="buttonNumber" @click="inputNumber()">
        <v-btn class="button" @click="number=1">1</v-btn>
        <v-btn class="button" @click="number=2">2</v-btn>
        <v-btn class="button" @click="number=3">3</v-btn>
      </div>
      <div class="buttonCalculation"  @click="inputSymbol()">
          <v-btn class="button" @click="symbol='+'">+</v-btn>
          <v-btn class="button" @click="symbol='-'">-</v-btn>
      </div>    
    </div>
  </v-card>

  <v-card class="buttonPosition">
    <div class="buttonSpace  justify-content">
      <div class="buttonZero" @click="inputNumber()">
        <v-btn class="button" @click="number = 0">0</v-btn>
        <v-btn class="button" @click="number = 0" :style="{opacity: 0}">0</v-btn>
      </div>   
      <div class="onotherButton" @click="inputSymbol()">
          <v-btn class="button" @click="symbol = '( )'">【】</v-btn>
          <v-btn class="button" @click="symbol = 'pai'">π</v-btn>
          <v-btn class="button" @click="symbol='.'">小数</v-btn>
          <v-btn class="button" @click="symbol='='">=</v-btn>
        </div>
    </div>
  </v-card>         
</template>
    
  
    
    
<script setup lang="ts">
import { number,symbol} from './Constant';
import { inputNumber,inputSymbol} from './input';


</script>
    
    
    
<style scoped>
.buttonPosition{
  justify-content: center;
  display: flex;
  width: 100%;
  height: 19%;
  position: relative;
  top:10%;
}

.buttonSpace{
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  width: 90%;
  height: 100%;
  background-color: rgba(119, 119, 119, 0.632);
}

.button{
  font-size: 20px;
  border-radius: 30px;
  border: 2px solid rgb(0, 0, 0);
  width: 50%;
  height: 50%;
  background-color: azure;
  display: flex;           
  justify-content: center;     
  align-items: center;   
  
}

.buttonNumber{
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  width: 90%;
  height: 100%;
  background-color: rgba(110, 97, 97, 0);
}

.buttonCalculation{
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  width: 60%;
  height: 100%;
  background-color: rgba(110, 95, 95, 0);
}

.buttonZero{
  text-align: center;
  position: relative;
  right:25%;
  display: flex;
  width: 50%;
  height: 100%;
  background-color: rgba(117, 117, 117, 0);
}

.onotherButton{
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 25%;
  display: flex;
  width: 75%;
  height: 100%;
  background-color: rgba(117, 117, 117, 0);
}
    
    
</style>
    