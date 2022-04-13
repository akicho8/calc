import { html, css, LitElement } from 'lit'

export class CalcOpButton extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    }
  }

  // constructor() {
  //   super()
  //   this.setAttribute("class", "CalcOpButton")
  // }

  render() {
    return html`
      <button class="CalcOpButton">${this.label}</button>
    `
  }
}

window.customElements.define('my-calc-op-button', CalcOpButton)
