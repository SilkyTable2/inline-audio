import { LitElement, html, css } from 'lit';
import simplecolors from 'simplecolors';

class PLayButton extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      .textbox {
        font-size: 12px;
      }
    }
    .boxparameters {
        min-width:
    }
  `;

  constructor() {
    super();

  }

  render() {
    return html`
      <main>
        <div class="boxparameters"></div>
      </main>
    `;
  }
}

customElements.define('play-button', PlayButton);