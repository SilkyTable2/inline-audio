import { LitElement, html, css } from 'lit';

class InlineAudio extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      .textbox {
        font-size: 12px;
      }
    }
  `;

  constructor() {
    super();

  }

  render() {
    return html`
      <main>
        <div class="textbox">
          Hello, World
        </div>
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);