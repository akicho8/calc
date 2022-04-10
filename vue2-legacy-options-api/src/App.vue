<template>
  <div id="app">
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <CalcApp/>
    <router-view/>
  </div>
</template>

<script>
import CalcApp from '@/components/CalcApp'

export default {
  name: 'App',
  components: {
    CalcApp,
  },
}
</script>

<style>
html {
  background-color: hsla(0, 0%, 20%);
}
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
  gap: 0.5rem;
}
</style>
