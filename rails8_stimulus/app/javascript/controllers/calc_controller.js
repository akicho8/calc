import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "CalcDisplay",
    "onClearButton",
    "onAllClearButton",
  ]

  static values = {
    foo: String,
  }

  connect() {
    console.log({fooValue: this.fooValue})

    this.ax_r = 0
    this.bx_r = null
    this.cx_r = null
    this.op_r = null
    this.update_output()
  }

  onNumberClickHandle(event) {
    console.log(event.params)
    if (this.op_r == null) {
      this.ax_r = this.ax_r * 10 + event.params.plusValue
    } else {
      this.bx_r = this.bx_r * 10 + event.params.plusValue
    }
    this.update_output()
  }

  onZeroZeroClick() {
    this.onNumberClickHandle({params: {plusValue: 0}})
    this.onNumberClickHandle({params: {plusValue: 0}})
  }

  onClearHandle() {
    this.bx_r = null
    this.update_output()
  }

  onAllClearHandle() {
    this.ax_r = 0
    this.bx_r = null
    this.cx_r = null
    this.op_r = null
    this.update_output()
  }

  onSetOpHandle(event) {
    if (this.bx_r != null) {
      this.calcUpdate()
    }
    this.op_r = event.params.op
    this.update_output()
  }

  onEqualHandle() {
    if (this.op_r != null) {
      this.bx_r = (this.bx_r ?? this.cx_r ?? this.ax_r)
      this.calcUpdate()
    }
  }

  calcUpdate() {
    const value = this.calcUpdate2(this.ax_r, this.bx_r, this.op_r)
    this.ax_r = value
    this.cx_r = this.bx_r
    this.bx_r = null
    this.update_output()
  }

  calcUpdate2(ax, bx, op) {
    let value = null
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

  onSignToggle() {
    if (this.bx_r != null) {
      this.bx_r = -this.bx_r
    } else if (this.ax_r != null) {
      this.ax_r = -this.ax_r
    }
    this.update_output()
  }

  onParcentage() {
    if (this.bx_r != null) {
      this.bx_r = this.bx_r / 100
    } else if (this.ax_r != null) {
      this.ax_r = this.ax_r / 100
    }
    this.update_output()
  }

  isClearHandle() {
    return this.bx_r != null
  }

  resultString() {
    let str = null
    if (this.bx_r != null) {
      str = this.bx_r
    } else if (this.ax_r != null) {
      str = this.ax_r
    }
    return str
  }

  update_output() {
    this.onClearButtonTarget.style.display = this.isClearHandle() ? "block" : "none"
    this.onAllClearButtonTarget.style.display = this.isClearHandle() ? "none" : "block"
    this.CalcDisplayTarget.textContent = this.resultString()
    document.title = this.resultString()
  }
}
