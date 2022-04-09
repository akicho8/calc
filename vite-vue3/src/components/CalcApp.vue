<script setup>
import { ref, computed } from 'vue'

import CalcNumButton  from "./CalcNumButton.vue"
import CalcOpButton   from "./CalcOpButton.vue"
import CalcDarkButton from "./CalcDarkButton.vue"
import CalcDisplay    from "./CalcDisplay.vue"
import "./CalcApp.css"

const ax_value = ref(0)
const bx_value = ref(null)
const cx_value = ref(null)
const op_value = ref(null)

function onNumberClickHandle(plus_value) {
  if (op_value.value == null) {
    ax_value.value = ax_value.value * 10 + plus_value
  } else {
    bx_value.value = bx_value.value * 10 + plus_value
  }
}

function onZeroZeroClick() {
  onNumberClickHandle(0)
  onNumberClickHandle(0)
}

function onClearHandle() {
  bx_value.value = null
}

function onAllClearHandle() {
  ax_value.value = 0
  bx_value.value = null
  cx_value.value = null
  op_value.value = null
}

function onSetOpHandle(v) {
  if (bx_value.value != null) {
    calcUpdate()
  }
  op_value.value = v
}

function onEqualHandle() {
  if (op_value.value != null) {
    // bx がなければ cx か ax を設定と自然に書ける
    if (bx_value.value == null) {
      bx_value.value = cx_value.value ?? ax_value.value
    }
    // ここで bx_value.value には確実に値が入っている
    // React では入っていない
    calcUpdate()
    cx_value.value = bx_value.value
    bx_value.value = null
  }
  // // しかたなくばらして実行
  // // すでに使いにくくなっている
  //   if (op_value.value != null) {
  //     let rhv = bx_value.value ?? cx_value.value ?? ax_value.value
  //     const value = calcUpdate2(ax_value.value, rhv, op_value.value)
  //     ax_value.value = value
  //     bx_value.value = null
  //     cx_value.value = rhv
  //   }
}

function calcUpdate() {
  const value = calcUpdate2(ax_value.value, bx_value.value, op_value.value)
  ax_value.value = value
  bx_value.value = null
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
  if (bx_value.value != null) {
    bx_value.value = -bx_value.value
  } else if (ax_value.value != null) {
    ax_value.value = -ax_value.value
  }
}

function onParcentage() {
  if (bx_value.value != null) {
    bx_value.value = bx_value.value / 100
  } else if (ax_value.value != null) {
    ax_value.value = ax_value.value / 100
  }
}

// computed

const isClearHandle = computed(() => bx_value.value != null)

const resultString = computed(() => {
  let str = null
  if (bx_value.value != null) {
    str = bx_value
  } else if (ax_value.value != null) {
    str = ax_value
  }
  return str
})
</script>

<template>
  <span class="CalcApp">
    <!-- p {{ax_value}},{{op_value}},{{bx_value}} -->
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

<style>
</style>
