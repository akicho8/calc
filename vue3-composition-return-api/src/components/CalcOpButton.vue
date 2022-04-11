<template>
  <button class="CalcOpButton">
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
  },
}
</script>

<style scoped>
</style>
