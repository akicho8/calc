<template>
<button class="CalcDarkButton" v-on="$listeners">
  {{label}}
</button>
</template>

<script>
export default {
  name: "CalcDarkButton",
  props: {
    label: { type: String },
  },
}
</script>

<style scoped>
</style>
