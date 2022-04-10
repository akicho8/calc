<template>
<span class="CalcApp">
  <!-- <hr> -->
  <!-- {{ax_r}},{{op_r}},{{bx_r}} -->
  <!-- <hr> -->
  <CalcDisplay>{{resultString}}</CalcDisplay>
  <div class="CalcNumButtons">
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
  data() {
    return {
      ax_r: 0,
      bx_r: null,
      cx_r: null,
      op_r: null,
    }
  },
  watch: {
    ax_r(new_v, old_v) {
      document.title = new_v.toString()
    },
  },
  methods: {
    onNumberClickHandle(plus_value) {
      if (this.op_r == null) {
        this.ax_r = this.ax_r * 10 + plus_value
      } else {
        this.bx_r = this.bx_r * 10 + plus_value
      }
    },
    onZeroZeroClick() {
      onNumberClickHandle(0)
      onNumberClickHandle(0)
    },
    onClearHandle() {
      this.bx_r = null
    },
    onAllClearHandle() {
      this.ax_r = 0
      this.bx_r = null
      this.cx_r = null
      this.op_r = null
    },
    onSetOpHandle(v) {
      if (this.bx_r != null) {
        this.calcUpdate()
      }
      this.op_r = v
    },
    onEqualHandle() {
      if (this.op_r != null) {
        // bx がなければ cx か ax を設定
        if (this.bx_r == null) {
          if (false) {
            // `??` 演算子が解釈できない
            // this.bx_r = this.cx_r ?? this.ax_r
          } else {
            if (this.cx_r != null) {
              this.bx_r = this.cx_r
            } else if (this.ax_r != null) {
              this.bx_r = this.ax_r
            }
          }
        }
        // ここで this.bx_r には確実に値が入っている
        // React では入っていない
        this.calcUpdate()
        this.cx_r = this.bx_r
        this.bx_r = null
      }
      // // しかたなくばらして実行
      // // すでに使いにくくなっている
      //   if (this.op_r != null) {
      //     let rhv = this.bx_r ?? this.cx_r ?? this.ax_r
      //     const value = calcUpdate2(this.ax_r, rhv, this.op_r)
      //     this.ax_r = value
      //     this.bx_r = null
      //     this.cx_r = rhv
      //   }
    },
    calcUpdate() {
      const value = this.calcUpdate2(this.ax_r, this.bx_r, this.op_r)
      this.ax_r = value
      this.bx_r = null
    },
    calcUpdate2(ax, bx, op) {
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
    },
    onSignToggle() {
      if (this.bx_r != null) {
        this.bx_r = -this.bx_r
      } else if (this.ax_r != null) {
        this.ax_r = -this.ax_r
      }
    },
    onParcentage() {
      if (this.bx_r != null) {
        this.bx_r = this.bx_r / 100
      } else if (this.ax_r != null) {
        this.ax_r = this.ax_r / 100
      }
    },
  },
  computed: {
    isClearHandle() {
      return this.bx_r != null
    },
    resultString() {
      let str = null
      if (this.bx_r != null) {
        str = this.bx_r
      } else if (this.ax_r != null) {
        str = this.ax_r
      }
      return str
    },
  },
}
</script>

<style scoped>
</style>
