<template>
  <span class="CalcApp">
    p {{ax_r}},{{op_r}},{{bx_r}}({{cx_r}})
    <CalcDisplay>{{resultString}}</CalcDisplay>
    <div className="CalcNumButtons">
      <template v-if="isClearHandle">
        <CalcDarkButton label="C"  @click="onClearHandle" />
      </template>
      <template v-else>
        <CalcDarkButton label="AC" @click="onAllClearHandle" />
      </template>
      <CalcDarkButton label="±" @click="onSignToggle" />
      <CalcDarkButton label="％" @click="onParcentage" />
      <CalcOpButton   label="÷" @click="onSetOpHandle('/')" />
      <CalcNumButton  label="7"  @click="onNumberClickHandle(7)" />
      <CalcNumButton  label="8"  @click="onNumberClickHandle(8)" />
      <CalcNumButton  label="9"  @click="onNumberClickHandle(9)" />
      <CalcOpButton   label="×" @click="onSetOpHandle('*')" />
      <CalcNumButton  label="4"  @click="onNumberClickHandle(4)" />
      <CalcNumButton  label="5"  @click="onNumberClickHandle(5)" />
      <CalcNumButton  label="6"  @click="onNumberClickHandle(6)" />
      <CalcOpButton   label="-"  @click="onSetOpHandle('-')" />
      <CalcNumButton  label="1"  @click="onNumberClickHandle(1)" />
      <CalcNumButton  label="2"  @click="onNumberClickHandle(2)" />
      <CalcNumButton  label="3"  @click="onNumberClickHandle(3)" />
      <CalcOpButton   label="+"  @click="onSetOpHandle('+')" />
      <CalcNumButton  label="0"  @click="onNumberClickHandle(0)" class="is_2x" />
      <CalcNumButton  label="00" @click="onZeroZeroClick" />
      <CalcOpButton   label="="  @click="onEqualHandle" />
    </div>
  </span>
</template>

<script>
import { ref, computed, watch } from 'vue'

import CalcNumButton  from "./CalcNumButton.vue"
import CalcOpButton   from "./CalcOpButton.vue"
import CalcDarkButton from "./CalcDarkButton.vue"
import CalcDisplay    from "./CalcDisplay.vue"
import "./CalcApp.css"

export default {
  name: "CalcApp",
  components: {
    CalcNumButton,
    CalcOpButton,
    CalcDarkButton,
    CalcDisplay,
  },
  setup() {
    const ax_r = ref(0)
    const bx_r = ref(null)
    const cx_r = ref(null)
    const op_r = ref(null)

    watch(ax_r, (new_v, old_v) => document.title = new_v.toString())

    function onNumberClickHandle(plus_value) {
      if (op_r.value == null) {
        ax_r.value = ax_r.value * 10 + plus_value
      } else {
        bx_r.value = bx_r.value * 10 + plus_value
      }
    }

    function onZeroZeroClick() {
      onNumberClickHandle(0)
      onNumberClickHandle(0)
    }

    function onClearHandle() {
      bx_r.value = null
    }

    function onAllClearHandle() {
      ax_r.value = 0
      bx_r.value = null
      cx_r.value = null
      op_r.value = null
    }

    function onSetOpHandle(v) {
      if (bx_r.value != null) {
        calcUpdate()
      }
      op_r.value = v
    }

    function onEqualHandle() {
      if (op_r.value != null) {
        bx_r.value ??= cx_r.value ?? ax_r.value
        calcUpdate()
      }
    }

    function calcUpdate() {
      const value = calcUpdate2(ax_r.value, bx_r.value, op_r.value)
      ax_r.value = value
      cx_r.value = bx_r.value
      bx_r.value = null
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
      if (bx_r.value != null) {
        bx_r.value = -bx_r.value
      } else if (ax_r.value != null) {
        ax_r.value = -ax_r.value
      }
    }

    function onParcentage() {
      if (bx_r.value != null) {
        bx_r.value = bx_r.value / 100
      } else if (ax_r.value != null) {
        ax_r.value = ax_r.value / 100
      }
    }

    // computed

    const isClearHandle = computed(() => bx_r.value != null)

    const resultString = computed(() => {
      let str = null
      if (bx_r.value != null) {
        str = bx_r
      } else if (ax_r.value != null) {
        str = ax_r
      }
      return str
    })

    return {
      ax_r,
      bx_r,
      cx_r,
      op_r,
    }
  },
}
</script>

<style>
</style>
