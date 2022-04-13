import { html, css, LitElement } from 'lit'

import './CalcDisplay.js'
import './CalcNumButton.js'
import './CalcDarkButton.js'
import './CalcOpButton.js'

// import './CalcApp.css'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CalcApp extends LitElement {
  // static get styles() {
  //   return css`
  //     :host {
  //       background-color: blue;
  //     }
  //   `
  // }

  static get properties() {
    return {
      ax_r: { type: Number },
      bx_r: { type: Number },
      cx_r: { type: Number },
      op_r: { type: String },
    }
  }

  constructor() {
    super()
    // this.setAttribute("class", "CalcApp")
    this.ax_r = 0
    this.bx_r = null
    this.cx_r = null
    this.ox_r = null
  }

  render() {
    return html`
      <span class="CalcApp">
        <div>${this.ax_r},${this.op_r},${this.bx_r}(${this.cx_r})</div>
        <my-calc-display>${this.resultString()}</my-calc-display>
        <div class="CalcNumButtons">
          ${this.isClearHandle()
           ? html`<my-calc-dark-button label="C"  @click=${this.onClearHandle} />`
           : html`<my-calc-dark-button label="AC" @click=${this.onAllClearHandle} />`
          }
          <my-calc-dark-button label="±" @click=${this.onSignToggle} ></my-calc-dark-button>
          <my-calc-dark-button label="％" @click=${this.onParcentage} ></my-calc-dark-button>
          <my-calc-op-button   label="÷" @click=${() => this.onSetOpHandle("/")} ></my-calc-op-button>
          <my-calc-num-button  label="7"  @click=${() => this.onNumberClickHandle(7)} ></my-calc-num-button>
          <my-calc-num-button  label="8"  @click=${() => this.onNumberClickHandle(8)} ></my-calc-num-button>
          <my-calc-num-button  label="9"  @click=${() => this.onNumberClickHandle(9)} ></my-calc-num-button>
          <my-calc-op-button   label="×" @click=${() => this.onSetOpHandle("*")} ></my-calc-op-button>
          <my-calc-num-button  label="4"  @click=${() => this.onNumberClickHandle(4)} ></my-calc-num-button>
          <my-calc-num-button  label="5"  @click=${() => this.onNumberClickHandle(5)} ></my-calc-num-button>
          <my-calc-num-button  label="6"  @click=${() => this.onNumberClickHandle(6)} ></my-calc-num-button>
          <my-calc-op-button   label="-"  @click=${() => this.onSetOpHandle("-")} ></my-calc-op-button>
          <my-calc-num-button  label="1"  @click=${() => this.onNumberClickHandle(1)} ></my-calc-num-button>
          <my-calc-num-button  label="2"  @click=${() => this.onNumberClickHandle(2)} ></my-calc-num-button>
          <my-calc-num-button  label="3"  @click=${() => this.onNumberClickHandle(3)} ></my-calc-num-button>
          <my-calc-op-button   label="+"  @click=${() => this.onSetOpHandle("+")} ></my-calc-op-button>
          <my-calc-num-button  label="0"  @click=${() => this.onNumberClickHandle(0)} is_wide ></my-calc-num-button>
          <my-calc-num-button  label="00" @click=${this.onZeroZeroClick} ></my-calc-num-button>
          <my-calc-op-button   label="="  @click=${this.onEqualHandle} ></my-calc-op-button>
        </div>
      </span>
    `
  }

  //   useEffect(() => {
  //     document.title = ax_r.toString()
  //   }, [ax_r])
  //

  onNumberClickHandle(plus_value) {
    if (this.op_r == null) {
      this.ax_r = this.ax_r * 10 + plus_value
    } else {
      this.bx_r = this.bx_r * 10 + plus_value
    }
  }

  onZeroZeroClick() {
    this.onNumberClickHandle(0)
    this.onNumberClickHandle(0)
  }

  onClearHandle() {
    this.bx_r = null
  }

  onAllClearHandle() {
    this.ax_r = 0
    this.bx_r = null
    this.cx_r = null
    this.op_r = null
  }

  onSetOpHandle(op_r) {
    if (this.bx_r != null) {
      this.calcUpdate()
    }
    this.op_r = op_r
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
  }

  onParcentage() {
    if (this.bx_r != null) {
      this.bx_r = this.bx_r / 100
    } else if (this.ax_r != null) {
      this.ax_r = ax_r / 100
    }
  }

  // // computed
  // // https://qiita.com/okumurakengo/items/999243dcfcd1d015e2d5#react-8
  //
  isClearHandle() {
    return this.bx_r != null
  }
  //
  resultString() {
    let str = null
    if (this.bx_r != null) {
      str = this.bx_r
    } else if (this.ax_r != null) {
      str = this.ax_r
    }
    return str
  }
}

window.customElements.define('my-calc-app', CalcApp)
