<template>
<div class="IndexPage">
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
html {
  background-color: hsla(0, 0%, 20%);
}
.IndexPage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
  gap: 0.5rem;
}
</style>
