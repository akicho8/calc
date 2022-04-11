<template>
  <button class="CalcNumButton">
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
