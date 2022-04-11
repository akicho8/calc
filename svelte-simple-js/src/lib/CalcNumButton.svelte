<script>
  export let label
  export let is_wide = false
</script>

<button class="CalcNumButton" class:is_2x={is_wide} on:click>
  {label}
</button>

<style>
</style>
