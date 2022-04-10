<template>
<button class="CalcOpButton" v-on="$listeners">
  {{label}}
</button>
</template>

<script>
export default {
  name: "CalcOpButton",
  props: {
    label: { type: String },
  },
}
</script>

<style scoped>
</style>
