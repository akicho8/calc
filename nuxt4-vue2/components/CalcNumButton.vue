<template>
<button class="CalcNumButton" v-on="$listeners">
  {{label}}
</button>
</template>

<script>
export default {
  name: "CalcNumButton",
  props: {
    label: { type: String },
  },
}
</script>

<style scoped>
</style>
