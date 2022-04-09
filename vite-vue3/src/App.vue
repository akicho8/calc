<script setup>
import CalcApp from './components/CalcApp.vue'
</script>

<template>
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
</template>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
  gap: 0.5rem;
}
html {
  background-color: hsla(0, 0%, 20%);
}
</style>
