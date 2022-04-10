<script>
  export let label
  export let is_wide = false

  $: current_class = [
    "CalcNumButton",
    is_wide ? "is_2x" : "",
  ].join(" ")
</script>

<button class={current_class} on:click>
  {label}
</button>

<style>
</style>
