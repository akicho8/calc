<script>
  import CalcNumButton  from "./CalcNumButton.svelte"
  import CalcOpButton   from "./CalcOpButton.svelte"
  import CalcDarkButton from "./CalcDarkButton.svelte"
  import CalcDisplay    from "./CalcDisplay.svelte"
  import "./CalcApp.css"

  let ax_r = 0
  let bx_r = null
  let cx_r = null
  let op_r = null

  $: {
    document.title = ax_r.toString()
  }

  function onNumberClickHandle(plus_value) {
    if (op_r == null) {
      ax_r = ax_r * 10 + plus_value
    } else {
      bx_r = bx_r * 10 + plus_value
    }
  }

  function onZeroZeroClick() {
    onNumberClickHandle(0)
    onNumberClickHandle(0)
  }

  function onClearHandle() {
    bx_r = null
  }

  function onAllClearHandle() {
    ax_r = 0
    bx_r = null
    cx_r = null
    op_r = null
  }

  function onSetOpHandle(v) {
    if (bx_r != null) {
      calcUpdate()
    }
    op_r = v
  }

  function onEqualHandle() {
    if (op_r != null) {
      bx_r ??= cx_r ?? ax_r
      calcUpdate()
    }
  }

  function calcUpdate() {
    const value = calcUpdate2(ax_r, bx_r, op_r)
    ax_r = value
    cx_r = bx_r
    bx_r = null
  }

  function calcUpdate2(ax, bx, op) {
    let value = null;
    if (false) {
    } else if (op === "+") {
      value = ax + bx
    } else if (op === "-") {
      value = ax - bx
    } else if (op === "*") {
      value = ax * bx
    } else if (op === "/") {
      value = ax / bx
    }
    return Math.trunc(value)
  }

  function onSignToggle() {
    if (bx_r != null) {
      bx_r = -bx_r
    } else if (ax_r != null) {
      ax_r = -ax_r
    }
  }

  function onParcentage() {
    if (bx_r != null) {
      bx_r = bx_r / 100
    } else if (ax_r != null) {
      ax_r = ax_r / 100
    }
  }

  // computed

  $: isClearHandle = bx_r != null

  $: resultString = (() => {
    let str = null
    if (bx_r != null) {
      str = bx_r
    } else if (ax_r != null) {
      str = ax_r
    }
    return str
  })();
</script>

<span class="CalcApp">
  <!-- <p>{ax_r},{op_r},{bx_r}({cx_r})</p> -->
  <CalcDisplay>{resultString}</CalcDisplay>
  <div class="CalcNumButtons">
    {#if isClearHandle}
      <CalcDarkButton label="C"  on:click={() => onClearHandle()} />
    {:else}
      <CalcDarkButton label="AC" on:click={() => onAllClearHandle()} />
    {/if}
    <CalcDarkButton label="±" on:click={() => onSignToggle()} />
    <CalcDarkButton label="％" on:click={() => onParcentage()} />
    <CalcOpButton   label="÷" on:click={() => onSetOpHandle('/')} />
    <CalcNumButton  label="7"  on:click={() => onNumberClickHandle(7)} />
    <CalcNumButton  label="8"  on:click={() => onNumberClickHandle(8)} />
    <CalcNumButton  label="9"  on:click={() => onNumberClickHandle(9)} />
    <CalcOpButton   label="×" on:click={() => onSetOpHandle('*')} />
    <CalcNumButton  label="4"  on:click={() => onNumberClickHandle(4)} />
    <CalcNumButton  label="5"  on:click={() => onNumberClickHandle(5)} />
    <CalcNumButton  label="6"  on:click={() => onNumberClickHandle(6)} />
    <CalcOpButton   label="-"  on:click={() => onSetOpHandle('-')} />
    <CalcNumButton  label="1"  on:click={() => onNumberClickHandle(1)} />
    <CalcNumButton  label="2"  on:click={() => onNumberClickHandle(2)} />
    <CalcNumButton  label="3"  on:click={() => onNumberClickHandle(3)} />
    <CalcOpButton   label="+"  on:click={() => onSetOpHandle('+')} />
    <CalcNumButton  label="0"  on:click={() => onNumberClickHandle(0)} is_wide />
    <CalcNumButton  label="00" on:click={() => onZeroZeroClick()} />
    <CalcOpButton   label="="  on:click={() => onEqualHandle()} />
  </div>

  <!-- {@debug ax_r} -->
  <!-- {@debug bx_r} -->
  <!-- {@debug cx_r} -->
  <!-- {@debug op_r} -->
</span>

<style>
</style>
