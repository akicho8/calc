import { html, css, LitElement } from 'lit'

export class CalcDarkButton extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    }
  }

  // constructor() {
  //   super()
  //   this.setAttribute("class", "CalcApp")
  // }

  render() {
    return html`
      <button class="CalcDarkButton">${this.label}</button>
    `
  }
}

window.customElements.define('my-calc-dark-button', CalcDarkButton)
