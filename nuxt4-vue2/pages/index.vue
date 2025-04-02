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
  mounted() {
    console.log(this.$route)
  },
  async asyncData({ $axios, query }) {
    console.log("SSR {")
    console.log(query)
    console.log("SSR }")
    return { }
  },
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
