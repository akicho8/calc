import { html, css, LitElement } from 'lit'

export class CalcNumButton extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    }
  }

  render() {
    return html`
      <button class="CalcNumButton">${this.label}</button>
    `
  }
}

window.customElements.define('my-calc-num-button', CalcNumButton)
