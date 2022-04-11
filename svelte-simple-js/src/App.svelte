<script>
  import CalcApp from './lib/CalcApp.svelte'
</script>

<main>
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
  <CalcApp />
</main>

<!-- <svelte:head> -->
<!--   <style> -->
<!--     html { -->
<!--       background-color: hsla(0, 0%, 20%); -->
<!--     } -->
<!--   </style> -->
<!-- </svelte:head> -->

<style>
  :global(html) {
    background-color: hsla(0, 0%, 20%);
  }
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.5rem;
    gap: 0.5rem;
  }
</style>
