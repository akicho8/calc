import { html, css, LitElement } from 'lit'

export class CalcDisplay extends LitElement {
  render() {
    return html`
      <div class="CalcDisplay">
        <slot></slot>
      </div>
    `
  }
}

window.customElements.define('my-calc-display', CalcDisplay)
