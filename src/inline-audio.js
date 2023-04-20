import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

class InlineAudio extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {

      }
  `;

  constructor() {
    super();

  }



  render() {
    return html`
      <main>
        
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);