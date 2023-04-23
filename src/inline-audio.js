import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

class InlineAudio extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: inline;
      vertical-align: middle;
      max-width: 960px;
      margin: 0 auto;
      background-color: var()
    }
    .cardDesign{
      display:inline-flex;
      align-items: center;
      padding: 4px 4px 4px 4px;
      
    }
  `;

  constructor() {
    super();

  }



  render() {
    return html`
      <main>
        <div class="cardDesign">

        </div>
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);